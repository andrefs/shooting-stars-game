import {createAction } from 'redux-actions';
import {getUser} from 'lib/api';
import {push} from 'react-router-redux';
import {
  AUTH_LOAD_FINISHED,
  AUTH_LOGIN_REQUEST,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAILURE,
  AUTH_REGISTER_REQUEST,
  AUTH_REGISTER_SUCCESS,
  AUTH_REGISTER_FAILURE,
  AUTH_LOGOUT_SUCCESS
} from '../constants';

export function loadAuth() {
  console.log('XXXXXXXXXXXXXXXXXXX begin loadAuth', getUser);
  return async (dispatch) => {
    const token = window.localStorage.getItem('token');
  console.log('XXXXXXXXXXXXXXXXXXX  loadAuth token', token);
    try {
      const response = await getUser();
  console.log('XXXXXXXXXXXXXXXXXXX  loadAuth response', response);
      const user = await response.json();
  console.log('XXXXXXXXXXXXXXXXXXX  loadAuth user', user);

      dispatch(loadAuthFinished(user));
    }
    catch (err) {
      console.log('XXXXXXXXXXXXXXXXXXXX loadAuth err', err);
      //dispatch(fetchGameFailure(e));
    }

  };
}

export function login(data) {
  return (dispatch) => {
    dispatch(loginRequest(data));

    fetch('/login', null, {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((payload) => {
        window.localStorage.setItem('token', payload.token);
        dispatch(loginSuccess(payload));
        dispatch(push('/chat'));
      })
      .catch((err) => {
        dispatch(loginFailure(err));
      });
  };
}


export function register(data) {
  return (dispatch) => {
    dispatch(registerRequest(data));

    fetch('/register', null, {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((payload) => {
        window.localStorage.setItem('token', payload.token);
        dispatch(registerSuccess(payload));
        dispatch(push('/chat'));
      })
      .catch((err) => {
        dispatch(registerFailure(err));
      });
  };
}


export function logout() {
  return (dispatch) => {
    window.localStorage.removeItem('token');
    dispatch(logoutSuccess());
    dispatch(push('/'));
  };
}

const loadAuthFinished = createAction(AUTH_LOAD_FINISHED);
const loginRequest   = createAction(AUTH_LOGIN_REQUEST);
const loginSuccess   = createAction(AUTH_LOGIN_SUCCESS);
const loginFailure   = createAction(AUTH_LOGIN_FAILURE);


const registerRequest  = createAction(AUTH_REGISTER_REQUEST);
const registerSuccess  = createAction(AUTH_REGISTER_SUCCESS);
const registerFailure  = createAction(AUTH_REGISTER_FAILURE);

const logoutSuccess  = createAction(AUTH_LOGOUT_SUCCESS);


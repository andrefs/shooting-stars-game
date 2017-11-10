import {
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE,
} from '../constants';
import {postLogin} from 'lib/api';
import generateActionCreator from 'lib/generateActionCreator';

export const loginRequest = generateActionCreator(LOGIN_REQUEST);
export const loginSuccess = generateActionCreator(LOGIN_SUCCESS, 'login');
export const loginFailure = generateActionCreator(LOGIN_FAILURE, 'error');

export const login = (username, age, gender) => {
  return async (dispatch) => {
    dispatch(loginRequest());
    try {
      const response = await postLogin(username, age, gender);
      console.log('XXXXXXXXXXXXXXxx 1', response);
      const login = await response.json();

      if (response.status < 200 || response.status >= 300) {
        throw login;
      }

      dispatch(loginSuccess(login));
    } catch (e) {
      dispatch(loginFailure(e));
    }
  };
};


import {
  FETCH_GAME_REQUEST, FETCH_GAME_SUCCESS, FETCH_GAME_FAILURE,
  POST_PICK_REQUEST, POST_PICK_SUCCESS, POST_PICK_FAILURE
} from '../constants';
import {getGameInstance, postPlayerPick} from 'lib/api';
import generateActionCreator from 'lib/generateActionCreator';

export const fetchGameRequest = generateActionCreator(FETCH_GAME_REQUEST);
export const fetchGameSuccess = generateActionCreator(FETCH_GAME_SUCCESS, 'game');
export const fetchGameFailure = generateActionCreator(FETCH_GAME_FAILURE, 'error');

export const postPickRequest = generateActionCreator(POST_PICK_REQUEST);
export const postPickSuccess = generateActionCreator(POST_PICK_SUCCESS, 'game');
export const postPickFailure = generateActionCreator(POST_PICK_FAILURE, 'error');

export const fetchGame = () => {
  return async (dispatch) => {
    dispatch(fetchGameRequest());
    try {
      const response = await getGameInstance();
      const game = await response.json();

      dispatch(fetchGameSuccess(game));
    } catch (e) {
      dispatch(fetchGameFailure(e.message));
    }
  };
};

export const postPick = pick => {
  return async (dispatch) => {

    dispatch(postPickRequest(pick));
    try {
      const response = await postPlayerPick(pick);
      const game = await response.json();

      dispatch(postPickSuccess(game));
    } catch (e) {
      dispatch(postPickFailure(e.message));
    }
  };
};

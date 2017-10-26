import {
  FETCH_BEST_SCORES_REQUEST, FETCH_BEST_SCORES_SUCCESS, FETCH_BEST_SCORES_FAILURE,
} from '../constants';

import {getBestScores} from 'lib/api';
import generateActionCreator from 'lib/generateActionCreator';


export const fetchBestScoresRequest = generateActionCreator(FETCH_BEST_SCORES_REQUEST);
export const fetchBestScoresSuccess = generateActionCreator(FETCH_BEST_SCORES_SUCCESS, 'bestScores');
export const fetchBestScoresFailure = generateActionCreator(FETCH_BEST_SCORES_FAILURE, 'error');

export const fetchBestScores = () => {
  return async (dispatch) => {
    dispatch(fetchBestScoresRequest());
    try {
      const response = await getBestScores();
      const bestScores = await response.json();

      dispatch(fetchBestScoresSuccess(bestScores));
    } catch (e) {
      dispatch(fetchBestScoresFailure(e.message));
    }
  };
};

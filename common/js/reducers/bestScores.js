import {
  FETCH_BEST_SCORES_REQUEST, FETCH_BEST_SCORES_SUCCESS, FETCH_BEST_SCORES_FAILURE,
} from 'constants';

const defaultState = {
  isFetching: false,
  isFetched: false,
  error: null,
  global: null,
  player: null
};

const bestScores = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_BEST_SCORES_REQUEST:
      return {
        ...state,
        isFetching: true,
        isFetched: false
      };

    case FETCH_BEST_SCORES_SUCCESS:
      return {
        ...state,
        global: action.bestScores.globalScore,
        player: action.bestScores.playerScore,
        isFetching: false,
        isFetched: true,
        fetchFailed: false,
      };

    case FETCH_BEST_SCORES_FAILURE:
      return {
        isFetching: false,
        isFetched: false,
        fetchFailed: true,
        error: action.error
      };

    default:
      return state;
  }
};

export default bestScores;

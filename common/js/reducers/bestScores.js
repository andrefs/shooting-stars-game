import {
  FETCH_BEST_SCORES_REQUEST, FETCH_BEST_SCORES_SUCCESS, FETCH_BEST_SCORES_FAILURE, CLEAR_BEST_SCORES
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
        global: action.bestScores.global,
        player: action.bestScores.player,
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

    case CLEAR_BEST_SCORES:
      return {
        ...state,
        global: null,
        player: null,
        isFetching: false,
        isFetched:  false,
        error: null
      };

    default:
      return state;
  }
};

export default bestScores;

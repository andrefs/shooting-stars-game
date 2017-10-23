import {
  FETCH_GAME_REQUEST, FETCH_GAME_SUCCESS, FETCH_GAME_FAILURE
} from 'constants';

const defaultState = {
  isFetching: false,
  isFetched: false,
  error: null
};

const game = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_GAME_REQUEST:
      return {
        ...state,
        isFetching: true,
        isFetched: false
      };

    case FETCH_GAME_SUCCESS:
      return {
        ...state,
        ...action.game,
        isFetching: false,
        isFetched: true
      };

    case FETCH_GAME_FAILURE:
      return {
        isFetching: false,
        isFetched: false,
        error: action.error
      };

    default:
      return state;
  }
};

export default game;

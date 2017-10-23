import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// Import your reducers here
import game from './game';

const rootReducer = combineReducers({
  routing: routerReducer,
  game
});

export default rootReducer;

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// Import your reducers here
import game from './game';
import bestScores from './bestScores';

const rootReducer = combineReducers({
  routing: routerReducer,
  game,
  bestScores
});

export default rootReducer;

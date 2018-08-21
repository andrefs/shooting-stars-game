import { combineReducers } from 'redux';

// Import your reducers here
import game from './game';
import bestScores from './bestScores';

const rootReducer = combineReducers({
  game,
  bestScores
});

export default rootReducer;

import { combineReducers } from 'redux';

// Import your reducers here
import game from './game';
import bestScores from './bestScores';
import auth from './auth';

const rootReducer = combineReducers({
  game,
  bestScores,
  auth
});

export default rootReducer;

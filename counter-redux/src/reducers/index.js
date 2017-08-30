
import { combineReducers } from 'redux';

import counterReducer from './counter-reducer';
import historyReducer from './history-reducer';

const rootReducer = combineReducers({
  counterReducer: counterReducer,
  historyReducer:  historyReducer
});

export default rootReducer;
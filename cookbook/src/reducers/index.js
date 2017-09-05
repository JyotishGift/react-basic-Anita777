import { combineReducers } from 'redux';
import {recipeReducer, selectedrecipeReducer} from './reducer_selectedrecipe';

const rootReducer = combineReducers({
  recipeReducer: recipeReducer,
  selectedrecipe: selectedrecipeReducer,
});

export default rootReducer;
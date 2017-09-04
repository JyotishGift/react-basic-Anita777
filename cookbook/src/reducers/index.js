import { combineReducers } from 'redux';
import {recipeReducer, selectedrecipeReducer} from './reducer_selectedrecipe';
//import ingredientsReducer from './reducer_ingridients';

const rootReducer = combineReducers({
  recipeReducer: recipeReducer,
  selectedrecipe: selectedrecipeReducer

});

export default rootReducer;
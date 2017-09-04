import { combineReducers } from 'redux';
import {recipeReducer, selectedrecipeReducer/*, searchReducer*/} from './reducer_selectedrecipe';
//import ingredientsReducer from './reducer_ingridients';

const rootReducer = combineReducers({
  recipeReducer: recipeReducer,
  selectedrecipe: selectedrecipeReducer,
  //searchReducer: searchReducer
});

export default rootReducer;
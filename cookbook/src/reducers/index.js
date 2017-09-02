import { combineReducers } from 'redux';
import selectedrecipeReducer from './reducer_selectedrecipe';
import recipesReducer from './reducer_recipe';
import ingridientsReducer from './reducer_ingridients';

const rootReducer = combineReducers({
  selectedrecipe: selectedrecipeReducer,
  recipes: recipesReducer,
  ingridients: ingridientsReducer
});
export default rootReducer;
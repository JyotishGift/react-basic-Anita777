/*
export default function selectRecipe(recipe) {
  return {
    type: 'RECIPE_SELECT',
    data: recipe     
  };
}
*/
import {RECIPE_SELECT,RECIPE_ADD, RECIPE_DELETE} from '../actions/types';

export  function selectRecipe(id) {
  return {
    type: 'RECIPE_SELECT',
    data: id     
  };
}

export function deleteRecipe (id) {
  return { 
    type: 'RECIPE_DELETE',
    payload: id
  };
}

export function addRecipe(nameRec) {
  return { 
    type: 'RECIPE_ADD',
    payload: {
        recipe_id: 'x',
        name: nameRec
    }
  }
}
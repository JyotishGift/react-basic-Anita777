//import {RECIPE_SELECT,RECIPE_ADD, RECIPE_DELETE} from '../actions/types';

const initialState = {
  ingredients: [
    { name: 'milk', ingred_id: 0, quanity: 1 },
    { name: 'eggs', ingred_id: 1, quanity: 2 },
    { name: 'potato', ingred_id: 3, quanity: 2 },
    {name: 'cheese', ingred_id: 2, quanity: 200 },
    {name: 'veal', ingred_id: 4, quanity: 500 },
    {name: 'chicken', ingred_id: 0, quanity: 500 },
    {name: 'dill', ingred_id: 2, quanity: 1 },
    {name: 'tomato', ingred_id: 3, quanity: 5 },
    {name: 'soured cream', ingred_id: 4, quanity: 1 }
  ],
  recipes: [
    { recipe_id: 0, name: 'pizza'},
    { recipe_id: 1, name: 'omelette' },
    { recipe_id: 2, name: 'potato' },
    { recipe_id: 3, name: 'risotto'},
    { recipe_id: 4, name: 'soup'}
  ]
}
export const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'RECIPE_DELETE': {
      const recipesCopy = [...state.recipes].filter(recipe => {
        if (recipe.recipe_id !== action.payload) {
          return { ...recipe }
        } 
      });
    return { ...state, recipes: recipesCopy};
    }
    case 'RECIPE_ADD': 
      return   {...state, recipes: state.recipes.concat(action.payload), };
    default:
      return state;
  }
}

export const selectedrecipeReducer = (state = null, action) => {
  switch (action.type) {
    case 'RECIPE_SELECT':
      return action.data;
    default:
      return state;
  }
}





export  function selectRecipe(recipe) {
  return {
    type: 'RECIPE_SELECT',
    data: recipe     
  };
}

export function deleteRecipe (id) {
  return { 
    type: 'RECIPE_DELETE',
    payload: id
  };
}

export function addRecipe(nameRec, id) {
  return { 
    type: 'RECIPE_ADD',
    payload: {
        recipe_id: id,
        name: nameRec
    }
  }
}

export const searchRecipe = (rec) => {
  if (rec === '') rec = null
  return {
    type: 'SEARCH',
    payload: rec
  };
}

export function addIngredient(name, quanity, id) {
  return { 
    type: 'INGREDIENT_ADD',
    payload: {
      name: name,
      ingred_id: id,
      quanity
    }
  }
}


export default function selectRecipe(recipe) {
  return {
    type: 'RECIPE_SELECT',
    data: recipe     
  };
}

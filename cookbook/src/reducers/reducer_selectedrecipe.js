
const selectedrecipeReducer = (state = null, action) => {
  switch (action.type) {
    case 'RECIPE_SELECT':
      return action.data;
    default:
      return state;
  }
}

export default selectedrecipeReducer;
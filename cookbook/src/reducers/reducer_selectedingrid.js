
export default function selectedingredReducer(state = null, action) {
	console.log(action)
  switch (action.type) {
    case 'INGRED_SELECT':
    console.log(state)
      return state//[...state, action.ingrid];
     default:
      return state;
  }
}
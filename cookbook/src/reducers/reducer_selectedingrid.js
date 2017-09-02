
export default function selectedingridReducer(state = null, action) {
	console.log(action)
  switch (action.type) {
    case 'INGRID_SELECT':
    console.log(state)
      return state//[...state, action.ingrid];
     default:
      return state;
  }
}
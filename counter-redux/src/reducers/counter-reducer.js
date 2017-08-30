
import { DEC, INC } from '../actions/types';

const reducer = (state = { counter: 100 }, action) => {
  switch (action.type) {
    case INC:
      return { ...state, counter: state.counter + 1 };
    case DEC:
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
};
export default reducer;


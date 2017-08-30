
import { DEC, INC, CLR, UNIC } from '../actions/types';

const history = (state =  { counter: 100, prevCounters:[]}, action) => {
  switch (action.type) {
    case INC: {
      state.counter = state.counter + 1;
      state.prevCounters = state.prevCounters.concat(state.counter);
      return state
    }
    case DEC: {
      state.counter = state.counter - 1;
      state.prevCounters = state.prevCounters.concat(state.counter);
      return state
    }
    case CLR: {
      state.prevCounters = [];
      return state
    }
    case UNIC: {
      state.prevCounters = [...new Set(state.prevCounters)];
      console.log(state.prevCounters)
      return state
    }
    default:
      return state
  }
};
export default history;

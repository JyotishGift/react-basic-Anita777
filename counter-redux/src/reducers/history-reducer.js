
import { DEC, INC, CLR, UNIC } from '../actions/types';
import { createStore } from 'redux';
import reducer from './counter-reducer';


let store = createStore(reducer);

const history = (state = {prevCounters: []}, action) => {
  switch (action.type) {
    case INC: {
      store.dispatch({type : 'INC'});
      state.prevCounters = state.prevCounters.concat(store.getState().counter);
      return state
    }
    case DEC: {
      store.dispatch({type : 'DEC'});
      state.prevCounters = state.prevCounters.concat(store.getState().counter);
      return state
    }
     case CLR: {
      return { ...state, prevCounters: [] };
    }
    case UNIC: {
      let prev = [...state.prevCounters]
      prev = [...new Set(prev)];
      return { ...state, prevCounters: prev };
    }
    default:
      return state
  }
};
export default history;

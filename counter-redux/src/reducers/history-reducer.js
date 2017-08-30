
import { DEC, INC, CLR, UNIC } from '../actions/types';
import { createStore } from 'redux';
import reducer from './counter-reducer';
import rootReducer from './index'

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
      return rootReducer;
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

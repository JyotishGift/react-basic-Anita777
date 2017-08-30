import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';

class Counter extends Component {
  showHistory(history) {
    if (history !== undefined)
    return (
      <ul>
        {history.map((num,index) =>
          <li key={index}>
            {num}
          </li>
        )}
      </ul>
    )
  }
  render() {
    const {
      counter,
      increment,
      decrement,
      clear,
      unicue,
      prevCounters
    } = this.props;
    const history = this.showHistory(prevCounters);
    return (
      <div>
        <div>
          Counter:
          <span>{counter}</span>
        </div>
        <div>
        <button style={{ padding: '10px',  margin: '20px'}} onClick={increment}>INCREMENT</button>
        <button style={{ padding: '10px',  margin: '20px'}} onClick={decrement}>DECREMENT</button>
        <span style={{ float: 'right' }}>
          {history}
        </span>
        </div>
        <div>
          <button style={{ padding: '20px',  margin: '20px'}}
            onClick={clear}>CLEAR</button>
          <button style={{ padding: '20px',  margin: '20px'}}
            onClick={unicue}>UNICUE</button>
         </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    counter: state.counterReducer.counter,
    prevCounters: state.historyReducer.prevCounters
  };
};

const mapDispatchToProps = dispatch => {
  return {
    ...bindActionCreators(actions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  Counter
);
import React, { Component } from 'react';

class Header extends Component {
  shouldComponentUpdate(nextProps, nextState) {
     return (nextProps.counter%3 === 0) ? true : false
  }
  render() {
    return (
      <h1> {this.props.counter} </h1>
    )
  }
}

class Counter extends Component {
   constructor() {
    super();
       this.state = {
           counter: 0
     }
  }
  render() {
    return (
      <div className="App">
        <button onClick = {() =>
          {
            this.setState ({counter: this.state.counter + 1});
          }
         }> Increment</button>
         <Header counter = {this.state.counter}/>
     </div>
    );
  }
}

export default Counter;
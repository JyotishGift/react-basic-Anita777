import React, { Component } from 'react';

class SignOut extends Component{
  constructor(props){
    super(props);
    this.state = {
  }
    this.onClick = this.onClick.bind(this);
  }

  onClick() {

  }
  render(){
    return (
      <button onClick={this.onClick} >Quit</button>
    )
  }
}
export default SignOut;
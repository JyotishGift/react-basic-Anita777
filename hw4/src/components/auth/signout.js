import React, { Component } from 'react';

class Signout extends Component{
  constructor(props){
    super(props);
    this.state = {
  }
    this.onClickOut = this.onClickOut.bind(this);
  }
  onClickOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('userProfile');
    window.location.href = "/";
  }
  render(){
    return (
      <button  style={{ width: '150px'}} onClick={this.onClickOut} >Quit</button>
    )
  }
}
export default Signout;
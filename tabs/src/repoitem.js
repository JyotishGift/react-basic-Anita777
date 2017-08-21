import React, { Component } from 'react';

class RepoItem extends Component {
  render() {
    const {name, number} = this.props;
    return (
      <li> 
        <span>{number}</span>
        <span>{name}</span>
      </li>
    )
  }
}
export default RepoItem;
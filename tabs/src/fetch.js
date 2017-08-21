import React, { Component } from 'react';
import RepoItem from './repoitem.js';

const url = 'https://api.github.com/users/Anita777/repos';

class Fetch extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }
  componentDidMount(){
    fetch(url).then(data => data.json()).then(data => {
      this.setState({data: data}) // Object.keys(data)});
    })
  }
  render() {
    if (!this.state.data.length) {
      return <div>Loading...</div>
    }
    return (
      <ul>
      {
        this.state.data.map((elem, index) =>{
          return (
            <RepoItem 
              key = {index }
                name = {elem.name}
                number = {elem.id}
            />
          )
        })
      }
      </ul>
    );
  }
}

export default Fetch;
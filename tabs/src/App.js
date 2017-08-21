import React, { Component } from 'react';
import {find} from 'lodash'
import Fetch from './fetch.js';
import Counter from './Counter.js';
import './App.css';

const tabs = [
  {
    id: 0,
    component: <Counter />,
    name: "Counter"
  },
  {
    id: 1,
    component: <Fetch />,
    name: "GitHub"
  },
  {
    id: 2,
    component: <h1>Anna</h1>,
     name: "My Name"
  }
]

const Navigation = props => {
  return <div>{props.children}</div>;
}

class Tabs extends React.Component {
  constructor(props) {
    super(props);  
    this.state = { 
      selected: this.props.selected 
    };
  }
  labels(child, ind) {
    let active = (this.state.selected === ind ? 'is-active' : '');
    return (
      <li  className={active}
        type = "none" key={ind}
        onClick={this.clickLi.bind(this, ind)}>
        {child.props.label}
      </li>
    );
  }
  titles() {
    return (
      <ul>
        {this.props.children.map(this.labels.bind(this))}
      </ul>
    );
  }
  clickLi(index, e) {
    e.preventDefault();
    this.setState({
      selected: index
    });
  }
  render() {
    return (
      <div>
        {this.titles()}
          <div>
            {this.props.children[this.state.selected]}
          </div>
        </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <Tabs selected={this.props.firstSelect || 0}>
          {
            tabs.map((li, index) => 
            <Navigation 
              label={li.name} 
              key = {index}>
              {li.component}
            </Navigation>)
          }
        </Tabs>
      </div>
    );
  }
}

export default App;




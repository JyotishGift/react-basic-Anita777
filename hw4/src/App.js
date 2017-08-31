import React, { Component } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import './theme/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
      userName:''
    }
     this.loginIn = this.loginIn.bind(this);
  }
  
  loginIn () {
    this.setState({ login: true});
  }

  render() {
    return (
      <div className="App">
        <Header  logging={this.state.login}/>
        <Main logging={this.state.login} loginIn={this.loginIn}/>
        <Footer />
      </div>
    );
  }
}

export default App;
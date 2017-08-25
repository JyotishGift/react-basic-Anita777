import React, { Component } from 'react';

class Api extends Component {
  constructor() {
    super();
    this.url = 'http://api.jyotish.gift/api/v1/auth/';
  }
  requestGet() {
    return fetch(this.url).then(data => data.json()).then(data => console.log(data));
  }
  requestPost(arg) {
    return fetch(this.url, {
      method: "POST",
      body: JSON.stringify(arg),
      headers: { "Content-Type": "application/json" },
    })
    .then(data => {
       alert('registration completed successfully!');
    })
    .catch(err => {
      console.log('Request failed', err)
    });
  }
}

//export {requestPost} from './api';
//export {requestGet} from './api';
/*
class Api {
  constructor() {
    super();
    this.state = {
      data: '',
      login: '',
      password: ''
    }
    this.url = 'http://api.jyotish.gift/api/v1/auth/';
  }
  requestGet() {
    return fetch(this.url).then(data => data.json()).then(data => console.log(data));
  }
  requestPost(arg) {
    return fetch(this.url, {
      method: "POST",
      body: JSON.stringify(arg),
      headers: { "Content-Type": "application/json" },
    })
    .then(data => {
       alert('registration completed successfully!');
    })
    .catch(err => {
      console.log('Request failed', err)
    });
  }
}
let api = new Api();*/
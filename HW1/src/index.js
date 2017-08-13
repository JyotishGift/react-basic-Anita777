import React from 'react';
import ReactDOM from 'react-dom';
//import 'bootstrap/dist/css/bootstrap.css';
import User from './items'
import users from './user'

const mountNode = document.querySelector('.app');

const List = props => {
  const usersAll = props.usersAll;
  return (
    <div >
    {
      usersAll.map((framework, index) => {
        return (<User key={index}
          avatarUrl={framework.avatarUrl}
          fullName={framework.fullName}
          birthdate={framework.birthdate}
          gender={framework.gender}
          address={framework.address}
          email={framework.email} />
        )
      })
    }
    </div>
  )
};
ReactDOM.render(<List usersAll={users} />, mountNode);

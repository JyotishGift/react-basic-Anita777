import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import users from './user'

const mountNode = document.querySelector('.app');

function User (props) {
  return (
    <div className="panel panel-info">
      <div className="panel-heading">
        <h3 className="panel-title">{props.fullName}</h3>
      </div>
      <div className="panel-body">
        <div className="row">
          <div>
            <div className="col-md-3 col-lg-3 ">
              <img src={props.avatarUrl} className="pull-left" />
            </div>
            <div className=" col-md-9 col-lg-9">
              <table className="table table-user-information">
                <tbody>
                  <tr>
                    <td>Дата рождения</td>
                    <td>{props.birthdate}</td>
                  </tr>
                  <tr>
                    <td>Пол</td>
                    <td>{props.gender}</td>
                  </tr>
                  <tr>
                    <td>Адрес</td>
                    <td>{props.address}</td>
                  </tr>
                  <tr>
                    <td>Email</td>
                    <td><a href='#'>{props.email}</a></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

var List = props => {
  const usersAll = props.usersAll;
  const user =  usersAll.map((framework, index) => 
    <User key={index}
      avatarUrl = {framework.avatarUrl}
      fullName = {framework.fullName}
      birthdate = {framework.birthdate}
      gender = {framework.gender}
      address = {framework.address}
      email = {framework.email}
    />
  );
  return  (
    <div>
      {user}
      {<Button />}
    </div>
  )
};

const Button = () => {
  return <button onClick = {add}> Add users </button>
}

const add = event => {
  var newArrUs = users;
  users.forEach (elem => {
    newArrUs.push(elem);
  })
  ReactDOM.render(<List usersAll={newArrUs} />, mountNode);
};

ReactDOM.render(<List usersAll={users} />, mountNode);
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = (props) => {
  const { loggedIn } = props;
    return (
    <header className="Header">
    <div>
      {(loggedIn) ? (
        <ul>
          <li><Link to ='/'>Logo</Link></li>
          <li><Link to="/signout">SIGN OUT</Link></li>
          <li><Link to="/user">USER</Link></li>          
        </ul>
        ) : (
        <ul>
          <li><Link to ='/'>Logo</Link></li>
          <li><Link to="/signin">SIGN IN</Link></li>
          <li><Link to="/signup">SIGN UP</Link></li>
        </ul>                
        )
      }
      </div>
    </header>
  )
}

export default Header;
       

/*

        <li><Link to="/Signin">SIGN IN</Link></li>
        <li><Link to="/Signup">SIGN UP</Link></li>
        <li><Link to="/Signout">SIGN OUT</Link></li>
        <li><Link to="/user">USER</Link></li>
*/
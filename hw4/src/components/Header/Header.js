import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header className="Header">
      <ul>
        <Link to="/">Home</Link>
        <li><Link to="/login">Login</Link></li>
        <li>
          <Link to="/signin">SIGN IN</Link>
        </li>
        <li>
          <Link to="/signup">SIGN UP</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;

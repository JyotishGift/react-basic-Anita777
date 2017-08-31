import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = props => {
  const {logging} = props;
    return (
    <header className="Header">
    <div>
       {(logging) ? (
        <ul>
          <li><Link to ='/'>Home</Link></li>
          <li><Link to="/signout">SIGN OUT</Link></li>
        </ul>
        ) : (
        <ul>
          <li><Link to ='/'>Home</Link></li>
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


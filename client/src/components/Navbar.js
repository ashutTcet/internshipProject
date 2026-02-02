import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import '../styles/Navbar.css';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          The Daily Hearth
        </Link>
        
        <ul className="navbar-menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/prices">Menu</Link></li>
          <li><Link to="/contact">Contact & Booking</Link></li>
          <li><Link to="/locations">Locations</Link></li>
          <li><Link to="/home-services">Home Services</Link></li>
          <li><Link to="/daily-food">Daily Food Service</Link></li>
          
          {user ? (
            <>
              <li className="user-greeting">Hello, {user.name}</li>
              <li>
                <button onClick={logout} className="btn-logout">
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li><Link to="/login" className="btn-login">Login</Link></li>
              <li><Link to="/signup" className="btn-signup">Sign Up</Link></li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

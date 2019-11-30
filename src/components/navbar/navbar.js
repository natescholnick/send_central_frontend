import React from 'react';
import '../../App.css';
import './navbar.css';
import {NavLink} from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar Navbar">
      <ul className="navbar-nav nav-fill w-100 flex-md-row">
        <NavLink to='/' className="navbar-brand">Home</NavLink>
        <NavLink to='/profile/user' className="navbar-brand">Profile</NavLink>
        <NavLink to='/gyms' className="navbar-brand">Gyms</NavLink>
        <NavLink to='/training' className="navbar-brand">Training</NavLink>
        <NavLink to='/login' className="navbar-brand">Log In</NavLink>
        <NavLink to='/register' className="navbar-brand">Register</NavLink>
      </ul>
    </div>
  );
}

export default Navbar;

import React from 'react';
import '../../App.css';
import './navColumn.css';
import NavLink from 'react-router-dom';

function NavColumn() {
  return (
    <div className="navbar NavColumn">
      <ul class="navbar-nav nav-fill w-100 flex-md-row">
        <NavLink to='/' className="navbar-brand">Home</Navlink>
        <NavLink to='/profile' className="navbar-brand">Profile</NavLink>
        <NavLink to='/gyms' className="navbar-brand">Gyms</NavLink>
        <NavLink to='/training' className="navbar-brand">Training</NavLink>
      </ul>
    </div>
  );
}

export default NavColumn;

import React, {Component} from 'react';
import '../../App.css';
import './header.css';
import {NavLink} from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <header className="Header">
        <nav className="navbar navbar-nav nav-fill flex-md-row">
          <NavLink to='/' className="navbar-brand">Send Central</NavLink>
          {
            !this.props.logged_in ?
              <span>
                <NavLink className='navbar-link' to='/login'>Login</NavLink>
                <NavLink className='navbar-link' to='/register'>Register</NavLink>
              </span>
            :
              <span>
                <NavLink to='/gym_list' className="navbar-link">Rock Gyms</NavLink>
                <NavLink to='/settings' className="navbar-link">Settings</NavLink>
                <NavLink to='/login' className='navbar-link' onClick={this.props.logout}>Logout</NavLink>
              </span>
          }
        </nav>
      </header>
    )
  }
}

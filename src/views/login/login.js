import React, {Component} from 'react';
import '../../App.css';
import './login.css';
import { Redirect } from 'react-router-dom';
import LoginForm from '../../components/loginForm/loginForm.js'

export default class Login extends Component {
  render() {
    if (this.props.logged_in === true) {
      return <Redirect to='/' />
    }
    return (
      <div className="row Login">
        <div className="col-md-6 offset-md-3">
          <h1>Login</h1>
          <LoginForm handleLogin={this.props.handleLogin} />
          <h6><a href='#'>Forgot Password?</a></h6>
          <h5>Don't already have an account? <a href="../register">Sign Up</a></h5>
        </div>
      </div>
    );
  }
}

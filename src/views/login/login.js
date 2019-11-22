import React from 'react';
import '../../App.css';
import './login.css';
import LoginForm from '../../components/loginForm/loginForm.js'

class Login extends React.Component {
  render() {
    return (
      <div className="row Login">
        <div className="col-md-6">
          <h1>Login</h1>
          <LoginForm logIn={this.login} />
          </h5>Don't already have an account? <a href="../register/register.js">Sign Up</a>here.</h5>
        </div>
      </div>
    );
  }
}

export default Login;

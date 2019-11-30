import React from 'react';
import '../../App.css';
import './login.css';
import LoginForm from '../../components/loginForm/loginForm.js'

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      loggedIn: false,
    }
  }

  login = async(e) => {
    e.preventDefault();
    console.log('Login function')
  }

  render() {
    return (
      <div className="row Login">
        <div className="col-md-6 offset-md-3">
          <h1>Login</h1>
          <LoginForm login={this.login} />
          <h5>Don't already have an account? <a href="../register">Sign Up</a></h5>
        </div>
      </div>
    );
  }
}

export default Login;

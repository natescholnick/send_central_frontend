import React from 'react';
import '../../App.css';
import './login.css';
import RegisterForm from '../../components/registerForm/registerForm.js'

class Register extends React.Component {
  render() {
    return (
      <div className="row Register">
        <div className="col-md-6">
          <h1>Register</h1>
          <LoginForm register={this.register} />
        </div>
      </div>
    );
  }
}

export default Register;

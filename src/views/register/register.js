import React from 'react';
import '../../App.css';
import './register.css';
import RegisterForm from '../../components/registerForm/registerForm.js'

class Register extends React.Component {

  render() {
    return (
      <div className="row Register">
        <div className="col-md-6 offset-md-3">
          <h1>Register</h1>
          <RegisterForm handleRegister={this.props.handleRegister} />
        </div>
      </div>
    );
  }
}

export default Register;

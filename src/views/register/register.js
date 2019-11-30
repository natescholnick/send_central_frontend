import React from 'react';
import '../../App.css';
import './register.css';
import RegisterForm from '../../components/registerForm/registerForm.js'

class Register extends React.Component {

  register = async(e) => {
    e.preventDefault();
    console.log('Register function')
  }

  render() {
    return (
      <div className="row Register">
        <div className="col-md-6 offset-md-3">
          <h1>Register</h1>
          <RegisterForm register={this.register} />
        </div>
      </div>
    );
  }
}

export default Register;

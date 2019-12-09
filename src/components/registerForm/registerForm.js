import React from 'react';
import '../../App.css';
import './registerForm.css';

function RegisterForm(props) {
  return (
    <form className="RegisterForm" onSubmit={props.register}>
      <div className="form-group">
        <label>First Name</label>
        <input type="text" className="form-control" name="first_name" required />
      </div>
      <div className="form-group">
        <label>Last Name</label>
        <input type="text" className="form-control" name="last_name" required />
      </div>
      <div className="form-group">
        <label>Birthdate</label>
        <input type="date" className="form-control" name="birthdate" required />
      </div>
      <div className="form-group">
        <label>Display Name</label>
        <input type="text" className="form-control" name="display_name" />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input type="text" className="form-control" name="email" required />
      </div>
      <div className="form-group">
        <label>Confirm Email</label>
        <input type="text" className="form-control" name="email_repeat" required />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input type="password" className="form-control" name="password" required />
      </div>
      <div className="form-group">
        <label>Confirm Password</label>
        <input type="password" className="form-control" name="password_repeat" required />
      </div>

      <button type="submit" className="btn btn-primary">Register</button>
    </form>
  );
}

export default RegisterForm;

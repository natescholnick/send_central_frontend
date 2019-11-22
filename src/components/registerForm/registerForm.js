import React from 'react';
import '../../App.css';
import './loginForm.css';

function RegisterForm(props) {
  return (
    <form className="RegisterForm" onSubmit+{props.register}>
      <div className="form-group">
        <label>First Name</label>
        <input type="text" className="form-control" name="firstname" required />
      </div>
      <div className="form-group">
        <label>Last Name</label>
        <input type="text" className="form-control" name="lastname" required />
      </div>
      <div className="form-group">
        <label>Birthdate</label>
        <input type="date" className="form-control" name="birthdate" required />
      </div>
      <div className="form-group">
        <label>Display Name</label>
        <input type="text" className="form-control" name="displayname" />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input type="text" className="form-control" name="email" required />
      </div>
      <div className="form-group">
        <label>Confirm Email</label>
        <input type="text" className="form-control" name="email2" required />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input type="password" className="form-control" name="password" required />
      </div>
      <div className="form-group">
        <label>Confirm Password</label>
        <input type="password" className="form-control" name="password2" required />
      </div>

      <button type="submit" className="btn btn-primary">Register</button>
    </form>
  );
}

export default RegisterForm;

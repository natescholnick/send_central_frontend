import React from 'react';
import '../../App.css';
import './loginForm.css';

function LoginForm(props) {
  return (
    <form className="LoginForm" onSubmit+{props.login}>
      <div className="form-group">
        <label>Email</label>
        <input type="email" className="form-control" name="email" required />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input type="password" className="form-control" name="password" required />
      </div>

      <button type="submit" className="btn btn-primary">Log In!</button>
    </form>
  );
}

export default LoginForm;

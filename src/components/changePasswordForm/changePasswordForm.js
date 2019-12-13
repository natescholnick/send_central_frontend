import React from 'react';
import '../../App.css';
import './changePasswordForm.css';

function ChangePasswordForm(props) {
  return (
    <form className="ChangePasswordForm" onSubmit={props.changePassword}>
      <div className="form-group">
        <label>Current Password</label>
        <input type="password" className="form-control" name="password" required />
      </div>
      <div className="form-group">
        <label>New Password</label>
        <input type="password" className="form-control" name="new_password" required />
      </div>
      <div className="form-group">
        <label>Confirm New Password</label>
        <input type="password" className="form-control" name="new_password2" required />
      </div>

      <button type="submit" className="btn btn-primary">Change Password</button>
    </form>
  );
}

export default ChangePasswordForm;
import React, {Component} from 'react';
import '../../App.css';
import './settings.css';
import { Redirect } from 'react-router-dom';
import ChangePasswordForm from '../../components/changePasswordForm/changePasswordForm.js';
import SECRET_KEY from '../../config.js';
let jwt = require('jsonwebtoken');

export default class Settings extends Component {

  changePassword = async(e) => {
    e.preventDefault();

    let password = e.target.elements.password.value;
    let new_password = e.target.elements.new_password.value;
    let user_id = jwt.decode(localStorage.getItem('token'))['user_id'];
    const URL = 'https://send-central-backend.herokuapp.com/api/account/change-password';

    let token = jwt.sign(
      { user_id, password, new_password },
      SECRET_KEY,
      { expiresIn: '10m' }
    );

    let res = await fetch(URL, {
      headers: {
        'Centent-type': 'application/json',
        'token': token
      }
    });

    let data = await res.json();
    alert(data.message);
  }

  render() {
  	if (this.props.logged_in === false) {
      return <Redirect to='/login' />
    }
    return (
      <div className="row Settings">
        <div className="col-md-6 offset-md-3">
          <h1>Change Password</h1>
          <ChangePasswordForm changePassword={this.changePassword} />
        </div>
      </div>
    );
  }
}
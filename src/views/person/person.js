import React from 'react';
import '../../App.css';
import './person.css';


class Login extends React.Component {
  render() {
    return (
      <div className="row Profile">
        <div className="col-md-6">
          <h1>Profile</h1>
          <LoginForm logIn={this.login} />
        </div>
      </div>
    );
  }
}

export default Person;

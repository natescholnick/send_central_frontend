import React, {Component} from 'react';
import '../../App.css';
import './home.css';
import { Redirect } from 'react-router-dom';

export default class Home extends Component {
  render() {
  	if (this.props.logged_in === false) {
      return <Redirect to='/login' />
    }
    return (
      <div className="row Home">
        <div className="col-md-6 offset-md-3">
          <h1>FEED CONTENT</h1>
        </div>
      </div>
    );
  }
}



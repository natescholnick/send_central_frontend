import React, {Component} from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/header.js';
import Home from './views/home/home.js';
import Login from './views/login/login.js';
import Register from './views/register/register.js';
import Settings from './views/settings/settings.js';
import GymList from './views/gymList/gymList.js';
import SECRET_KEY from './config.js';
let jwt = require('jsonwebtoken');


export default class App extends Component {
  constructor() {
    super();

    this.state ={
      logged_in: false
    }
  }

  handleLogin = async(e) => {
    e.preventDefault();

    let email = e.target.elements.email.value;
    let password = e.target.elements.password.value;

    const URL = 'https://send-central-backend.herokuapp.com/api/account/login';

    let token = jwt.sign(
      { 'email': email, 'password': password },
      SECRET_KEY,
      { expiresIn: '1h' }
    );

    let res = await fetch(URL, {
      headers: {
        'Content-type': 'application/json',
        'token': token
      }
    });

    let data = await res.json();

    if(data.code === 200) {
      this.setState({ logged_in: true });
      localStorage.setItem('token', data.token);
      alert('You are now logged in!')
    } else {
      alert(data.message);
    }
  }


  handleRegister = async(e) => {
    e.preventDefault();

    let first_name = e.target.elements.first_name.value;
    let last_name = e.target.elements.last_name.value;
    let birthdate = e.target.elements.birthdate.value;
    let display_name = e.target.elements.display_name.value;
    let email = e.target.elements.email.value;
    let password = e.target.elements.password.value;

    const URL = 'https://send-central-backend.herokuapp.com/api/mail/registration';

    let token = jwt.sign({
        first_name,
        last_name,
        birthdate,
        display_name,
        email,
        password
      },
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

    if(data.code === 200) {
      alert(data.message)
    } else {
      alert(data.message);
    }
  }

    logout = () => {
    localStorage.removeItem('token');
    alert('You are now logged out!');
    this.setState({logged_in: false});
  }

  componentDidMount() {
    let token = localStorage.getItem('token', null);
    if (token !== null) {
      this.setState({logged_in: true});
    }
  }


  render() {
    return (
      <div className='App'>
        <Header logged_in={this.state.logged_in} logout={this.logout} />

        <div className='container'>
          <Switch>
            <Route exact path ='/login' render={() => <Login logged_in={this.state.logged_in} handleLogin={this.handleLogin} />} />
            <Route exact path ='/register' render={() => <Register logged_in={this.state.logged_in} handleRegister={this.handleRegister} />} />

            {
              this.state.logged_in ?
                <span>
                  <Route exact path='/' render={() => <Home />} />
                  <Route exact path='/settings' render={() => <Settings />} />
                  <Route exact path='/gym_list' render={() => <GymList />} />
                </span>
              :
                <p>You may only access this page if logged in.</p>
            }
          </Switch>
        </div>
      </div>
    )
  }
}


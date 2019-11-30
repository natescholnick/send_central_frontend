import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar.js';
import Home from './views/home/home.js';
import Login from './views/login/login.js';
import Register from './views/register/register.js';
import ProfileUser from './views/profileUser/profileUser.js';


function App() {
  return (
    <div className="App">
    <Navbar />
      <Switch>
        <div className="container">
          <Route exact path='/' render={() => <Home />} />
          <Route exact path='/login' render={() => <Login />} />
          <Route exact path='/register' render={() => <Register />} />
          <Route exact path='/profile/user' render={() => <ProfileUser />} />
        </div>
      </Switch>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import NavColumn from './componenets/navColumn/navColumn.js';
import Home from './views/home/home.js';
import Login from './views/login/login.js';
import Register from './views/register/register.js';


function App() {
  return (
    <div classname="App">
    <NavColumn />
      <Switch>
        <div className="container"
          <Route exact path='/' render={() => <Home />} />
          <Route exact path='/login' render={() => <Login />} />
          <Route exact path='/register' render={() => <Register />} />
        </div>
      </Switch>
    </div>
  );
}

export default App;

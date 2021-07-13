import React, { Component } from 'react';
import Home from './components/Home';
import Singup from './components/Singup';
import Login from './components/Login';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/navbar';
import Logout from './components/Logout';
import Resumomain from './components/Resumemain';
const App =() =>{
  return(
    <BrowserRouter>
    < Navbar / >
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/Resumomain' component={Resumomain}/>
      <Route exact path='/Login' component={Login}/>
      <Route exact path='/Singup' component={Singup}/>
      <Route exact path='/Logout' component={Logout}/>
      <Redirect  to="/"/>
    </Switch>
    </BrowserRouter>
  );
};

export default App;
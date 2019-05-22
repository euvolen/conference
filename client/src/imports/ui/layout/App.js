import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ExchangeRates } from '../components/ExchangeRates';
import Home from '../pages/Home';
import About from '../pages/About';
import SignUp from '../pages/SingUp';
import LogIn from '../pages/LogIn';
import Navbar from '../components/Navbar';
import './App.css'
function App() {
  return (
    <Router>
      <Navbar/>
    <Switch>
      <div className="container content">
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/signup" component={SignUp}/>
      <Route exact path="/login" component={LogIn}/>
      <Route exact path="/rates" component={ExchangeRates}/>
      </div>
    </Switch>
    </Router>
   
 
  );
}

export default App;

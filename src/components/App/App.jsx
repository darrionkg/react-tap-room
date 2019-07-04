import React from 'react';
import './App.css';
import Navigation from '../Navigation/Navigation';
import Footer from './../Footer';
import { Route, Switch } from 'react-router-dom';
import About from './../About';
import Home from './../Home/Home';
//import TapSelection from './../TapSelection';

function App() {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
      </Switch>
      <h1>Home Page!</h1>
    </div>
  );
}

export default App;

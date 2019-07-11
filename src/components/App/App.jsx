import React from 'react';
import './App.css';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import { Route, Switch } from 'react-router-dom';
import About from '../About/About';
import Home from './../Home/Home';
import TapSelection from './../TapSelection/TapSelection';
import './../../assets/css/fonts.css';

function App() {
  return (
    <div className="mainContainer">
      <header>
        <Navigation />
      </header>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/selection' component={TapSelection }/>
      </Switch>
    </div>
  );
}

export default App;

import React, {Component} from 'react';
import './App.css';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import { Route, Switch } from 'react-router-dom';
import About from '../About/About';
import Home from './../Home/Home';
import TapSelection from './../TapSelection/TapSelection';
import './../../assets/css/fonts.css';
import KegForm from './../TapSelection/KegForm';

export class App extends Component {

  constructor() {
    super();
    this.state = {
      kegList: []
    };
  }


  render() {
    return (
      <div className="mainContainer">
        <header>
          <Navigation />
        </header>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/selection' render={() => <TapSelection kegs = {this.state.kegList}/> }/>
          <Route path='/newkeg' component={KegForm} />

        </Switch>
      </div>
    );
  }
}

export default App;
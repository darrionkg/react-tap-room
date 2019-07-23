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
import { Keg } from './../TapSelection/Keg';

export class App extends Component {

  constructor() {
    super();
    this.state = {
      kegList: [
        new Keg('Urban Farmhouse Ale', 'The Commons', 5.99, 5.3),
        new Keg('Free Range Red', 'Laurelwood', 7.99, 6.1),
        new Keg('Primeval', 'Baerlic', 4.99, 6.8),
        new Keg('Rise Up Red', 'Hopworks', 5.99, 6.1),
        new Keg('Hefeweizen', 'Widmer', 3.99, 4.9),
        new Keg('Ripstop Rye Pils', 'Base Camp', 5.99, 5.7),
        new Keg('Wanderlust IPA', 'Breakside', 5.99, 6.6),
        new Keg('Lager', 'BTU', 4.99, 5.5),
        new Keg('Topless Blonde', 'Cascade Marys', 6.99, 5.0)
      ]
    };
    this.handleAddingNewKegToList = this.handleAddingNewKegToList.bind(this);
    this.handleSellPint = this.handleSellPint.bind(this);
  }

  handleAddingNewKegToList(newKeg){
    console.log(this.state.kegList);
    let newKegList = this.state.kegList.slice();
    newKegList.push(newKeg);
    console.log(newKegList);
    this.setState({kegList: newKegList});
  }

  handleSellPint(id) {
    if(this.state.kegList[id].pints > 0) {

      this.state.kegList[id].pints -= 1;
    }
    this.setState(this.state.kegList);
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
            <Route path='/selection' render={() => <TapSelection 
            kegs = {this.state.kegList} 
            handleSellPint={this.handleSellPint}
            /> }/>
            <Route path='/newkeg' render={() => <KegForm addKeg = {this.handleAddingNewKegToList}/> }/>

          </Switch>
      </div>
    );
  }
}

export default App;
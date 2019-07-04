import React from 'react';
import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import TapSelection from './components/TapSelection';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
      </header>
    </div>
  );
}

export default App;

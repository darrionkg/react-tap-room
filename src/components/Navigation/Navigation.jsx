import React, { Component } from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';

export class Navigation extends Component {
  render() {
    return (
      <div>
        <div id="navBar">
          <nav>
            <ul>
              <li className="navInline"><Link className="navLink" to="/">D's Brewskis</Link></li>
              <li className="navInline"><Link className="navLink" to="/about">About Us</Link></li>
              <li className="navInline"><Link className="navLink" to="/selection">Tap Selection</Link></li>
              <li className="navInline"><Link className="navLink" to="/newkeg">New Keg</Link></li>
            </ul>
          </nav>
        </div>
        <div className="clearNav"></div>
      </div>
    );
  }
}

export default Navigation;

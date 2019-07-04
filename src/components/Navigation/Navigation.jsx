import React, { Component } from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';

export class Navigation extends Component {
  render() {
    return (
      <div id="navigation">
        <nav>
          <ul>
            <li className="navInline"><Link to="/">Darrion's Taproom</Link></li>
            <li className="navInline"><Link to="/about">About Us</Link></li>
            <li className="navInline"><Link to="/selection">Tap Selection</Link></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navigation;

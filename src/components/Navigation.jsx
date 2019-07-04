import React, { Component } from 'react'
import './css/Navigation.css';

export class Navigation extends Component {
  render() {
    return (
      <div>
        <ul>
          <li className="navInline"><a href="/">Darrion's Taproom</a></li>
          <li className="navInline">About Us</li>
          <li className="navInline">Tap Selection</li>
          <li className="navInline">Snacks</li>
        </ul>
      </div>
    )
  }
}

export default Navigation

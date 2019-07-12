import React, { Component } from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';

export class Navigation extends Component {
  render() {
    return (
      <div>
          <nav>
            <ul>
        <div id="navBar">
              <div className="homeButton">
                <li className="navInline">
                <img className="smallIcon" src={require("./../../assets/figIcon.png")}/>
                <Link className="navLink" to="/">Brewskis</Link>
                </li>
              </div>
              <div className="linkContainer">
              <li className="navInline"><Link className="navLink" to="/about">About Us</Link></li>
              <li className="navInline"><Link className="navLink" to="/selection">Tap Selection</Link></li>
              <li className="navInline"><Link className="navLink" to="/newkeg">New Keg</Link></li>
              </div>
        </div>
            </ul>
          </nav>
        <div className="clearNav"></div>
      </div>
    );
  }
}

export default Navigation;

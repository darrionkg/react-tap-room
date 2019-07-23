import React, { Component } from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';

export class Navigation extends Component {
  render() {
    return (
      <div>
        <nav>
          <ul className="navList">
            <div id="navBar">
              <Link className="navLink" to="/">
                <div className="homeButton">
                  <li className="navInline">
                    <img className="smallIcon" src={require('./../../assets/figIcon.png')}/>
                  </li>
                </div>
              </Link>
              <Link className="navLink" to="/about"><div className="linkDiv">  
                <li className="navInline">About Us</li>
              </div></Link>
              <Link className="navLink" to="/selection"><div className="linkDiv">
                <li className="navInline">Tap Selection</li>
              </div></Link>
              <Link className="navLink" to="/newkeg"><div className="linkDiv">
                <li className="navInline">New Keg</li>
              </div></Link>
            </div>
          </ul>
        </nav>
        <div className="clearNav"></div>
      </div>
    );
  }
}

export default Navigation;

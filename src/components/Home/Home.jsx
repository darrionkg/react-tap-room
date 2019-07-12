import React, { Component } from 'react';
import './Home.css';
import figIcon from './../../assets/figIcon.png';

function Home() {
  return (
    <div className="homeContainer">
      <div className="hoursContainer">
        <h2 className="title hours">Mon-Fri 10:00am-11:00pm</h2>
        <h2 className="title hours">Sat-Sun 11:00am-1:00am</h2>
      </div>
      <img src={figIcon} alt="icon"/>
    </div>
  );
}

export default Home;

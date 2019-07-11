import React, { Component } from 'react';
import './Home.css';
import figIcon from './../../assets/figIcon.png';

function Home() {
  return (
    <div className="homeContainer">
      <h1 className="title">Darrion's Taphouse</h1>
      <img src={figIcon} alt="icon"/>
    </div>
  )
}

export default Home

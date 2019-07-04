import React, { Component } from 'react';
import './About.css';

function About() {
  return (
    <div className="aboutContainer">
      <hr></hr>
      <div className="fb-row">
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta accusamus velit rerum tempora dolor provident pariatur officiis reiciendis eligendi ab. Quasi architecto dignissimos nostrum quis amet vitae porro, sequi debitis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dolore quibusdam aspernatur, quo cum mollitia placeat est provident dolores deserunt nisi autem nam blanditiis asperiores adipisci repellendus, consectetur debitis. Alias.</p>
      <img className="floatLeft" src={require('./../../assets/beer1.jpg')} alt="ipa"/>
      </div>
      <hr></hr>
      <div className="fb-row">
      <img className="floatRight" src={require('./../../assets/beer2.jpg')} alt="stout"/>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta accusamus velit rerum tempora dolor provident pariatur officiis reiciendis eligendi ab. Quasi architecto dignissimos nostrum quis amet vitae porro, sequi debitis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dolore quibusdam aspernatur, quo cum mollitia placeat est provident dolores deserunt nisi autem nam blanditiis asperiores adipisci repellendus, consectetur debitis. Alias.</p>
      </div>
      <hr></hr>
      <div className="fb-row">
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta accusamus velit rerum tempora dolor provident pariatur officiis reiciendis eligendi ab. Quasi architecto dignissimos nostrum quis amet vitae porro, sequi debitis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dolore quibusdam aspernatur, quo cum mollitia placeat est provident dolores deserunt nisi autem nam blanditiis asperiores adipisci repellendus, consectetur debitis. Alias.</p>
      <img className="floatLeft" src={require('./../../assets/beer3.jpeg')} alt="cider"/>
      </div>
    </div>
  );
}

export default About;

import React, { Component } from 'react';
import { Keg } from './keg';

function TapSelection() {

  let kegs = [
    new Keg('Urban Farmhouse Ale', 'The Commons', 5.99, 5.3),
    new Keg('Free Range Red', 'Laurelwood', 7.99, 6.1),
    new Keg('Primeval', 'Baerlic', 4.99, 6.8),
    new Keg('Rise Up Red', 'Hopworks', 5.99, 6.1),
    new Keg('Hefeweizen', 'Widmer', 3.99, 4.9),
    new Keg('Ripstop Rye Pils', 'Base Camp', 5.99, 5.7),
    new Keg('Wanderlust IPA', 'Breakside', 5.99, 6.6),
    new Keg('Lager', 'BTU', 4.99, 5.5),
    new Keg('Topless Blonde', 'Cascade Marys', 6.99, 5.0)
  ];

  function addKeg(name, brand, price, alcoholContent) {
    let newKeg = new Keg(name, brand, price, alcoholContent);
    kegs.push(newKeg);
  }

  function sortKegsByAlcoholContent() {
    this.kegs.sort((a, b) => a.alcoholContent-b.alcoholContent);
  }
  function sortKegsByPrice() {
    this.kegs.sort((a, b) => a.price-b.price);
  }

  return (
    <div>
      <div className="beerList">
        {/* loop */}
        <div className="cardHeader">
          <h2></h2>
        </div>
        <div className="cardBody">
          <ol>
            <li>Brand: </li>
            <li>Price: </li>
            <li>Alcohol Content: </li>
          </ol>
          <button>Sell Pint</button>
        </div>
      </div>
    </div>
  );
}

export default TapSelection;

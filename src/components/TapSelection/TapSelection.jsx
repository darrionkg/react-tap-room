import React from 'react';
import { Keg } from './Keg';
import PropTypes from 'prop-types';
import KegProp from './KegProp';

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
      <div className="beerList">
        <button>Sort Kegs By Alcohol Content</button>
        <button>Sort Kegs By Price</button>
        {kegs.map((keg, index) =>
          <KegProp name={keg.name}
          brand={keg.brand}
          price={keg.price}
          alcoholContent={keg.alcoholContent}
          pints={keg.pints}
          key={index} />
          )}
          {/* Haven't gotten the form to work yet */}
        <form /*onSubmit={this.addKeg(name, brand, price, alcoholContent)}*/>
          Name
          <input id="name" type="text" required/>
          Brand
          <input id="brand" type="text" required/>
          Price
          <input id="price" type="text" required/>
          Alcohol Content
          <input id="alcoholContent" type="text" required/>
          <button type="submit">Add A new Keg</button>
        </form>
      </div>
  );
}

export default TapSelection;

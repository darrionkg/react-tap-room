import React from 'react';
import { Keg } from './Keg';
import PropTypes from 'prop-types';
import KegProp from './KegProp';
import './Keg.css'

function TapSelection(props) {

  function sortKegsByAlcoholContent() {
    props.sortByAlcohol();
  }

  function sortKegsByPrice() {
    props.sortByPrice();
  }

  function handleSellPint(id) {
    props.handleSellPint(id);
  }

  return (
    <div className="beerList">
      <div className="flexSpaced">
        <button onClick={() => sortKegsByAlcoholContent()} className="kegButton" >Sort Kegs By Alcohol Content</button>
        <button onClick={() => sortKegsByPrice()} className="kegButton">Sort Kegs By Price</button>
      </div>
      {props.kegs.map((keg, index) =>
        <KegProp name={keg.name}
          brand={keg.brand}
          price={keg.price}
          alcoholContent={keg.alcoholContent}
          pints={keg.pints}
          handleSellPint={handleSellPint}
          id={index}
          key={index} />,
          )}
    </div>
  );
}

export default TapSelection;

TapSelection.propTypes = {
  kegs: PropTypes.array,
  handleSellPint: PropTypes.func,
  sortByAlcohol: PropTypes.func,
  sortByPrice: PropTypes.func
}
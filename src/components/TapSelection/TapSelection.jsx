import React from 'react';
import { Keg } from './Keg';
import PropTypes from 'prop-types';
import KegProp from './KegProp';
import './Keg.css'

function TapSelection(props) {

  function sortKegsByAlcoholContent() {
    let newKegs = props.kegs.sort((a, b) => a.alcoholContent-b.alcoholContent);
    // props.kegs.setState(newKegs);
    console.log(props.kegs);
  }
  function sortKegsByPrice() {
    props.kegs = props.kegs.sort((a, b) => a.price-b.price);
  }

  function handleSellPint(id) {
    props.handleSellPint(id);
  }

  return (
    <div className="beerList">
      <div className="flexSpaced">
        <button onClick={() => sortKegsByAlcoholContent()} className="kegButton" >Sort Kegs By Alcohol Content</button>
        <button className="kegButton">Sort Kegs By Price</button>
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
  handleSellPint: PropTypes.func
}
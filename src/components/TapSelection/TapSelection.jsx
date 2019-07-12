import React from 'react';
import { Keg } from './Keg';
import PropTypes from 'prop-types';
import KegProp from './KegProp';

function TapSelection(props) {

  // function sortKegsByAlcoholContent() {
  //   let newKegs = props.kegs.sort((a, b) => a.alcoholContent-b.alcoholContent);
  //   console.log(newKegs);
  // }
  // function sortKegsByPrice() {
  //   props.kegs = props.kegs.sort((a, b) => a.price-b.price);
  // }

  return (
    <div className="beerList">
      <button >Sort Kegs By Alcohol Content</button>
      <button >Sort Kegs By Price</button>
      {props.kegs.map((keg, index) =>
        <KegProp name={keg.name}
          brand={keg.brand}
          price={keg.price}
          alcoholContent={keg.alcoholContent}
          pints={keg.pints}
          key={index} />
      )}
      {/* Haven't gotten the form to work yet */}

    </div>
  );
}

export default TapSelection;

TapSelection.propTypes = {
  kegs: PropTypes.array
}
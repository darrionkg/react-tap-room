import React from 'react';
import PropTypes from 'prop-types';
import './Keg.css';

function KegProp(props){

  function sellPint(id) {
    console.log(id);
    props.handleSellPint(id);
  }

  return (
    <div>
      <div >
        <p><em>{props.name}</em></p>
        <p><em>{props.brand}</em></p>
        <p><em>${props.price}</em></p>
        <p><em>{props.alcoholContent}%</em></p>
        <p><em>{props.pints} Pints</em>
        <button className="kegButton smallerButton" onClick={() => sellPint(props.id)}>Sell Pint</button></p>
        <hr/>
      </div>
    </div>
  );
}

KegProp.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  alcoholContent: PropTypes.number.isRequired,
};
// kegProp: PropTypes.instanceOf(Keg);

export default KegProp;

KegProp.propTypes = {
  handleSellPint: PropTypes.func
}
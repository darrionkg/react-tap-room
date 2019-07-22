import React from 'react';
import PropTypes from 'prop-types';
import './Keg.css';

function KegForm(props){
  let _name = null;
  let _brand = null;
  let _price = null;
  let _alcoholContent = null;

  function handleNewKeg(event) {
    event.preventDefault();
    let _floatPrice = parseFloat(_price.value);
    let _floatAlcoholContent = parseFloat(_alcoholContent.value);
    props.addKeg(
      {
        name: _name.value,
        brand: _brand.value,
        price: _floatPrice,
        alcoholContent: _floatAlcoholContent
      }      
    );
  }


  return (
    <div className="formContainer">
      <form onSubmit={handleNewKeg}>
        Name<br/>
        <input 
          className="addKegInput"
          id="name" 
          type="text" 
          required
          ref={(input) => {_name = input;}}
        /><br/>
        Brand<br/>
        <input 
          className="addKegInput"
          id="brand" 
          type="text" 
          required
          ref={(input) => {_brand = input;}}
        /><br/>
        Price<br/>
        <input 
          className="addKegInput"
          id="price"
          type="text"
          required
          ref={(input) => {_price = input;}}
        /><br/>
        Alcohol%<br/>
        <input 
          className="addKegInput"
          id="alcoholContent" 
          type="text" 
          required
          ref={(input) => {_alcoholContent = input;}}
        /><br/>
        <button className="kegButton" type="submit">Add A new Keg</button>
      </form>
      <hr/>
    </div>
  );
}

KegForm.propTypes = {
  addKeg: PropTypes.func
};

export default KegForm;
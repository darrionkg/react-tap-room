import React from 'react';
import PropTypes from 'prop-types';
import './Keg.css';

function KegProp(props){

  return (
    <div>
      <div >
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
        <hr/>
      </div>
    </div>
  );
}
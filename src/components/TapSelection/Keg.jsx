import React, { Component } from 'react';

export class Keg extends Component {
  constructor(name, brand, price, alcoholContent) {
    super();
    this.name = name;
    this.brand = brand;
    this.price = price;
    this.alcoholContent = alcoholContent;
    this.pints = 124;
  }

  editKeg(newName, newBrand, newPrice, newAlcoholContent) {
    this.name = newName;
    this.brand = newBrand;
    this.price = newPrice;
    this.alcoholContent = newAlcoholContent;
  }

  sellKeg() {
    this.pints -= 1;
  }

  checkIfLow() {
    if(this.pints < 10)
    {
      return true;
    }
    return false;
  }

  refillKeg() {
    this.pints = 124;
  }

  getPriceColor() {
    if(this.price > 7) {
      return 'red';
    } else if(this.price > 5) {
      return 'orange';
    } else {
      return 'green';
    }
  }

  render() {
    return (
      <div>
        
      </div>
    );
  }
}

export default Keg;

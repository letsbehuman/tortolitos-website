import React, { Component } from 'react';
import Card from '../../components/CardProduct/Card';
import './products.scss';
import { productsList } from './productsList';

class Products extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="products">
        <div className="products__container">
          {productsList.map((item, index) => {
            return <Card key={index} {...item} />;
          })}
        </div>
      </div>
    );
  }
}
export default Products;

import React from 'react';
import Card from '../../components/CardProduct/CardProduct';
import './products.scss';
import { productsList } from '../../utils/productsList';

const Products = () => {
  return (
    <div className="products" id="products">
      <div className="products__container">
        {productsList.map((item, index) => {
          return <Card key={index} {...item} />;
        })}
      </div>
    </div>
  );
};
export default Products;

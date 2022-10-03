import React from 'react';
import './cardProduct.scss';

const CardProduct = (item) => {
  return (
    <div className="card__container">
      <div
        className="image"
        style={{
          backgroundImage: `url(${item.url})`,
        }}
      ></div>
      <div className="product__info">
        <div className="product__type">
          <h5>{item.title}</h5>
        </div>
        <div className="product__title">
          <h3>{item.header}</h3>
        </div>
        <div className="product__details">
          <p>{item.description}</p>
        </div>
        <button className="product__more">Read more</button>
      </div>
    </div>
  );
};

export default CardProduct;

import React from 'react';
import './card.scss';

const CardProduct = (item) => {
  return (
    <div className="card__container">
      <div
        className="image"
        style={{
          backgroundImage: `url(${item.url})`,
          backgroundSize: 'cover',
          borderRadius: '1em 1em 0 0 ',
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

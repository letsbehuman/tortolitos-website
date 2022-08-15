import React from 'react';
import './card.scss';
import image from '../../img/donas.png';

const Card = (item) => {
  return (
    <div className="card-container">
      <div className="image">
        <img src={item.url} alt="product"></img>
      </div>
      <div className="product-info">
        <div className="product-type">
          <h5>{item.title}</h5>
        </div>
        <div className="product-title">
          <h3>{item.header}</h3>
        </div>
        <div className="product-details">
          <p>{item.description}</p>
        </div>
        <button className="product-more">Read more</button>
      </div>
    </div>
  );
};

export default Card;

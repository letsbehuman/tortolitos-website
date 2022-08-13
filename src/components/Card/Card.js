import React from 'react';
import './card.scss';
import donas from './../../img/donas.png';

const Card = () => {
  return (
    <div className="card-container">
      <div className="image">
        <img src={donas} />
      </div>
      <div className="product-type">
        <h5>Aguas frescas</h5>
      </div>
      <div className="product-title">
        <h3>100% natural & delicious</h3>
      </div>
      <div className="product-info">
        <p>
          Tasty lemonades made of real fruit and herbs - healthy and refreshing
          for hot days
        </p>
      </div>
      <button className="product-more">Read more</button>
    </div>
  );
};

export default Card;

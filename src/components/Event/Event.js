import React from 'react';
import './event.scss';
import market1 from './../../img/market1.jpg';

const Event = () => {
  return (
    <div className="event">
      <div className="">
        <img alt="logo header" src={market1} />
      </div>
      <div>
        <h4>Market Berlin</h4>
        <p>So., 15 Dez | Berlin</p>
        <button>Details</button>
      </div>
    </div>
  );
};
export default Event;

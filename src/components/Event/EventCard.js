import React from 'react';
import './eventCard.scss';

const EventCard = (item) => {
  return (
    <div className="event">
      <div
        className="event__picture"
        style={{
          backgroundImage: `url(${item.url})`,
        }}
      ></div>
      <div className="event__info">
        <h4>{item.title}</h4>
        <p>{item.date}</p>
        <p className="extra-info">{item.address}</p>
      </div>
    </div>
  );
};
export default EventCard;

import React from 'react';
import './eventCard.scss';

const EventCard = (item) => {
  return (
    <div className="event">
      <div
        className="event__picture"
        style={{
          backgroundSize: 'cover',
          backgroundImage: `url(${item.url})`,
          borderRadius: '2em 2em 0 0',
        }}
      ></div>
      <div className="event__info">
        <h4>{item.title}</h4>
        <p>{item.date}</p>
        <p>{item.address}</p>
      </div>
    </div>
  );
};
export default EventCard;

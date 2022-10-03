import React from 'react';
import './events.scss';
import EventCard from './../../components/Event/EventCard';
import { eventList } from '../../utils/eventList';

const Events = () => {
  return (
    <div className="events" id="events">
      <h3>{'You can also find us in the coming events'}</h3>
      <div className="events-container">
        {eventList.map((item, index) => {
          return <EventCard key={index} {...item} />;
        })}
      </div>
    </div>
  );
};
export default Events;

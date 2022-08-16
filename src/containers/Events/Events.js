import React, { Component } from 'react';
import './events.scss';
import EventCard from './../../components/Event/EventCard';
import { eventList } from './eventList';

class Events extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="events">
        {eventList.map((item, index) => {
          return <EventCard key={index} {...item} />;
        })}
      </div>
    );
  }
}
export default Events;

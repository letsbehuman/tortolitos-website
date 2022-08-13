import React from 'react';
import './partyTime.scss';
// import Team from './../../img/team.JPG';

const PartyTime = () => {
  return (
    <div className="partyTime">
      <div className="bg-party--1"></div>
      <div className="info">
        <h3>Party time</h3>
        <h4>We bring liquid happiness to you</h4>
        <p>
          You would like to serve something special at your event? Our colourful
          aguas frescas are eyecatchers and super refreshing
        </p>
        <button>Let us help you!</button>
      </div>
      <div className="bg-party--2"></div>
    </div>
  );
};
export default PartyTime;

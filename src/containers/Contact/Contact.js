import React from 'react';
import './contact.scss';
// import Team from './../../img/team.JPG';

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-us">
        <h3>CONTACT US</h3>
        <p>Berlin, Germany</p>
        <div className="line"></div>
      </div>
      <div className="form">
        <form>
          <input type="text" placeholder="Name"></input>
          <input type="text" placeholder="Email"></input>
          <input type="text" placeholder="Subject"></input>
          <input type="text" placeholder="Type your message here..."></input>
        </form>
        <button>Submit</button>
      </div>
      <div className="bg-party--2"></div>
    </div>
  );
};
export default Contact;

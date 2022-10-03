import React from 'react';
import './contact.scss';
import videoBg from '../../assets/bg_video.mp4';

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="contact-us">
        <div className="contact-us__info">
          <h3>{'CONTACT US'}</h3>
          <p>{'Berlin, Germany'}</p>
        </div>
        <div className="background_video">
          <video src={videoBg} autoPlay loop muted></video>
        </div>
      </div>
      <div className="form__container">
        <form className="form">
          <input type="text" className="name" placeholder="Name"></input>
          <input type="text" className="email" placeholder="Email"></input>
          <input type="text" className="subject" placeholder="Subject"></input>
          <textarea
            type="text"
            className="textarea"
            placeholder="Type your message here..."
          ></textarea>
          <button className="form__btn">{'Submit'}</button>
        </form>
      </div>
    </div>
  );
};
export default Contact;

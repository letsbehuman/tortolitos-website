import React from 'react';
import './contact.scss';
// import Team from './../../img/team.JPG';

// document.querySelector('.form__btn').addEventListener('click', function (e) {
//   console.log(e.target);
// });

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-us">
        <h3>CONTACT US</h3>
        <p>Berlin, Germany</p>
        <div className="line"></div>
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
          <button className="form__btn">Submit</button>
        </form>
      </div>
    </div>
  );
};
export default Contact;

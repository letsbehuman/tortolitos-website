import React from 'react';
import './navbar.scss';
import LogoNav from './../../img/logonav.png';

const Navbar = () => {
  return (
    <div className="nav">
      <img alt="logo" src={LogoNav} />
      <ul>
        <li>
          <a href="#our-stuff">Our stuff</a>
        </li>
        <li>
          <a href="#our-stuff">Our team</a>
        </li>
        <li>
          <a href="#our-stuff">Party time</a>
        </li>
        <li>
          <a href="#our-stuff">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

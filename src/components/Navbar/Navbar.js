import React from 'react';
import './navbar.scss';
// import Isologo from './../../img/logonav.png';
// import Logo from './../../img/logoNavbar.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <a className="navbar-logo" href="/#home">
        <img alt="logo" className="logo" src="/img/logonav.png" />
        <img alt="logo" className="isologo" src="img/logonav.png" />
      </a>
      <ul className="nav-links">
        <li>
          <a className="nav-link" href="/#team">
            <span className="non-essencial">Our</span>team
          </a>
        </li>
        <li>
          <a className="nav-link" href="/#products">
            <span className="non-essencial">Our</span>stuff
          </a>
        </li>
        <li>
          <a className="nav-link" href="/#party-time">
            Party<span className="non-essencial">time</span>
          </a>
        </li>
        <li>
          <a className="nav-link" href="/#contact">
            Contact
          </a>
        </li>
        <li>
          <a className="nav-link" href="/#events">
            Events
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

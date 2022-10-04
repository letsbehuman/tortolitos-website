import React, { useState } from 'react';
import './navbar.scss';
import { TiThMenu } from 'react-icons/ti';

const Navbar = () => {
  const [navbarMenu, setNavbarMenu] = useState(false);
  const handleMenu = () => {
    setNavbarMenu(!navbarMenu);
  };

  return (
    <nav className="navbar">
      <a className="navbar-logo" href="/#home">
        <img alt="logo" className="logo" src="/img/logoNavbar.png" />
        <img alt="logo" className="isologo" src="/img/logonav.png" />
      </a>
      <ul className="nav-links">
        <li>
          <a className="nav-link" href="/#team">
            <span className="non-essencial">{'Our'}</span>
            {'team'}
          </a>
        </li>
        <li>
          <a className="nav-link" href="/#products">
            <span className="non-essencial">{'Our'}</span>
            {'stuff'}
          </a>
        </li>
        <li>
          <a className="nav-link" href="/#party-time">
            {'Party'}
            <span className="non-essencial">{'time'}</span>
          </a>
        </li>
        <li>
          <a className="nav-link" href="/#contact">
            {'Contact'}
          </a>
        </li>
        <li>
          <a className="nav-link" href="/#events">
            {'Events'}
          </a>
        </li>
        <button className="menu-icon" onClick={() => handleMenu()}>
          <TiThMenu />
        </button>
      </ul>
      <div className="extended-container"></div>
    </nav>
  );
};

export default Navbar;

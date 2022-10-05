import React, { useState } from 'react';
import './navbar.scss';
import { TiThMenu } from 'react-icons/ti';
import { CgClose } from 'react-icons/cg';

const Navbar = () => {
  const [navbarMenu, setNavbarMenu] = useState(false);
  const handleMenu = (str) => {
    if (str === 'open') return setNavbarMenu(true);
    if (str === 'close') return setNavbarMenu(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-desktop">
        <a className="navbar-logo" href="/#home">
          <img alt="logo" className="isologo" src="/img/logonav.png" />
          <img alt="logo" className="logo" src="/img/logoNavbar.png" />
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
        </ul>
        <button
          className={navbarMenu === false ? 'menu-icon' : 'hidden'}
          onClick={() => handleMenu('open')}
        >
          <TiThMenu />
        </button>
      </div>
      {navbarMenu && (
        <div className="navbar-mobile" onClick={() => handleMenu('close')}>
          <div className="drop-menu">
            <button className="close-icon" onClick={() => handleMenu('close')}>
              X
            </button>
            <ul className="nav-links--mobile">
              <li>
                <a href="/#team">
                  <span className="non-essencial">{'Our'}</span>
                  {'team'}
                </a>
              </li>
              <li>
                <a href="/#products">
                  <span className="non-essencial">{'Our'}</span>
                  {'stuff'}
                </a>
              </li>
              <li>
                <a href="/#party-time">
                  {'Party'}
                  <span className="non-essencial">{'time'}</span>
                </a>
              </li>
              <li>
                <a href="/#contact">{'Contact'}</a>
              </li>
              <li>
                <a href="/#events">{'Events'}</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

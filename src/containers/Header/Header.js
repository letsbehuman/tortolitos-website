import React from 'react';
import './header.scss';
// import Logo from './../../img/logoheader.png';
// import Isologo from './../../img/isologoHeader.png';

const Header = () => {
  return (
    <div className="header" id="home">
      <div className="logoHeader">
        <img alt="logo header" className="logo" src={'img/logoheader.png'} />
        <img
          alt="logo header"
          className="isologo"
          src={'img/isologoHeader.png'}
        />
      </div>
    </div>
  );
};
export default Header;

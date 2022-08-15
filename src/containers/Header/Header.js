import React from 'react';
import './header.scss';
import Logo from './../../img/logoheader.png';
import Isologo from './../../img/isologoHeader.png';

const Header = () => {
  return (
    <div className="header">
      <div className="logoHeader">
        <img alt="logo header" className="logo" src={Logo} />
        <img alt="logo header" className="isologo" src={Isologo} />
      </div>
    </div>
  );
};
export default Header;

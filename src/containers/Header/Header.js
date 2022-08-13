import React from 'react';
import './header.scss';
import LogoHeader from './../../img/logoheader.png';

const Header = () => {
  return (
    <div className="header">
      <div className="logoHeader">
        <img alt="logo header" src={LogoHeader} />
      </div>
    </div>
  );
};
export default Header;

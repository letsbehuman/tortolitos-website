import React from 'react';
import './header.scss';
import Logo from './../../img/logoheader.png';
import Isologo from './../../img/logonav.png';

const Header = () => {
  return (
    <div className="header">
      <div className="logoHeader">
        <img alt="logo header" src={Logo} />
      </div>
    </div>
  );
};
export default Header;

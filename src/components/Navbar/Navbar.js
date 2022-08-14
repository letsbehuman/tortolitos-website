import React, { Component } from 'react';
import './navbar.scss';
import Isologo from './../../img/logonav.png';
import Logo from './../../img/logoheader.png';

import { MenuItems } from './MenuItems';

class Navbar extends Component {
  constructor() {
    super();

    this.state = { clicked: false };
  }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="navbarItems">
        <a className="navbar-logo" href="#Home">
          <img alt="logo" className="logo" src={Logo} />
          <img alt="logo" className="isologo" src={Isologo} />
        </a>
        <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}
          ></i>
        </div>
        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;

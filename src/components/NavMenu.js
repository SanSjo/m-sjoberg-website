import React from 'react';
import { MegaMenu } from './MegaMenu';
import './styles/nav-menu.css';
import Logo from '../img/Msab-logo.png';

export const NavMenu = () => {
  return (
    <nav>
      <div className="navbar">
        <a className="nav-logo" href="index.html">
          <img className="logo" src={Logo} alt="logo" />
        </a>
        <MegaMenu />

        <a className="nav-button" href="#home">
          NYHETER
        </a>
        <a className="nav-button" href="#news">
          KONTAKT
        </a>
        <a className="nav-button" href="#news">
          OM OSS
        </a>
        <a className="nav-button" href="#news">
          LOGGA IN
        </a>
      </div>
    </nav>
  );
};

export default NavMenu;

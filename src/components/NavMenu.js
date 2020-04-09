import React, { useState } from 'react';
import { MegaMenu } from './MegaMenu';
import './styles/nav-menu.css';
import Logo from '../img/Msab-logo.png';
import HamburgerMenu from 'react-hamburger-menu';

export const NavMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <div className="mobile-container">
        <a className="nav-logo" href="index.html">
          <img className="logoMobile" src={Logo} alt="logo" />
        </a>

        {/* <!-- Top Navigation Menu --> */}
        <div className="topnav">
          <div className="icon">
            <div className="navBurger"> </div>
            <div className="navBurger"> </div>
            <div className="navBurger"> </div>
          </div>
          <div className="myLinks">
            <a className="mobileLinks" href="#news">
              News
            </a>
            <a className="mobileLinks" href="#contact">
              Contact
            </a>
            <a className="mobileLinks" href="#about">
              About
            </a>
          </div>
        </div>

        {/* <!-- End smartphone / tablet look --> */}
      </div>

      <div className="navbar">
        <a className="nav-logo" href="index.html">
          <img className="logo" src={Logo} alt="logo" />
        </a>
        {/* Hamburger meny  */}
        {/* <!-- Simulate a smartphone / tablet --> */}

        <a className="nav-button" href="#home">
          NYHETER
        </a>
        <MegaMenu />

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

import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import { MegaMenu } from './MegaMenu';
import './styles/nav-menu.css';
import Logo from '../img/Msab-logo.png';
import HamburgerMenu from 'react-hamburger-menu';
import NavLink from './NavLink'

export const NavMenu = () => {
  const [open, setOpen] = useState(false);



  return (
    <nav>
      <div className="mobile-container">
        <Link to="/">
        <a className="nav-logo" >
          <img className="logoMobile" src={Logo} alt="logo" />
        </a>
        </Link>

        {/* <!-- Top Navigation Menu --> */}
        <div className="topnav">
          <button type="button" className="icon" >
            <div className="navBurger"> </div>
            <div className="navBurger"> </div>
            <div className="navBurger"> </div>
          </button>
          {open && (
            <div className="myLinks">
              <div className="navLink">
                <a className="mobileLinks" href="#news">
                  News
                </a>
              </div>
              <div className="navLink">
                <a className="mobileLinks" href="#contact">
                  Contact
                </a>
              </div>
              <div className="navLink">
                <a className="mobileLinks" href="#about">
                  About
                </a>
              </div>
            </div>
          )}
        </div>

        {/* <!-- End smartphone / tablet look --> */}
      </div>

      <div className="navbar">
        <Link to="/"> 
        <a className="nav-logo">
          <img className="logo" src={Logo} alt="logo" />
        </a>
        </Link>
        {/* Hamburger meny  */}
        {/* <!-- Simulate a smartphone / tablet --> */}
        
        <p className="nav-button" href="#home">
          NYHETER
        </p>
        <MegaMenu />
        <NavLink to="/Contact" >
          <p className="nav-button">KONTAKT</p>
        </NavLink>
        <NavLink to="/About" >
        
          <p className="nav-button">OM OSS</p>
        
        </NavLink>
        <p className="nav-button" >
          LOGGA IN
        </p>
      </div>
    </nav>
  );
};

export default NavMenu;

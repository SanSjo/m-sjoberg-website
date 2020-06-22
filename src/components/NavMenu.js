/* eslint-disable no-tabs */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MegaMenu } from './MegaMenu';
import './styles/nav-menu.css';
import Logo from '../img/Msab-logo.png';
import NavLink from './NavLink';

import { langService } from '../services/langService'
import { seFlag } from '../img/flags/se.png'
import { gbFlag } from '../img/flags/gb.png'

export const NavMenu = () => {
  const [open, setOpen] = useState(false);
  const langObj = langService.getLangObj();

  const [dropdownOpen, setDropdownOpen] = useState(false);

 const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <nav>
      <div className="mobile-container">
        <Link to="/">
          <div className="nav-logo">
            <img className="logoMobile" src={Logo} alt="logo" />
          </div>
        </Link>

        {/* <!-- Top Navigation Menu --> */}
        <div className="topnav">
          <button type="button" className="icon">
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
        {/* Hamburger meny  */}
        {/* <!-- Simulate a smartphone / tablet --> */}

        <MegaMenu />
        <NavLink to="/Contact">
          <p className="nav-button">KONTAKT</p>
        </NavLink>
        <NavLink to="/About">
          <p className="nav-button">OM OSS</p>
        </NavLink>
        <NavLink to="/About">
          <p className="nav-button">PRODUKTER A-Ö</p>
        </NavLink>
        <p className="nav-button" />
      </div>

      {/* <Dropdown style={{display: 'flex', flexDirection: 'row'}} isOpen={dropdownOpen} toggle={toggle}>
			<DropdownToggle nav caret className="nav-flag">
                  <img src={langObj.flag} alt={langObj.name} />
             </DropdownToggle>

              <DropdownMenu right>
              <DropdownItem onClick={() => { langService.setLang('se') }}>
                  <img
                    src={seFlag}
                    alt="Swedish"
                    width="20"
                    className="align-middle mr-1"
                  />
                  <span className="align-middle">Swedish</span>
                </DropdownItem>
                <DropdownItem onClick={() => { langService.setLang('en') }}>
                  <img
                    src={gbFlag}
                    alt="English"
                    width="20"
                    className="align-middle mr-1"
                  />
                  <span className="align-middle">English</span>
                </DropdownItem>
              </DropdownMenu> */}

      <div className="language-btn">
        <button type="submit" className="lang-btn" onClick={(e) => { langService.setLang('se', this) }}>
          <img
            src={require('../img/flags/se.png')}
            alt="Swedish"
            width="20"
            className="lang-img" />
        </button>
        <button type="submit" className="lang-btn" onClick={(e) => { langService.setLang('en', this) }}>
          <img
            src={require('../img/flags/gb.png')}
            alt="English"
            width="20"
            className="lang-img" />
        </button>
      </div>

      {/* Search form  */}
      <div>
        <form className="search">
          <input
            className="search-bar"
            type="text"
            placeholder="Sök produkt här"
            aria-label="Search" />
          <button className="search-btn" type="submit">
            <i className="fa fa-search" />
          </button>
        </form>
      </div>
    </nav>
  );
};

export default NavMenu;

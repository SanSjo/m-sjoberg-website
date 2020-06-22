import React from 'react';
import './styles/header.css';
import { Link } from 'react-router-dom';
import { NavMenu } from './NavMenu';

import Logo from '../img/Msab-logo.png';
import './styles/nav-menu.css';


export const Header = () => {
  return (
    <main>
      <div className="topMenuContainer">
        {/* <BurgerMenu /> */}
        <ul className="topMenu">
          <Link to="/">
            <div className="nav-logo">
              <img className="logo" src={Logo} alt="logo" />
            </div>
          </Link>
          <li className="topMenuList">
            <i className="fas fa-phone" /> 08-5678904
          </li>

          <li className="topMenuList">
            <i className="fa fa-at" /> info@msjoberg.se
          </li>
          <li className="topMenuList">
            <i className="fa fa-envelope" /> Råsundavägen 79, Solna
          </li>
        </ul>
      </div>
      <NavMenu />
    </main>
  );
};

/* <section className="headerCards">
  <div className="card card-image">
    {/* <!-- Content -->
    <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
      <div>
        <h3 className="card-title pt-2">
          <i className="fa fa-check-square-o" />
          <strong>65 år i branchen 1953-2019</strong>
        </h3>
      </div>
    </div>
  </div>
  {/* <!-- Card -->

  {/* <!-- Card -->
  <div className="card card-image">
    {/* <!-- Content -->
    <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
      <div>
        <h3 className="card-title pt-2">
          <strong>Uppdaterade på produktnyheter och ny teknologi</strong>
        </h3>
      </div>
    </div>
  </div>
  {/* <!-- Card -->
}

{
  /* <!-- Card -->
  <div className="card card-image">
    {/* <!-- Content -->
    <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
      <div>
        <h3 className="card-title pt-2">
          <strong>Håller våra leveranstider</strong>
        </h3>
      </div>
    </div>
  </div>
  {/* <!-- Card -->
}

{
  /* <!-- Card -->
  <div className="card card-image">
    {/* Content
    <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
      <div>
        <h3 className="card-title pt-2">
          <strong>Strävar efter förbättring i miljöarbetet</strong>
        </h3>
      </div>
    </div>
  </div>
  {/* Card
</section>
*/

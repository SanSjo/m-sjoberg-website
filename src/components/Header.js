import React from 'react';
import './styles/header.css';
import NavMeny from './NavMenu';

export const Header = () => {
  return (
    <main>
      <div className="topMenuContainer">
        <ul>
          <li className="topMenu">
            <i className="fas fa-phone" /> 08-5678904
          </li>
          <li className="topMenu">
            <i className="fa fa-at" /> info@msjoberg.se
          </li>
          <li className="topMenu">
            <i className="fa fa-envelope" /> Råsundavägen 79, Solna
          </li>
        </ul>
      </div>
      <NavMeny />
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

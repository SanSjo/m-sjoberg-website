import React from 'react';
import './styles/clients.css';

import Audio from '../img/logos/AudioConexus_logo.jpg';
import CarComm from '../img/logos/Carcomm_logo.png';
import Cobra from '../img/logos/Cobra_logo.png';
import Connex from '../img/logos/Connex_logo.png';
import Ecans from '../img/logos/Ecans_logo.png';
import GoldCruise from '../img/logos/GoldCruise_logo.png';
import Interpart from '../img/logos/Interpart_logo.png';
import Lap from '../img/logos/LAP logo.jpg';
import Meta from '../img/logos/Logo_MetaSystem.png';
import Actia from '../img/logos/Actia_logo.png';

export const Clients = () => {
  return (
    <section className="brand-section">
      <div className="brand-container">
        <div className="header-container">
          <h2 className="brand-header">VÅRA VARUMÄRKEN</h2>
        </div>
        <div className="brand">
          <img className="brand-logo" src={Actia} alt="brand-logo" />
        </div>
        <div className="brand">
          <img className="brand-logo" src={Audio} alt="brand-logo" />
        </div>
        <div className="brand">
          <img className="brand-logo" src={CarComm} alt="brand-logo" />
        </div>
        <div className="brand">
          <img className="brand-logo" src={Cobra} alt="brand-logo" />
        </div>
        <div className="brand">
          <img className="brand-logo" src={Connex} alt="brand-logo" />
        </div>
        <div className="brand">
          <img className="brand-logo" src={Ecans} alt="brand-logo" />
        </div>
        <div className="brand">
          <img className="brand-logo" src={GoldCruise} alt="brand-logo" />
        </div>
        <div className="brand">
          <img className="brand-logo" src={Interpart} alt="brand-logo" />
        </div>
        <div className="brand">
          <img className="brand-logo" src={Lap} alt="brand-logo" />
        </div>
        <div className="brand">
          <img className="brand-logo" src={Meta} alt="brand-logo" />
        </div>
      </div>
    </section>
  );
};

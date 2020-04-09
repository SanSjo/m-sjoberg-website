import React from 'react';
import './styles/footer.css';
import Iso from '../img/iso_sve.png';
import Logo from '../img/Msab-logo.png';

export const Footer = () => {
  return (
    <footer>
      <div className="footerContainer">
        <img className="footer-logo" src={Logo} alt="logo" />
        <div className="footerContact">
          <p className="footerContactH">BESÖKSADRESS</p>

          <p className="contactText">
            <i className="fa fa-envelope" /> Råsundavägen 79, Solna
          </p>

          <p className="contactText">
            <i className="fas fa-phone" /> 08-5678904
          </p>

          <p className="contactText">
            <i className="fa fa-at" /> info@msjoberg.se
          </p>
        </div>

        <div className="footerContent">
          <div className="footerContact">
            <p className="footerContactH">Information</p>
            <p className="footerLi">
              <a className="footerA" href="#!">
                Kontakt
              </a>
            </p>
            <p className="footerLi">
              <a className="footerA" href="#!">
                Support
              </a>
            </p>
            <p className="footerLi">
              <a className="footerA" href="#!">
                Miljöpolicy
              </a>
            </p>
            <p className="footerLi">
              <a className="footerA" href="#!">
                Om oss
              </a>
            </p>
          </div>
        </div>

        <div className="certificate">
          <img className="iso" src={Iso} alt="ISO" />
        </div>
      </div>

      <div className="copyrightContainer">
        <div className="footer-copyright">
          <p className="copyright">© 2018 Copyright</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

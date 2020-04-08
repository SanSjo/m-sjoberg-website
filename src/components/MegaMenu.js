import React from 'react';
import './styles/mega-menu.css';
import Parrot from '../img/mki9200_animering.gif';
import Sena from '../img/senaHeadset.jpg';
import Telit from '../img/TelitHandsfree.jpg';
import GPro from '../img/4G-PRO.jpg';
import Carcomm from '../img/Carcomm.jpg';

export const MegaMenu = () => {
  return (
    <div className="dropdown">
      <button type="button" className=" dropbtn nav-button">
        PRODUKTER <i className="fa fa-caret-down" />
      </button>
      <div className="dropdown-content">
        <div className="row">
          <div className="column">
            <h3>KOMMUNIKATION</h3>
            <a className="product" href="#">
              <img className="productImg" src={Parrot} alt="animering" />{' '}
              <p className="productText">Parrot MKi9200</p>
            </a>
            <hr />
            <a href="#">
              <img className="productImg" src={Sena} alt="animering" />{' '}
              <p className="productText">Sena Tufftalk Lite Headset</p>
            </a>
            <hr />
            <a href="#">
              <img className="productImg" src={Telit} alt="animering" />{' '}
              <p className="productText">Telit Handsfree</p>
            </a>
            <hr />
            <a href="#">
              <img className="productImg" src={GPro} alt="animering" />{' '}
              <p className="productText">Professionell 4G WiFi Router</p>
            </a>
            <hr />
            <a href="#">
              <img className="productImg" src={Carcomm} alt="animering" />
              <p className="productText">Carcomm DASH2 mobilhållare</p>
            </a>
          </div>
          <div className="column">
            <h3>STÖLDSKYDD</h3>
            <a className="product" href="#">
              <img className="productImg" src={Parrot} alt="animering" />{' '}
              <p className="productText">Parrot MKi9200</p>
            </a>
            <hr />
            <a href="#">
              <img className="productImg" src={Sena} alt="animering" />{' '}
              <p className="productText">Sena Tufftalk Lite Headset</p>
            </a>
            <hr />
            <a href="#">
              <img className="productImg" src={Telit} alt="animering" />{' '}
              <p className="productText">Telit Handsfree</p>
            </a>
            <hr />
            <a href="#">
              <img className="productImg" src={GPro} alt="animering" />{' '}
              <p className="productText">Professionell 4G WiFi Router</p>
            </a>
            <hr />
            <a href="#">
              <img className="productImg" src={Carcomm} alt="animering" />
              <p className="productText">Carcomm DASH2 mobilhållare</p>
            </a>
          </div>
          <div className="column">
            <h3>BACKVARNING</h3>
            <a className="product" href="#">
              <img className="productImg" src={Parrot} alt="animering" />{' '}
              <p className="productText">Parrot MKi9200</p>
            </a>
            <hr />
            <a href="#">
              <img className="productImg" src={Sena} alt="animering" />{' '}
              <p className="productText">Sena Tufftalk Lite Headset</p>
            </a>
            <hr />
            <a href="#">
              <img className="productImg" src={Telit} alt="animering" />{' '}
              <p className="productText">Telit Handsfree</p>
            </a>
            <hr />
            <a href="#">
              <img className="productImg" src={GPro} alt="animering" />{' '}
              <p className="productText">Professionell 4G WiFi Router</p>
            </a>
            <hr />
            <a href="#">
              <img className="productImg" src={Carcomm} alt="animering" />
              <p className="productText">Carcomm DASH2 mobilhållare</p>
            </a>
          </div>
          <div className="column">
            <h3>ÖVRIGT</h3>
            <a className="product" href="#">
              <img className="productImg" src={Parrot} alt="animering" />{' '}
              <p className="productText">Parrot MKi9200</p>
            </a>
            <hr />
            <a href="#">
              <img className="productImg" src={Sena} alt="animering" />{' '}
              <p className="productText">Sena Tufftalk Lite Headset</p>
            </a>
            <hr />
            <a href="#">
              <img className="productImg" src={Telit} alt="animering" />{' '}
              <p className="productText">Telit Handsfree</p>
            </a>
            <hr />
            <a href="#">
              <img className="productImg" src={GPro} alt="animering" />{' '}
              <p className="productText">Professionell 4G WiFi Router</p>
            </a>
            <hr />
            <a href="#">
              <img className="productImg" src={Carcomm} alt="animering" />
              <p className="productText">Carcomm DASH2 mobilhållare</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

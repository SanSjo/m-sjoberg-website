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
              <p className="productText">Parrot MKi9200</p>
              <img className="productImg" src={Parrot} alt="animering" />{' '}
            </a>
            <hr />
            <a href="#">
              <p className="productText">Sena Tufftalk Lite Headset</p>
              <img className="productImg" src={Sena} alt="animering" />{' '}
            </a>
            <hr />
            <a href="#">
              <p className="productText">Telit Handsfree</p>
              <img className="productImg" src={Telit} alt="animering" />{' '}
            </a>
            <hr />
            <a href="#">
              <p className="productText">Professionell 4G WiFi Router</p>
              <img className="productImg" src={GPro} alt="animering" />{' '}
            </a>
            <hr />
            <a href="#">
              <p className="productText">Carcomm DASH2 mobilhållare</p>
              <img className="productImg" src={Carcomm} alt="animering" />
            </a>
          </div>
          <div className="column">
            <h3>STÖLDSKYDD</h3>
            <a className="product" href="#">
              <p className="productText">Parrot MKi9200</p>
              <img className="productImg" src={Parrot} alt="animering" />{' '}
            </a>
            <hr />
            <a href="#">
              <p className="productText">Sena Tufftalk Lite Headset</p>
              <img className="productImg" src={Sena} alt="animering" />{' '}
            </a>
            <hr />
            <a href="#">
              <p className="productText">Telit Handsfree</p>
              <img className="productImg" src={Telit} alt="animering" />{' '}
            </a>
            <hr />
            <a href="#">
              <p className="productText">Professionell 4G WiFi Router</p>
              <img className="productImg" src={GPro} alt="animering" />{' '}
            </a>
            <hr />
            <a href="#">
              <p className="productText">Carcomm DASH2 mobilhållare</p>
              <img className="productImg" src={Carcomm} alt="animering" />
            </a>
          </div>
          <div className="column">
            <h3>BACKVARNING</h3>
            <a className="product" href="#">
              <p className="productText">Parrot MKi9200</p>
              <img className="productImg" src={Parrot} alt="animering" />{' '}
            </a>
            <hr />
            <a href="#">
              <p className="productText">Sena Tufftalk Lite Headset</p>
              <img className="productImg" src={Sena} alt="animering" />{' '}
            </a>
            <hr />
            <a href="#">
              <p className="productText">Telit Handsfree</p>
              <img className="productImg" src={Telit} alt="animering" />{' '}
            </a>
            <hr />
            <a href="#">
              <p className="productText">Professionell 4G WiFi Router</p>
              <img className="productImg" src={GPro} alt="animering" />{' '}
            </a>
            <hr />
            <a href="#">
              <p className="productText">Carcomm DASH2 mobilhållare</p>
              <img className="productImg" src={Carcomm} alt="animering" />
            </a>
          </div>
          <div className="column">
            <h3>ÖVRIGT</h3>
            <a className="product" href="#">
              <p className="productText">Parrot MKi9200</p>
              <img className="productImg" src={Parrot} alt="animering" />{' '}
            </a>
            <hr />
            <a href="#">
              <p className="productText">Sena Tufftalk Lite Headset</p>
              <img className="productImg" src={Sena} alt="animering" />{' '}
            </a>
            <hr />
            <a href="#">
              <p className="productText">Telit Handsfree</p>
              <img className="productImg" src={Telit} alt="animering" />{' '}
            </a>
            <hr />
            <a href="#">
              <p className="productText">Professionell 4G WiFi Router</p>
              <img className="productImg" src={GPro} alt="animering" />{' '}
            </a>
            <hr />
            <a href="#">
              <p className="productText">Carcomm DASH2 mobilhållare</p>
              <img className="productImg" src={Carcomm} alt="animering" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import Parrot from '../img/mki9200_animering.gif';
import Sena from '../img/senaHeadset.jpg';
import Telit from '../img/TelitHandsfree.jpg';
import GPro from '../img/4G-PRO.jpg';
import Carcomm from '../img/Carcomm.jpg';
import { useEffect, useState } from 'react';



export const DropdownContent = (props) => {
  

  return (
    <div className="column">
      <Link to={props.link}>
        <h3>{props.title}</h3>
      </Link>
      <Link to="" className="product">
        <p className="productText">Parrot MKi9200</p>
        <img className="productImg" src={Parrot} alt="animering" />{' '}
      </Link>
      <hr />
      <Link to="">
        <p className="productText">Sena Tufftalk Lite Headset</p>
        <img className="productImg" src={Sena} alt="animering" />{' '}
      </Link>
      <hr />
      <Link to="">
        <p className="productText">Telit Handsfree</p>
        <img className="productImg" src={Telit} alt="animering" />{' '}
      </Link>
      <hr />
      <Link to="">
        <p className="productText">Professionell 4G WiFi Router</p>
        <img className="productImg" src={GPro} alt="animering" />{' '}
      </Link>
      <hr />
      <Link to="">
        <p className="productText">Carcomm DASH2 mobilhållare</p>
        <img className="productImg" src={Carcomm} alt="animering" />
      </Link>
    </div>
  );
};

import React from 'react';
import { Link } from 'react-router-dom';
import Parrot from '../img/mki9200_animering.gif';
import Sena from '../img/senaHeadset.jpg';
import Telit from '../img/TelitHandsfree.jpg';
import GPro from '../img/4G-PRO.jpg';
import Carcomm from '../img/Carcomm.jpg';

export const DropdownContent = props => {
	return (
		<div className="column">
			<Link to={props.link}>
				<h3>{props.title}</h3>
			</Link>
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
	);
};

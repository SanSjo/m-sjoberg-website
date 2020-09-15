/* eslint-disable indent */
/* eslint-disable no-tabs */
import React, { useState } from 'react';
import './styles/footer.css';
import Moment from 'react-moment';
import Iso from '../img/iso_sve.png';
import Logo from '../img/Msab-logo.png';
import {Link} from 'react-router-dom'

export const Footer = () => {
	const [year, setYear] = useState(new Date());

	const getYear = () => {
		setYear(new Date().setFullYear, 1000);
	};

	return (
		<footer>
			<div className="footerContainer">
				<div className="footer-logo-container">
					<img className="footer-logo" src={Logo} alt="logo" />
					<p className="footer-logo-text">
						Ingeniörsfirman M.Sjöberg AB är sedan 1953 importör och distributör
						av fordonselektriska produkter till fordonsindustrin och
						eftermarknad. Vi uppfyller högt ställda krav och är
						ISO-certifierade. Kontor, lager, support och service i egen
						fastighet i Solna.
					</p>
				</div>

				<div className="content-container">
					<div className="footerContact">
						<p className="footerContactHeader">BESÖKSADRESS</p>

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
							<p className="footerContactHeader">Information</p>
							<Link className="footerLi" to="/Contact"><p className="footerLi">Kontakt</p></Link>
							<Link className="footerLi" to="/Support"><p className="footerLi">Support</p></Link>
							<Link className="footerLi" to="/About"><p className="footerLi">Miljöpolicy</p></Link>
							<Link className="footerLi" to="/About"><p className="footerLi">Om oss</p></Link>
						</div>
					</div>
				</div>

				<div className="certificate">
					<img className="iso" src={Iso} alt="ISO" />
				</div>
			</div>

			<div className="copyrightContainer">
				<div className="footer-copyright">
					<p className="copyright">
						© <span>{new Date().getFullYear()}</span> Copyright M Sjoberg AB
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

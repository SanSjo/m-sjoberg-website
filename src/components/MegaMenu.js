import React from 'react';
import { Link } from 'react-router-dom';
import './styles/mega-menu.css';
import { DropdownContent } from 'components/DropdownContent';
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
					<DropdownContent title="Kommunikation" link="/Communication" />
					<DropdownContent title="Stöldskydd" link="/Antitheft" />
					<DropdownContent title="Backvarning" />
					<DropdownContent title="Övrigt" />
				</div>
			</div>
		</div>
	);
};

import React from 'react';

import './styles/mega-menu.css';

import { Categories } from './Categories';


export const MegaMenu = () => {
	return (
		<>
			<Categories />
		</>

		// <div className="dropdown">
		// 	<button type="button" className=" dropbtn nav-button">
		// 		PRODUKTER <i className="fa fa-caret-down" />
		// 	</button>
		// 	<div className="dropdown-content">
		// 		<div className="row">
		// 			<DropdownContent title="Kommunikation" link="/Communication" />
		// 			<DropdownContent title="Stöldskydd" link="/Antitheft" />
		// 			<DropdownContent title="Backvarning" />
		// 			<DropdownContent title="Övrigt" />
		// 		</div>
		// 	</div>
		// </div>
	);
};

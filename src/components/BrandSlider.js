import React, { useState } from 'react';
import Slider from 'infinite-react-carousel';
import './styles/clients.css';

import AudioGrey from '../img/logos/AudioConexus_logo_grey.jpg';
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
import MetaTrak from '../img/logos/Logo_MetaTrak.png';
import Midland from '../img/logos/Midland.png';

export const BrandSlider = () => {
	const settings = {
		slidesPerRow: 4,
		autoplay: true,
		autoplaySpeed: 5000,
		autoplayScroll: 1,
		duration: 500,
		pauseOnHover: true,
		className: 'brand-slider'
	};
	return (
		<div className="brand-logo-slider">
			<div className="header-container">
				<h2 className="brand-header">– VÅRA VARUMÄRKEN –</h2>
			</div>
			<Slider {...settings}>
				<div className="brand-logo">
					<img className="brand" src={Actia} alt="logo" />
				</div>
				<div className="brand-logo">
					<img className="brand" src={Audio} alt="logo" />
				</div>
				<div className="brand-logo">
					<img className="brand" src={CarComm} alt="logo" />
				</div>
				<div className="brand-logo">
					<img className="brand" src={Cobra} alt="logo" />
				</div>
				<div className="brand-logo">
					<img className="brand" src={Connex} alt="logo" />
				</div>
				<div>
					<img className="brand" src={Ecans} alt="logo" />
				</div>
				<div className="brand-logo">
					<img className="brand" src={GoldCruise} alt="logo" />
				</div>
				<div className="brand-logo">
					<img className="brand" src={Interpart} alt="logo" />
				</div>
				<div className="brand-logo">
					<img className="brand" src={Lap} alt="logo" />
				</div>
				<div className="brand-logo">
					<img className="brand" src={Meta} alt="logo" />
				</div>
				<div className="brand-logo">
					<img className="brand" src={MetaTrak} alt="logo" />
				</div>
				<div className="brand-logo">
					<img className="brand" src={Midland} alt="logo" />
				</div>
			</Slider>
		</div>
	);
};

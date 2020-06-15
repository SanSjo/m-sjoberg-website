import React from 'react';
import '../components/styles/communication.css';
import Sena from '../img/senaHeadset.jpg';
import { Header } from '../components/Header';
import { CommProduct } from '../components/CommProduct';

export const Communication = () => {
	return (
		<>
			<Header />
			<section className="products-container">
				<div className="sideMenu">
					<div className="menu">
						<h2 className="side-menu-header">Kommunikation</h2>
						<p className="side-menu-para">4G Wifi Router</p>
						<p className="side-menu-para">Midland komradio</p>
						<p className="side-menu-para">Sena Headset</p>
						<p className="side-menu-parag">Funkwerk antennförstärkning</p>
						<p className="side-menu-para">GSM</p>
					</div>
				</div>
				<div className="products">
					<CommProduct img={Sena} title="Sena Headset" />
					<CommProduct img={Sena} title="Sena Headset" />
					<CommProduct img={Sena} title="Sena Headset" />
					<CommProduct img={Sena} title="Sena Headset" />
					<CommProduct img={Sena} title="Sena Headset" />
					<CommProduct img={Sena} title="Sena Headset" />
					<CommProduct img={Sena} title="Sena Headset" />
					<CommProduct img={Sena} title="Sena Headset" />
				</div>
			</section>
		</>
	);
};

export default Communication;

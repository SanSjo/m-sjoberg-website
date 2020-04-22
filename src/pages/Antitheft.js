import React from 'react';
import { AntitheftProd } from '../components/AntitheftProd';
import { Header } from '../components/Header';
import Sena from '../img/senaHeadset.jpg';

export const Antitheft = () => {
	return (
		<>
			<Header />
			<section className="products-container">
				<div className="sideMenu">
					<div className="menu">
						<h2 className="side-menu-header">Stöldskydd</h2>
						<p className="side-menu-para">Parror</p>
						<p className="side-menu-para">Sena Headset</p>
						<p className="side-menu-para">Telit Handsfree</p>
						<p className="side-menu-para">Professionell 4G Wifi Router</p>
						<p className="side-menu-para">Carcomm DASH2 mobilhållare</p>
					</div>
				</div>
				<div className="products">
					<AntitheftProd img={Sena} title="Sena Headset" />
					<AntitheftProd img={Sena} title="Sena Headset" />
					<AntitheftProd img={Sena} title="Sena Headset" />
					<AntitheftProd img={Sena} title="Sena Headset" />
					<AntitheftProd img={Sena} title="Sena Headset" />
					<AntitheftProd img={Sena} title="Sena Headset" />
					<AntitheftProd img={Sena} title="Sena Headset" />
					<AntitheftProd img={Sena} title="Sena Headset" />
				</div>
			</section>
		</>
	);
};

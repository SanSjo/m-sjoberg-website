import React from 'react';
import './styles/mega-menu.css';
import ProductMenu from './ProductMenu';

export const Categories = () => {
	return (
		<div className="dropdown">
			<button type="button" className=" dropbtn nav-button">
				KATEGORIER <i className="fa fa-caret-down" />
			</button>
			<div className="dropdown-content">
				<div className="row">
					<ProductMenu
						title="A"
						product1="Abonnemang - MetaTrak"
						link1=""
						product2="Anafi - Drönare"
						link2=""
						product3="Antenn"
						link3=""
						product4="Antennförstärkare"
						link4=""
						product5="Arbetsljus LED - LAP"
						link5=""
						product6="Aux kablage"
						link6=""
						product7="Aux universal kablage"
						link7=""
						product8="Avståndsvarnare"
						link8=""
						product9=""
						link9=""
						product10=""
						link10=""
					/>
					<ProductMenu
						title="B"
						product1="Backsensor"
						link1=""
						product2="Backkamera 360° sats"
						link2=""
						product3="Back-TV"
						link3=""
						product4="Backvarnare"
						link4=""
						product5="Bagagestroppar"
						link5=""
						product6="Basplatta - Carcomm"
						link6=""
						product7="Batterikabelskor"
						link7=""
						product8="Bebop-Pro"
						link8=""
						product9="Bistabila - Huvudströmbrytare"
						link9=""
						product10="Bilstereo"
						link10=""
						product11="Blinkljus LED"
						link11=""
						product12="Bluetooth"
						link11=""
						product13="Båtlarm"
						link11=""
					/>
					<ProductMenu
						title="C"
						product1="Canbus - Farthållare"
						link1=""
						product2="Canbus - Fordonslarm"
						link2=""
						product3="Carcomm"
						link3=""
						product4="Cobra"
						link4=""
						product5="Bagagestroppar"
						link5=""
						product6="Basplatta - Carcomm"
						link6=""
						product7="Batterikabelskor"
						link7=""
						product8="Bebop-Pro"
						link8=""
						product9="Bistabila - Huvudströmbrytare"
						link9=""
						product10="Bilstereo"
						link10=""
						product11="Blinkljus LED"
						link11=""
						product12="Bluetooth"
						link11=""
						product13="Båtlarm"
						link11=""
					/>
					Canbus - Farthållare Canbus - Fordonslarm Canbus - Interface Carcomm -
					Aktiva hållare Carcomm - Antenner Carcomm - Fästen Carcomm - Musik
					hållare Carcomm - PDA hållare Carcomm - Svanhalsmikrofon Centrallås -
					Pulsrelä - Datalinker Cobra - Fordonslarm
				</div>
			</div>
		</div>
	);
};

export default Categories;

// Antenn - Komradio AM/FM radio - Nödapparat
// Antenn - Komradio
// Antenn - GSM/UMTS/GPRS
// Antenn - TV
// Antenn - TV 24V

/* <div className="column">
						<h3>Bluetooth & Headset</h3>
						<a href="#">
							<i className="fa fa-angle-right" aria-hidden="true" /> Sena
							Headset
						</a>
						<a href="#">
							<i className="fa fa-angle-right" aria-hidden="true" />{' '}
							OnCarDisplay Handsfree
						</a>
						<a href="#">
							<i className="fa fa-angle-right" aria-hidden="true" /> Parrot
							Handsfree
						</a>
						<a href="#">
							<i className="fa fa-angle-right" aria-hidden="true" /> Handsfree
							MUTE kablar
						</a>
						<hr />
						<a href="#">
							<i className="fa fa-angle-right" aria-hidden="true" /> Parrot Zik
							Bluetooth hörlur
						</a>
						<a href="#">
							<i className="fa fa-angle-right" aria-hidden="true" /> Parrot Pot
							/ Flower Power
						</a>
						<a href="#">
							<i className="fa fa-angle-right" aria-hidden="true" /> Parrot
							ANAFI Drone
						</a>
						<a href="#">
							<i className="fa fa-angle-right" aria-hidden="true" /> Parrot
							BEBOP-PRO Drone
						</a>
						<a href="#">
							<i className="fa fa-angle-right" aria-hidden="true" /> Parrot
							DISCO-PRO Drone
						</a>
						<a href="#">
							<i className="fa fa-angle-right" aria-hidden="true" /> Parrot Mini
							Drone
						</a>
						<a href="#">
							<i className="fa fa-angle-right" aria-hidden="true" /> Parrot
							DISCO-PRO Drone
						</a>
						<a href="#">
							<i className="fa fa-angle-right" aria-hidden="true" /> Parrot
							Fotoram
						</a>
						<hr />
						<a href="#">
							<i className="fa fa-angle-right" aria-hidden="true" /> Funkwerk
							Handsfree med SIM kort plats
						</a>

						<hr />
						<a href="#">
							<i className="fa fa-angle-right" aria-hidden="true" /> Handsfree
							AUX kablar
						</a>
						<a href="#">
							<i className="fa fa-angle-right" aria-hidden="true" />{' '}
							Strömmatning säkringsbox
						</a>
						<a href="#">
							<i className="fa fa-angle-right" aria-hidden="true" />{' '}
							Tändspänningsgenerator
						</a>
						<a href="#">
							<i className="fa fa-angle-right" aria-hidden="true" /> Universal
							AUX lösningar
						</a>
					</div>
					<div className="column">
						<h3>Kommuniktion</h3>
						<a href="#">
							<i className="fa fa-angle-right" aria-hidden="true" /> 4G Wifi
							Router
						</a>
						<a href="#">
							<i className="fa fa-angle-right" aria-hidden="true" /> Midland
							komradio
						</a>
						<a href="#">
							<i className="fa fa-angle-right" aria-hidden="true" /> GSM 3G
							Repeater
						</a>
						<hr />
						<a href="#">
							<i className="fa fa-angle-right" aria-hidden="true" /> Carcomm
							Aktiva hållare
						</a>
						<a href="#">
							<i className="fa fa-angle-right" aria-hidden="true" /> Carcomm
							Musik hållare
						</a>
						<a href="#">
							<i className="fa fa-angle-right" aria-hidden="true" />
							Carcomm PDA hållare
						</a>
						<a href="#">
							<i className="fa fa-angle-right" aria-hidden="true" /> Carcomm
							Antenner
						</a>
						<a href="#">
							<i className="fa fa-angle-right" aria-hidden="true" /> Carcomm
							Svanhalsmic
						</a>
						<a href="#">
							<i className="fa fa-angle-right" aria-hidden="true" /> Carcomm
							Universal fästen
						</a>
						<hr />
						<a href="#">
							<i className="fa fa-angle-right" aria-hidden="true" /> GSM larm -
							Patriot
						</a>
						<a href="#">
							<i className="fa fa-angle-right" aria-hidden="true" /> GSM modem
						</a>
						<a href="#">
							<i className="fa fa-angle-right" aria-hidden="true" /> GSM telefon
							- Handsfree
						</a>
						<a href="#">
							<i className="fa fa-angle-right" aria-hidden="true" /> GSM telefon
							- Handsfree
						</a>
						<a href="#">
							<i className="fa fa-angle-right" aria-hidden="true" /> GSM telefon
							- Fast installation
						</a>
						<hr />
						<a href="#">
							<i className="fa fa-angle-right" aria-hidden="true" /> Funkwerk
							antennförstärkare
						</a>
					</div>
					<div className="column">
						<h3>Stöldskydd</h3>
						<a href="#">
							<i className="fa fa-angle-right" aria-hidden="true" />{' '}
							Startspärrsystem Garos
						</a>
						<a href="#">
							<i className="fa fa-angle-right" aria-hidden="true" />{' '}
							Startspärrsystem Meta
						</a>
						<hr />
						<a href="#">
							<i className="fa fa-angle-right" aria-hidden="true" /> Cobra
							fordonslarm
						</a>
						<a href="#">
							<i className="fa fa-angle-right" aria-hidden="true" /> Meta
							fordonslarm
						</a>
						<a href="#">
							<i className="fa fa-angle-right" aria-hidden="true" /> Texalarm
							fordonslarm
						</a>
						<a href="#">
							<i className="fa fa-angle-right" aria-hidden="true" />
							Spyball MC Larm
						</a>
						<hr />
						<a href="#">
							<i className="fa fa-angle-right" aria-hidden="true" /> Båtlarm
						</a>
						<a href="#">
							<i className="fa fa-angle-right" aria-hidden="true" /> Husbillarm
						</a>
						<hr />
						<a href="#">
							<i className="fa fa-angle-right" aria-hidden="true" /> GPS
							söksystem - MetaTrak
						</a>
						<a href="#">
							<i className="fa fa-angle-right" aria-hidden="true" /> GPS larm -
							CobraConnex
						</a>
						<a href="#">
							<i className="fa fa-angle-right" aria-hidden="true" /> GPS tracker
							- InterPart
						</a>
						<a href="#">
							<i className="fa fa-angle-right" aria-hidden="true" /> GPS tracker
							- Patriot
						</a>
						<hr />
						<a href="#">
							<i className="fa fa-angle-right" aria-hidden="true" /> Morpheus -
							Cobra
						</a>
						<a href="#">
							<i className="fa fa-angle-right" aria-hidden="true" /> Datalinker
							- Cobra
						</a>
						<a href="#">
							<i className="fa fa-angle-right" aria-hidden="true" /> PRG007 -
							Meta
						</a>
						<hr />
						<a href="#">
							<i className="fa fa-angle-right" aria-hidden="true" /> Centrallås
						</a>
						<a href="#">
							<i className="fa fa-angle-right" aria-hidden="true" /> Centrallås
							- Pulsrelä
						</a>
						<a href="#">
							<i className="fa fa-angle-right" aria-hidden="true" /> Gaslarm
						</a>
						<a href="#">
							<i className="fa fa-angle-right" aria-hidden="true" /> GSM modem
						</a>
						<a href="#">
							<i className="fa fa-angle-right" aria-hidden="true" /> IR-sensor
						</a>
						<a href="#">
							<i className="fa fa-angle-right" aria-hidden="true" />{' '}
							Magnetkontakt
						</a>
						<a href="#">
							<i className="fa fa-angle-right" aria-hidden="true" />{' '}
							Mikrovågsensor
						</a>
						<a href="#">
							<i className="fa fa-angle-right" aria-hidden="true" />{' '}
							Motorhuv/dörr Kontakter
						</a>
						<a href="#">
							<i className="fa fa-angle-right" aria-hidden="true" /> Nivåsensor
						</a>
						<a href="#">
							<i className="fa fa-angle-right" aria-hidden="true" />{' '}
							Personsökare
						</a>
						<a href="#">
							<i className="fa fa-angle-right" aria-hidden="true" />{' '}
							Siren/Signalhorn
						</a>
						<a href="#">
							<i className="fa fa-angle-right" aria-hidden="true" />{' '}
							Strömmatning/Dioder
						</a>
						<a href="#">
							<i className="fa fa-angle-right" aria-hidden="true" /> Tidrelä
						</a>
						<a href="#">
							<i className="fa fa-angle-right" aria-hidden="true" /> Trådlösa
							larmsensorer
						</a>
					</div>
					<div className="column">
						<h3>Category 4</h3>
						<a href="#">Link 1</a>
						<a href="#">Link 2</a>
						<a href="#">Link 3</a>
					</div>

					<div className="column">
						<h3>Category 5</h3>
						<a href="#">Link 1</a>
						<a href="#">Link 2</a>
						<a href="#">Link 3</a>
						<a href="#">Link 1</a>
						<a href="#">Link 2</a>
						<a href="#">Link 3</a>
						<a href="#">Link 1</a>
						<a href="#">Link 2</a>
						<a href="#">Link 3</a>
						<a href="#">Link 1</a>
						<a href="#">Link 2</a>
						<a href="#">Link 3</a>
					</div>
					<div className="column">
						<h3>Category 6</h3>
						<a href="#">Link 1</a>
						<a href="#">Link 2</a>
						<a href="#">Link 3</a>
						<a href="#">Link 1</a>
						<a href="#">Link 2</a>
						<a href="#">Link 3</a>
						<a href="#">Link 1</a>
						<a href="#">Link 2</a>
						<a href="#">Link 3</a>
						<a href="#">Link 1</a>
						<a href="#">Link 2</a>
						<a href="#">Link 3</a>
					</div>
					<div className="column">
						<h3>Category 7</h3>
						<a href="#">Link 1</a>
						<a href="#">Link 2</a>
						<a href="#">Link 3</a>
						<a href="#">Link 1</a>
						<a href="#">Link 2</a>
						<a href="#">Link 3</a>
						<a href="#">Link 1</a>
						<a href="#">Link 2</a>
						<a href="#">Link 3</a>
						<a href="#">Link 1</a>
						<a href="#">Link 2</a>
						<a href="#">Link 3</a>
					</div> */

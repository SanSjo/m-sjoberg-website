/* eslint-disable no-tabs */
import React, { useState } from 'react';
import './styles/mega-menu.css';
import { NavLink } from 'react-router-dom';
import DropdownColumnNav from './DropdownColumnNav';

export const Categories = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div className="dropdown">
      <button onClick={toggle} type="button" className=" dropbtn nav-button">
		KATEGORIER <i className="fa fa-caret-down" />
      </button>

      {open && (
        <div className="dropdown-content">
          <div className="row">
            <DropdownColumnNav
              header="Bluetooth & Headset"
              menuItem1="Sena Headset"
              menuItem2="OnCarDisplay Handsfree"
              menuItem3="Handsfree MUTE kablar"
              menuItem4="Funkwerk Handsfree med SIM kort plats"
              menuItem5="Universal Handsfree AUX kablar"
              menuItem6="Strömmatning säkringsbox"
              menuItem7="Handsfree MUTE kablar"
              menuItem8="Universal AUX lösningar" />

            <div className="column">
              <NavLink to="./Communication">
                <h3>Kommuniktion</h3>
              </NavLink>
              <p className="menu-item">4G Wifi Router</p>
              <p className="menu-item">Midland komradio</p>
              <p className="menu-item">Sena Headset</p>
              <p className="menu-item">Funkwerk antennförstärkare</p>
              <div className="sub-dropdown">
                <div className="menu-item-dropdown">
                  <p className="menu-item">GSM</p>{' '}
                  <i className="fa fa-angle-right" aria-hidden="true" />
                </div>
                <div className="sub-dropdown-content-col-2">
                  <div>
                    <div>
                      <div>
                        <p>GSM 3G Repeater</p>
                        <p>GSM larm Patriot</p>
                        <p>GSM telefon Handsfree</p>
                        <p>GSM telefon - Fast installation</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="column">
              <h3>Stöldskydd</h3>
              <div className="sub-dropdown">
                <div className="menu-item-dropdown">
                  <p className="menu-item">GPS</p>{' '}
                  <i className="fa fa-angle-right" aria-hidden="true" />
                </div>
                <div className="sub-dropdown-content-col-3">
                  <div>
                    <div>
                      <div>
                        <p>GPS söksystem - MetaTrak</p>
                        <p>GPS larm - CobraConnex</p>
                        <p>GPS Tracker - Interpart</p>
                        <p>GPS tracker - Patriot</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sub-dropdown">
                <div className="menu-item-dropdown">
                  <p className="menu-item">Centrallås</p>{' '}
                  <i className="fa fa-angle-right" aria-hidden="true" />
                </div>
                <div className="sub-dropdown-content-col-3">
                  <div>
                    <div>
                      <div>
                        <p>Centrallås</p>
                        <p>Centrallås - Pulsrelä</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sub-dropdown">
                <div className="menu-item-dropdown">
                  <p className="menu-item">Startspärrsystem</p>{' '}
                  <i className="fa fa-angle-right" aria-hidden="true" />
                </div>
                <div className="sub-dropdown-content-col-3">
                  <div>
                    <div>
                      <div>
                        <p>Startspärrsystem Garos</p>
                        <p>Startspärrsystem Meta</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sub-dropdown">
                <div className="menu-item-dropdown">
                  <p className="menu-item">Fordonslarm</p>{' '}
                  <i className="fa fa-angle-right" aria-hidden="true" />
                </div>
                <div className="sub-dropdown-content-col-3">
                  <div>
                    <div>
                      <div>
                        <p>Cobra Fordonslarm</p>
                        <p>Meta Fordonslarm</p>
                        <p>Texalarm Fordonslarm</p>
                        <p>Meta MC-larm</p>
                        <p>Spyball MC-larm</p>
                        <p>Husbillarm</p>
                        <p>Båtlarm</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <p className="menu-item">Morpheus - Cobra</p>
              <p className="menu-item">Datalinker - Cobra</p>
              <p className="menu-item">PRG007 - Meta</p>
              <p className="menu-item"> GPS tracker - Patriot</p>
              <p className="menu-item">Morpheus - Cobra</p>
              <p className="menu-item">Datalinker - Cobra</p>
              <p className="menu-item"> PRG007 - Meta</p>

              <p className="menu-item">Fjärrstyrning</p>
              <p className="menu-item">Gaslarm</p>
              <p className="menu-item">GSM modem</p>
              <p className="menu-item">IR-sensor</p>
              <p className="menu-item">Magnetkontakt</p>
              <p className="menu-item">Mikrovågsensor</p>
              <p className="menu-item">Motorhuv/dörr Kontakter</p>
              <p className="menu-item">Nivåsensor</p>
              <p className="menu-item">Personsökare</p>
              <p className="menu-item">Siren/Signalhorn</p>
              <p className="menu-item">Strömmatning/Dioder</p>
              <p className="menu-item"> Tidrelä</p>
              <p className="menu-item">Trådlösa larmsensorer</p>
            </div>

            <div className="column">
              <h3>BackTV - LCD - TV - Video</h3>
              <div className="sub-dropdown">
                <div className="menu-item-dropdown">
                  <p className="menu-item">HD Back-TV</p>{' '}
                  <i className="fa fa-angle-right" aria-hidden="true" />
                </div>
                <div className="sub-dropdown-content-col-4">
                  <div>
                    <div>
                      <div>
                        <p>HD Back-TV 360 kit</p>
                        <p>HD Back-TV DVR</p>
                        <p>HD Back-TV Monitorer</p>
                        <p>HD Back-TV Kameror</p>
                        <p>HD Back-TV Kablar</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sub-dropdown">
                <div className="menu-item-dropdown">
                  <p className="menu-item">Trådlös Back-TV</p>{' '}
                  <i className="fa fa-angle-right" aria-hidden="true" />
                </div>
                <div className="sub-dropdown-content-col-4">
                  <div>
                    <div>
                      <div>
                        <p>Trådlös Back-TV - Satser</p>
                        <p>Trådlös Back-TV - Monitorer</p>
                        <p>Trådlös Back-TV - Kameror</p>
                        <p>Trådlös Back-TV - Tillbehör</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sub-dropdown">
                <div className="menu-item-dropdown">
                  <p className="menu-item">Back-TV</p>{' '}
                  <i className="fa fa-angle-right" aria-hidden="true" />
                </div>
                <div className="sub-dropdown-content-col-4">
                  <div>
                    <div>
                      <div>
                        <p>Back-TV - Satser</p>
                        <p>Back-TV - Monitorer</p>
                        <p>Back-TV - Kameror</p>
                        <p>Back-TV - Tillbehör</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="sub-dropdown">
                <div className="menu-item-dropdown">
                  <p className="menu-item">DVD</p>{' '}
                  <i className="fa fa-angle-right" aria-hidden="true" />
                </div>
                <div className="sub-dropdown-content-col-4">
                  <div>
                    <div>
                      <div>
                        <p>DVD</p>
                        <p>DVD Bilstereo</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sub-dropdown">
                <div className="menu-item-dropdown">
                  <p className="menu-item">LCD</p>{' '}
                  <i className="fa fa-angle-right" aria-hidden="true" />
                </div>
                <div className="sub-dropdown-content-col-4">
                  <div>
                    <div>
                      <div>
                        <p>LCD - Monitor</p>
                        <p>LCD - Takmonitor</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="menu-item">Mediaspelare</p>
              <p className="menu-item">Video</p>
              <p className="menu-item">Antenn</p>
              <p className="menu-item">FM Modulator</p>
              <p className="menu-item">Hörlurar Standard</p>
              <p className="menu-item">Hörlura IR</p>
              <p className="menu-item">Kablage</p>
              <p className="menu-item">Monitorfästen</p>
              <p className="menu-item">Monitorfästen</p>
              <p className="menu-item">TV Tuner</p>
            </div>

            <div className="column">
              <h3>12V Bilelektronik</h3>
              <div className="sub-dropdown">
                <div className="menu-item-dropdown">
                  <p className="menu-item">Aux</p>{' '}
                  <i className="fa fa-angle-right" aria-hidden="true" />
                </div>
                <div className="sub-dropdown-content-col-5">
                  <div>
                    <div>
                      <div>
                        <p>Aux - Kablage</p>
                        <p>Aux - Universal Audi</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="menu-item">Backvarnare</p>
              <div className="sub-dropdown">
                <div className="menu-item-dropdown">
                  <p className="menu-item">Bilstereo</p>{' '}
                  <i className="fa fa-angle-right" aria-hidden="true" />
                </div>
                <div className="sub-dropdown-content-col-5">
                  <div>
                    <div>
                      <div>
                        <p>Bilstereo - DVD</p>
                        <p>Bilstereo - Parrot</p>
                        <p>Bilstereo - Roadstar</p>
                        <p>Bilstereo - Högtalare</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="menu-item">Canbus Interface</p>
              <div className="sub-dropdown">
                <div className="menu-item-dropdown">
                  <p className="menu-item">LED</p>{' '}
                  <i className="fa fa-angle-right" aria-hidden="true" />
                </div>
                <div className="sub-dropdown-content-col-5">
                  <div>
                    <div>
                      <div>
                        <p>LED arbetsljus</p>
                        <p>LED fordonsljus</p>
                        <p>LED varningsljus</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="menu-item">Avståndsvarnare</p>
              <p className="menu-item">Backsensor</p>
              <p className="menu-item">Cenrallås</p>
              <p className="menu-item">Elektronisk P-skiva</p>
              <p className="menu-item">Farthållare</p>
              <p className="menu-item">Kollisionsvarnare</p>
              <p className="menu-item">Körfältsvarnare</p>
              <p className="menu-item">Parkeringsradar</p>
              <p className="menu-item">Regnsensor</p>
              <p className="menu-item">Speed limiter</p>
              <p className="menu-item">Spännband</p>
              <p className="menu-item">DC/DC omvandlare</p>
              <p className="menu-item">Sena MC intercom</p>
              <p className="menu-item">Spyball MC intercom</p>
              <p className="menu-item">USB laddningsuttag</p>
              <p className="menu-item">Batterikabelskor</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Categories;

// Antenn - Komradio AM/FM radio - Nödapparat
// Antenn - Komradio
// Antenn - GSM/UMTS/GPRS
// Antenn - TV
// Antenn - TV 24V

// <ProductMenu
// 	title="A"
// 	product1="Abonnemang - MetaTrak"
// 	link1=""
// 	product2="Anafi - Drönare"
// 	link2=""
// 	product3="Antenn"
// 	link3=""
// 	product4="Antennförstärkare"
// 	link4=""
// 	product5="Arbetsljus LED - LAP"
// 	link5=""
// 	product6="Aux kablage"
// 	link6=""
// 	product7="Aux universal kablage"
// 	link7=""
// 	product8="Avståndsvarnare"
// 	link8=""
// 	product9=""
// 	link9=""
// 	product10=""
// 	link10=""
// />
// <ProductMenu
// 	title="B"
// 	product1="Backsensor"
// 	link1=""
// 	product2="Backkamera 360° sats"
// 	link2=""
// 	product3="Back-TV"
// 	link3=""
// 	product4="Backvarnare"
// 	link4=""
// 	product5="Bagagestroppar"
// 	link5=""
// 	product6="Basplatta - Carcomm"
// 	link6=""
// 	product7="Batterikabelskor"
// 	link7=""
// 	product8="Bebop-Pro"
// 	link8=""
// 	product9="Bistabila - Huvudströmbrytare"
// 	link9=""
// 	product10="Bilstereo"
// 	link10=""
// 	product11="Blinkljus LED"
// 	link11=""
// 	product12="Bluetooth"
// 	link11=""
// 	product13="Båtlarm"
// 	link11=""
// />
// <ProductMenu
// 	title="C"
// 	product1="Canbus - Farthållare"
// 	link1=""
// 	product2="Canbus - Fordonslarm"
// 	link2=""
// 	product3="Carcomm - antenner, fästen, Musik, PDA-hållare, Svanhalsmikrofon"
// 	link3=""
// 	product4="Centrallås - Pulsrelä"
// 	link4=""
// 	product5="Cobra - Fordonslarm"
// 	link5=""
// />
// <ProductMenu
// 	title="D"
// 	product1="DASH2 Carcomm - Aktiva hållare"
// 	link1=""
// 	product2="Datalinker - Cobra"
// 	link2=""
// 	product3="DC/DC omvandlare"
// 	link3=""
// 	product4="Diod"
// 	link4=""
// 	product5="Disco FPV - Drönare"
// 	link5=""
// 	product6="Drönare - Parrot"
// 	link6=""
// 	product7="DVD - 24V, Bilstereo"
// 	link7=""
// 	product8="DVR Back-TV system"
// 	link8=""
// 	product9="Dynamo med vev - Nödapparat"
// 	link9=""
// />
// <ProductMenu title="E" product1="Elektronisk P-skiva" link1="" />
// <ProductMenu
// 	title="F"
// 	product1="Farthållare"
// 	link1=""
// 	product2="Fjärrstyrning"
// 	link2=""
// 	product3="FLIR värmekamera - Drönare"
// 	link3=""
// 	product4="FM Modulator"
// 	link4=""
// 	product5="FM/AM radio - Nödapparat"
// 	link5=""
// 	product6="Fordonsbelysning LED -LAP"
// 	link6=""
// 	product7="Fordonslarm - Cobra, Meta, Texalarm"
// 	link7=""
// 	product8="Funkwerk antennförstärkare, Handsfree"
// 	link8=""
// />
// <ProductMenu
// 	title="G"
// 	product1="Gaslarm"
// 	link1=""
// 	product2="Gassensor"
// 	link2=""
// 	product3="GPS - larm, stöldskydd/söksystem, tracker"
// 	link3=""
// 	product4="GSM"
// 	link4=""
// 	product5="GSM - larm, telefon"
// 	link5=""
// 	product6="Guidesystem - Dator/Ljudsystem, Förstärkare/Mixer, Hörlur, Mikrofon"
// 	link6=""
// />
// <ProductMenu
// 	title="H"
// 	product1="Gaslarm"
// 	link1=""
// 	product2="Gassensor"
// 	link2=""
// 	product3="GPS - larm, stöldskydd/söksystem, tracker"
// 	link3=""
// 	product4="GSM"
// 	link4=""
// 	product5="GSM - larm, telefon"
// 	link5=""
// 	product6="Guidesystem - Dator/Ljudsystem, Förstärkare/Mixer, Hörlur, Mikrofon"
// 	link6=""
// />
// <ProductMenu
// 	title="I"
// 	product1="Gaslarm"
// 	link1=""
// 	product2="Gassensor"
// 	link2=""
// 	product3="GPS - larm, stöldskydd/söksystem, tracker"
// 	link3=""
// 	product4="GSM"
// 	link4=""
// 	product5="GSM - larm, telefon"
// 	link5=""
// 	product6="Guidesystem - Dator/Ljudsystem, Förstärkare/Mixer, Hörlur, Mikrofon"
// 	link6=""
// />
// <ProductMenu
// 	title="J"
// 	product1="Gaslarm"
// 	link1=""
// 	product2="Gassensor"
// 	link2=""
// 	product3="GPS - larm, stöldskydd/söksystem, tracker"
// 	link3=""
// 	product4="GSM"
// 	link4=""
// 	product5="GSM - larm, telefon"
// 	link5=""
// 	product6="Guidesystem - Dator/Ljudsystem, Förstärkare/Mixer, Hörlur, Mikrofon"
// 	link6=""
// />
// <ProductMenu
// 	title="K"
// 	product1="Gaslarm"
// 	link1=""
// 	product2="Gassensor"
// 	link2=""
// 	product3="GPS - larm, stöldskydd/söksystem, tracker"
// 	link3=""
// 	product4="GSM"
// 	link4=""
// 	product5="GSM - larm, telefon"
// 	link5=""
// 	product6="Guidesystem - Dator/Ljudsystem, Förstärkare/Mixer, Hörlur, Mikrofon"
// 	link6=""
// />
// <ProductMenu
// 	title="L"
// 	product1="Gaslarm"
// 	link1=""
// 	product2="Gassensor"
// 	link2=""
// 	product3="GPS - larm, stöldskydd/söksystem, tracker"
// 	link3=""
// 	product4="GSM"
// 	link4=""
// 	product5="GSM - larm, telefon"
// 	link5=""
// 	product6="Guidesystem - Dator/Ljudsystem, Förstärkare/Mixer, Hörlur, Mikrofon"
// 	link6=""
// />
// <ProductMenu
// 	title="M"
// 	product1="Gaslarm"
// 	link1=""
// 	product2="Gassensor"
// 	link2=""
// 	product3="GPS - larm, stöldskydd/söksystem, tracker"
// 	link3=""
// 	product4="GSM"
// 	link4=""
// 	product5="GSM - larm, telefon"
// 	link5=""
// 	product6="Guidesystem - Dator/Ljudsystem, Förstärkare/Mixer, Hörlur, Mikrofon"
// 	link6=""
// />
// <ProductMenu
// 	title="N"
// 	product1="Gaslarm"
// 	link1=""
// 	product2="Gassensor"
// 	link2=""
// 	product3="GPS - larm, stöldskydd/söksystem, tracker"
// 	link3=""
// 	product4="GSM"
// 	link4=""
// 	product5="GSM - larm, telefon"
// 	link5=""
// 	product6="Guidesystem - Dator/Ljudsystem, Förstärkare/Mixer, Hörlur, Mikrofon"
// 	link6=""
// />
// <ProductMenu
// 	title="P"
// 	product1="Gaslarm"
// 	link1=""
// 	product2="Gassensor"
// 	link2=""
// 	product3="GPS - larm, stöldskydd/söksystem, tracker"
// 	link3=""
// 	product4="GSM"
// 	link4=""
// 	product5="GSM - larm, telefon"
// 	link5=""
// 	product6="Guidesystem - Dator/Ljudsystem, Förstärkare/Mixer, Hörlur, Mikrofon"
// 	link6=""
// />
// <ProductMenu
// 	title="Q"
// 	product1="Gaslarm"
// 	link1=""
// 	product2="Gassensor"
// 	link2=""
// 	product3="GPS - larm, stöldskydd/söksystem, tracker"
// 	link3=""
// 	product4="GSM"
// 	link4=""
// 	product5="GSM - larm, telefon"
// 	link5=""
// 	product6="Guidesystem - Dator/Ljudsystem, Förstärkare/Mixer, Hörlur, Mikrofon"
// 	link6=""
// />

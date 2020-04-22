/* eslint-disable indent */
/* eslint-disable no-tabs */
import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import '../components/styles/about.css';
import Iso from '../img/iso_sve.png';

export const About = () => {
	return (
		<>
			<Header />
			<section className="about">
				<div className="main-container">
					<div className="header">
						<h1>VÅR HISTORIA</h1>
					</div>
					<div className="container">
						<div className="about-container">
							<h2 className="about-header">OM OSS</h2>
							<p className="about-para">
								Ingeniörsfirman M.Sjöberg AB är sedan 1953 importör och
								distributör av fordonselektriska produkter till fordonsindustrin
								och eftermarknad. Vi har ett 20-tal agenturer och arbetar med
								12-24V produkter av hög kvalitet anpassade för nordiskt klimat.
								Vi uppfyller högt ställda krav och är ISO-certifierade. Kontor,
								lager, support och service i egen fastighet i Solna.
							</p>
							<p className="about-para">
								Bland våra tillverkande kunder finns: Volvo, Scania, Komatsu,
								Rottne, Valtra, Autokaross. Liebherr, Bobcat, Agco, Pon, Swecon,
								Dynapac, John Deere, Valtra, Autokaross…
							</p>
							<p className="about-para">
								Bland våra eftermarknadskunder finns: Autoexperten, KGK,
								Lantmännen, Kjell&Co, Meca, Skogma, Proffsmagasinet, Ahlsell,
								Stjärnafyrkant, Dialect, NetOnNet, Clas Ohlson, Huzells, Abkati…
							</p>
						</div>

						<div className="about-container">
							<h2 className="about-header">KVALITETSPOLICY</h2>
							<p className="about-para">
								Ingeniörsfirman M Sjöberg erbjuder sina kunder ett brett utbud
								av de senaste produkterna inom fordonselektronik. För att
								uppfylla de krav som våra kunder ställer på oss fokuserar vi på
								produkter av hög kvalitet till konkurrenskraftiga priser.
								Självklart uppfyller produkterna även kraven som ställs i
								gällande författningar som t ex RoHS, WEEE m fl. För att vara
								ledande inom Sverige när det gäller fordons elektronik produkter
								och valet för Sveriges återförsäljare inom fordonselektronik
								branschen arbetar Ingenjörsfirman M.Sjöberg AB med att:
							</p>
							<ul className="policy">
								<li className="policy-list">
									<p className="policy-para">
										vara uppdaterade på produktnyheter och ny teknologi
									</p>
								</li>
								<li className="policy-list">
									<p className="policy-para">hålla våra leveranstider</p>
								</li>
								<li className="policy-list">
									<p className="policy-para">
										hantera reklamationer och klagomål så snabbt som möjligt,
										när de uppstår
									</p>
								</li>
							</ul>
						</div>
						<div className="about-container">
							<h2 className="about-header">MILJÖPOLICY</h2>
							<p className="about-para">
								Ingeniörsfirman M.Sjöberg AB arbetar med att utöka sitt
								återförsäljarnätverk för att samordna transporter och på så sätt
								förebygga föroreningar på miljön. Dessutom pågår dagligen ett
								arbete med att:
							</p>
							<ul className="policy">
								<li className="policy-list">
									<p className="policy-para">
										Ta hänsyn till miljöaspekter vid val av leverantör och
										prioritera miljöcertifierade.
									</p>
								</li>
								<li className="policy-list">
									<p className="policy-para">
										Välja transport och distributionslösningar som ger minimal
										miljöpåverkan.
									</p>
								</li>
								<li className="policy-list">
									<p className="policy-para">
										Välja pappersprodukter som är miljömärkta.
									</p>
								</li>
								<li className="policy-list">
									<p className="policy-para">
										Välja miljöanpassade datorer och annan kontorsutrustning.
									</p>
								</li>
								<li className="policy-list">
									<p className="policy-para">
										Ersätta mindre miljövänliga produkter om miljövänligare
										alternativ finns.
									</p>
								</li>
								<li className="policy-list">
									<p className="policy-para">
										Sträva efter ständig förbättring i miljöarbetet.
									</p>
								</li>
							</ul>
						</div>
						<div className="about-container">
							<h2 className="about-header">CERTIFIERING</h2>
							<ul className="policy">
								<li className="policy-list">
									<p className="policy-para">
										ansluten till El-Kretsen i Sverige AB och följer därmed
										förordningen om producentansvar för elutrustning (SFS
										2014:1075).
									</p>
								</li>
								<li className="policy-list">
									<p className="policy-para">
										ansluten till FTI, näringslivets insamlingssystem för
										återvinning av förpackningar.
									</p>
								</li>
								<li className="policy-list">
									<p className="policy-para">
										certifierad enligt ISO 9001:2015 och ISO 14001:2015.
									</p>
								</li>
								<div className="certificate">
									<img className="iso" src={Iso} alt="ISO" />
								</div>
							</ul>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
};

export default About;

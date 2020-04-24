/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';
import './styles/home-cards.css';
import Parrot from '../img/parrot-unika.jpg';
import AsteroidSmart from '../img/AsteroidSmart_bild.jpg';
import Multican from '../img/multican.jpg';
import Anafi from '../img/AnafiSkycontroller.jpg';

export const HomeCards = props => {
	return (
		<section className="cards-container">
			{/* <!-- Card --> */}
			<div className="homecard-header-container">
				<h2 className="homecard-header">– {props.title} –</h2>
			</div>

			<div className="card-product-container">
				<div className="card-product">
					{/* <!-- Card image --> */}
					<div className="hover-container">
						<button type="button" src="#" className="btn btn-primary">
							MER INFO
						</button>
					</div>

					<div className="view overlay">
						<img className="card-img-top" src={Parrot} alt="Card cap" />
						<a href="#!">
							<div className="mask rgba-white-slight" />
						</a>
					</div>
					<div className="title-container">
						<h4 className="card-title">KOMMUNIKATION</h4>
					</div>
					{/* <!-- Card content --> */}
					<div className="card-body">
						<p className="card-text">
							Some quick example text to build on the card title and make up the
							bulk of the cards content.
						</p>
					</div>
				</div>

				{/* <!-- Card --> */}
				<div className="card-product">
					{/* <!-- Card image --> */}
					<div className="hover-container">
						<button type="button" src="#" className="btn btn-primary">
							MER INFO
						</button>
					</div>

					<div className="view overlay">
						<img className="card-img-top" src={AsteroidSmart} alt="Card cap" />
						<a href="#!">
							<div className="mask rgba-white-slight" />
						</a>
					</div>
					<div className="title-container">
						<h4 className="card-title">STÖLDSKYDD</h4>
					</div>

					{/* <!-- Card content --> */}
					<div className="card-body">
						<p className="card-text">
							Some quick example text to build on the card title and make up the
							bulk of the cards content.
						</p>
					</div>
				</div>

				{/* <!-- Card --> */}
				<div className="card-product">
					{/* <!-- Card image --> */}
					<div className="view overlay">
						<div className="hover-container">
							<button type="button" src="#" className="btn btn-primary">
								MER INFO
							</button>
						</div>

						<img className="card-img-top" src={Multican} alt="Card cap" />
						<a href="#!">
							<div className="mask rgba-white-slight" />
						</a>
					</div>
					<div className="title-container">
						<h4 className="card-title">BACKVARNING</h4>
					</div>

					{/* <!-- Card content --> */}
					<div className="card-body">
						<p className="card-text">
							Some quick example text to build on the card title and make up the
							bulk of the cards content.
						</p>
						{/* /* Button */}
					</div>
				</div>

				{/* <!-- Card --> */}
				<div className="card-product">
					{/* <!-- Card image --> */}
					<div className="hover-container">
						<button type="button" src="#" className="btn btn-primary">
							MER INFO
						</button>
					</div>

					<div className="view overlay">
						<img className="card-img-top" src={Anafi} alt="Card cap" />
						<a href="#!">
							<div className="mask rgba-white-slight" />
						</a>
					</div>
					<div className="title-container">
						<h4 className="card-title">ÖVRIGT</h4>
					</div>

					{/*  */}
					<div className="card-body">
						<p className="card-text">
							Some quick example text to build on the card title and make up the
							bulk of the cards content.
						</p>
					</div>
				</div>
				{/* <!-- Card --> */}
			</div>
		</section>
	);
};

export default HomeCards;

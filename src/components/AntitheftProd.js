/* eslint-disable arrow-parens */
import React from 'react';

export const AntitheftProd = props => {
	return (
		<div className="productCards">
			{/* <div className="hover-container">
							// eslint-disable-next-line no-tabs

							<button type="button" src="#" className="btn btn-primary">
								MER INFO
							</button>
						</div> */}
			<div className="card-view">
				<img className="card-img" src={props.img} alt="Card cap" />
				<a href="#!">
					<div className="mask rgba-white-slight" />
				</a>
			</div>
			<div className="title-container">
				<h4 className="card-title">{props.title}</h4>
			</div>
		</div>
	);
};

import React, { useEffect, useState } from 'react';

const URL = 'https://api.fortnox.se/3/articles'
const apiCode = 'f80671fb-8134-39b9-36fb-b5aa3cfa1802'

export const CommProduct = props => {
	const [authorized, setAuhorized] = useState(null)

	useEffect(() => {
		fetch(URL, {
			method: 'GET',
			headers: {
				'Authorization-Code': apiCode,
				'Client-Secret': 'mXgMlYHjpn',
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			}
		})
		.then((res) => res.json())
		.then((json) => {
			
			setAuhorized(json)
			console.log("json")
		})
	}, [authorized])

	return (
		<div className="productCards">
			{/* <div className="hover-container">
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

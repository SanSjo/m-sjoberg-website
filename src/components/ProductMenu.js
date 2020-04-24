import React from 'react';
import { Link } from 'react-router-dom';
import './styles/mega-menu.css';

export const ProductMenu = props => {
	return (
		<div className="column">
			<h3 className="productmenu-header">{props.title}</h3>
			<Link to={props.link1}>
				<p className="product-text">{props.product1}</p>{' '}
			</Link>
			<Link to={props.link2}>
				<p className="product-text">{props.product2}</p>
			</Link>
			<Link to={props.link3}>
				<p className="product-text">{props.product3}</p>
			</Link>
			<Link to={props.link4}>
				<p className="product-text">{props.product4}</p>
			</Link>
			<Link to={props.link5}>
				<p className="product-text">{props.product5}</p>
			</Link>
			<Link to={props.link6}>
				<p className="product-text">{props.product6}</p>
			</Link>
			<Link to={props.link7}>
				<p className="product-text">{props.product7}</p>
			</Link>
			<Link to={props.link8}>
				<p className="product-text">{props.product8}</p>
			</Link>
			<Link to={props.link9}>
				<p className="product-text">{props.product9}</p>
			</Link>
			<Link to={props.link10}>
				<p className="product-text">{props.product10}</p>
			</Link>
			<Link to={props.link11}>
				<p className="product-text">{props.product11}</p>
			</Link>
			<Link to={props.link12}>
				<p className="product-text">{props.product12}</p>
			</Link>
			<Link to={props.link13}>
				<p className="product-text">{props.product13}</p>
			</Link>
		</div>
	);
};

export default ProductMenu;

// <h3>{props.title}</h3>
// 		<Link to={props.link1}>
// 			<p>{props.product1}</p>
// 		</Link>
// 		<Link to={props.link2}>
// 			<p>{props.product2}</p>
// 		</Link>
// 		<Link to={props.link3}>
// 			<p>{props.product3}</p>
// 		</Link>
// 		<Link to={props.link4}>
// 			<p>{props.product4}</p>
// 		</Link>
// 		<Link to={props.link5}>
// 			<p>{props.product5}</p>
// 		</Link>
// 		<Link to={props.link6}>
// 			<p>{props.product6}</p>
// 		</Link>
// 		<Link to={props.link7}>
// 			<p>{props.product7}</p>
// 		</Link>
// 		<Link to={props.link8}>
// 			<p>{props.product8}</p>
// 		</Link>
// 		<Link to={props.link9}>
// 			<p>{props.product9}</p>
// 		</Link>
// 		<Link to={props.link10}>
// 			<p>{props.product10}</p>
// 		</Link>

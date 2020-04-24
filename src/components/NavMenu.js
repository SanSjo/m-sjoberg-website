import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MegaMenu } from './MegaMenu';
import './styles/nav-menu.css';
import Logo from '../img/Msab-logo.png';
import NavLink from './NavLink';

export const NavMenu = () => {
	const [open, setOpen] = useState(false);

	return (
		<nav>
			<div className="mobile-container">
				<Link to="/">
					<a className="nav-logo">
						<img className="logoMobile" src={Logo} alt="logo" />
					</a>
				</Link>

				{/* <!-- Top Navigation Menu --> */}
				<div className="topnav">
					<button type="button" className="icon">
						<div className="navBurger"> </div>
						<div className="navBurger"> </div>
						<div className="navBurger"> </div>
					</button>
					{open && (
						<div className="myLinks">
							<div className="navLink">
								<a className="mobileLinks" href="#news">
									News
								</a>
							</div>
							<div className="navLink">
								<a className="mobileLinks" href="#contact">
									Contact
								</a>
							</div>
							<div className="navLink">
								<a className="mobileLinks" href="#about">
									About
								</a>
							</div>
						</div>
					)}
				</div>

				{/* <!-- End smartphone / tablet look --> */}
			</div>

			<div className="navbar">
				{/* Hamburger meny  */}
				{/* <!-- Simulate a smartphone / tablet --> */}

				<p className="nav-button" href="#home">
					NYHETER
				</p>
				<MegaMenu />
				<NavLink to="/Contact">
					<p className="nav-button">KONTAKT</p>
				</NavLink>
				<NavLink to="/About">
					<p className="nav-button">OM OSS</p>
				</NavLink>
				<p className="nav-button">LOGGA IN</p>
			</div>
			{/* Search form  */}
			<div>
				<form className="search">
					<input
						className="search-bar"
						type="text"
						placeholder="Sök produkt här"
						aria-label="Search"
					/>
					<button className="search-btn" type="submit">
						<i className="fa fa-search" />
					</button>
				</form>
			</div>
		</nav>
	);
};

export default NavMenu;

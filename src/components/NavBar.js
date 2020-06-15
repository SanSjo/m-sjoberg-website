/* eslint-disable no-tabs */
/* eslint-disable indent */
import React from 'react';
import {
	Navbar,
	Nav,
	NavDropdown,
	Form,
	FormControl,
	Button,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../img/Msab-logo.png';
import './styles/header.css';

export const NavBar = () => {
	return (
		<>
			<div>
				<Navbar style={styles.navbar} bg="light" expand="lg">
					<Link to="/">
						<a style={styles.logo}>
							<img className="logo" src={logo} alt="logo" />
						</a>
					</Link>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="mr-auto">
							<NavDropdown title="Dropdown" id="basic-nav-dropdown">
								<NavDropdown.Item href="#action/3.1">
									PRODUKTER
								</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.2">
									Backkamera
								</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.3">DRönare</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="#action/3.4">NYHETER</NavDropdown.Item>
							</NavDropdown>
							<Nav.Link href="#home">OM OSS</Nav.Link>
							<Nav.Link href="#link">KONTAKT</Nav.Link>
							<Nav.Link href="#link">NYHETER</Nav.Link>
						</Nav>
						<Form inline>
							<FormControl
								type="text"
								placeholder="Search"
								className="mr-sm-2"
							/>
							<Button variant="outline-success">Search</Button>
						</Form>
					</Navbar.Collapse>
				</Navbar>
			</div>
		</>
	);
};

export default NavBar;

const styles = {
	navbar: {
		position: 'relative',
	},
	logo: {
		width: '100%',
	},
	dropdown: {
		position: 'relative',
		zndex: 1000,
	},
};

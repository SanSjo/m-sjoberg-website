import React from 'react';
// import { PushMenu, usePushMenu } from 'react-push-menu';
import { push as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import {
	Accordion,
	Card,
	DropdownButton,
	ButtonGroup,
	Dropdown,
} from 'react-bootstrap';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

import './styles/sidenav.css';

export const Sidenav = (props) => {
	return (
		<>
			<Menu {...props} className="sidebar" burgerButtonClassName="my-class">
				<Link to="/">
					<h1 id="home" className="menu-item-header" href="/">
						Mitt Lesslie Cloud
					</h1>
				</Link>
				<div className="menu-item-container">
					<Accordion defaultActiveKey="0">
						<Card>
							<Accordion.Toggle as={Card.Header} eventKey="0">
								Click me!
							</Accordion.Toggle>
							<Accordion.Collapse eventKey="0">
								<Card.Body>Hello! I'm the body</Card.Body>
							</Accordion.Collapse>
						</Card>
						<Card>
							<Accordion.Toggle as={Card.Header} eventKey="1">
								Click me!
							</Accordion.Toggle>
							<Accordion.Collapse eventKey="1">
								<Card.Body>Hello! I'm another body</Card.Body>
							</Accordion.Collapse>
						</Card>
					</Accordion>
					<Accordion defaultActiveKey="0">
						<Card>
							<Accordion.Toggle as={Card.Header} eventKey="0">
								Click me!
							</Accordion.Toggle>
							<Accordion.Collapse eventKey="0">
								<Card.Body>
									<div className="mb-2">
										{['right'].map((direction) => (
											<>
												<DropdownButton
													style={{ zIndex: 1000 }}
													as={ButtonGroup}
													key={direction}
													id={`dropdown-button-drop-${direction}`}
													drop={direction}
													title="Backkamera"
												>
													<Dropdown.Item eventKey="1">Action</Dropdown.Item>
													<Dropdown.Item eventKey="2">
														Another action
													</Dropdown.Item>
													<Dropdown.Item eventKey="3">
														Something else here
													</Dropdown.Item>
													<Dropdown.Divider />
													<Dropdown.Item eventKey="4">
														Separated link
													</Dropdown.Item>
												</DropdownButton>{' '}
											</>
										))}
									</div>
								</Card.Body>
							</Accordion.Collapse>
						</Card>
						<Card>
							<Accordion.Toggle as={Card.Header} eventKey="1">
								Click me!
							</Accordion.Toggle>
							<Accordion.Collapse eventKey="1">
								<Card.Body>Hello! I'm another body</Card.Body>
							</Accordion.Collapse>
						</Card>
					</Accordion>
					<Link to="guide">
						<button
							type="submit"
							id="contact"
							className="menu-item"
							href="/contact"
						>
							Guider
						</button>
					</Link>
				</div>
			</Menu>{' '}
		</>
	);
};

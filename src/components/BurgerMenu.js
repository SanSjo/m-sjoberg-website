import React from 'react';
import styled from 'styled-components';
import { ReactBurgerMenu } from 'react-burger-menu';

export const BurgerMenu = () => {
	return (
		<BurgerContainer className="logo">
			<Span>
				<Burger1 />
				<Burger2 />
				<Burger3 />
			</Span>
			<Button />
		</BurgerContainer>
	);
};

export default BurgerMenu;

const Span = styled.span`
	background-color: white;
`;
const Burger1 = styled.span`
	position: absolute;
	height: 15%;
	left: 0px;
	right: 0px;
	top: 0%;
	opacity: 1;
	background-color: #373a47;
	width: 100%;

	&:hover {
		opacity: 0.6;
	}
`;

const Burger2 = styled.span`
	position: absolute;
	height: 15%;
	left: 0px;
	right: 0px;
	top: 30%;
	opacity: 1;
	background-color: #373a47;
	width: 100%;

	&:hover {
		opacity: 0.6;
	}
`;

const Burger3 = styled.span`
	position: absolute;
	height: 15%;
	left: 0px;
	right: 0px;
	top: 60%;
	opacity: 1;
	background-color: #373a47;
	width: 100%;

	&:hover {
		opacity: 0.6;
	}
`;

const Button = styled.button`
	left: 0px;
	top: 0px;
	width: 100%;
	margin: 0px;
	padding: 0px;
	border: none;
	font-size: 0px;
	background-color: white;
	cursor: pointer;
	opacity: 1;
	height: 15%;
	border: none;

	&:hover {
		opacity: 0.6;
	}
`;

const BurgerContainer = styled.div`
	position: relative;
	width: 40px;
	height: 30px;
	left: 20px;
	bottom: 0px;
	top: 100px;
	opacity: 1;
	position: relative;
	background-color: white;

	&:hover {
		color: green;
	}
`;

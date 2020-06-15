import React from 'react';
import ControlledCarousel from 'components/ControlledCarousel';
import { Sidenav } from 'components/Sidenav';
import { MainPage } from 'components/MainPage';
import { Header } from '../components/Header';

import Slider from '../components/Slider';
import { HomeCards } from '../components/HomeCards';
import { Footer } from '../components/Footer';
import { Clients } from '../components/Clients';
import { BrandSlider } from '../components/BrandSlider';

export const Home = () => {
	return (
		<div>
			{/* <Sidenav pageWrapId="page-wrap" /> */}
			<MainPage />
		</div>
	);
};

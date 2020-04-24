import React from 'react';
import { Header } from '../components/Header';

import Slider from '../components/Slider';
import { HomeCards } from '../components/HomeCards';
import { Footer } from '../components/Footer';
import { Clients } from '../components/Clients';
import { BrandSlider } from '../components/BrandSlider';

export const Home = () => {
	return (
		<div>
			<Header />
			<Slider />
			<HomeCards title="VÅRA PRODUKTER" />
			<BrandSlider />
			<HomeCards title="VÅRT ARBETE" />
			<Footer />
		</div>
	);
};

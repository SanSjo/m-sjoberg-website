import React from 'react';
import Slider from './Slider';
import { HomeCards } from './HomeCards';
import { BrandSlider } from './BrandSlider';
import { Footer } from './Footer';
import { Header } from './Header';

export const MainPage = () => {
	return (
		<div id="page-wrap">
			<Header />
			<Slider />
			<HomeCards title="VÅRA PRODUKTER" />
		
			<BrandSlider />
			{/* <HomeCards title="VÅRT ARBETE" /> */}
			<Footer />
		</div>
	);
};

import React, { useState, useEffect, useRef } from 'react';
import './styles/slider.css';
import SliderContent from './SliderContent';
import Slide from './Slide';
import Arrow from './Arrow';
import img1 from '../img/img1.jpg';
import img2 from '../img/img2.jpg';
import img3 from '../img/img3.jpg';
import Dots from './Dots';

/**
 * @function Slider
 */

const images = [img1, img2, img3];
const autoPlay = 2;

const Slider = () => {
	const getWidth = () => window.innerWidth;

	const [state, setState] = useState({
		activeIndex: 0,
		translate: 0,
		transition: 0.45
	});

	const { translate, transition, activeIndex } = state;

	const autoPlayRef = useRef();

	const nextSlide = () => {
		if (activeIndex === images.length - 1) {
			return setState({
				...state,
				translate: 0,
				activeIndex: 0
			});
		}

		setState({
			...state,
			activeIndex: activeIndex + 1,
			translate: (activeIndex + 1) * getWidth()
		});
	};

	const prevSlide = () => {
		if (activeIndex === 0) {
			return setState({
				...state,
				translate: (images.length - 1) * getWidth(),
				activeIndex: images.length - 1
			});
		}

		setState({
			...state,
			translate: activeIndex - 1,
			activeIndex: (activeIndex - 1) * getWidth()
		});
	};

	useEffect(() => {
		autoPlayRef.current = nextSlide;
	});

	useEffect(() => {
		const play = () => {
			autoPlayRef.current();
		};
		const interval = setInterval(play, autoPlay * 3000);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="slider">
			<div className="sliderContainer">
				<SliderContent
					translate={translate}
					transition={transition}
					width={getWidth() * images.length}
				>
					{images.map((slide, i) => (
						<Slide key={slide + i} content={slide} />
					))}
				</SliderContent>

				<Arrow direction="left" handleClick={prevSlide} />
				<Arrow direction="right" handleClick={nextSlide} />

				<Dots slides={images} activeIndex={activeIndex} />
			</div>
		</div>
	);
};

export default Slider;

import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import { useGoogleMap, useMap } from './MapHooks';

const API_KEY = 'AIzaSyA8rO8N0dvE7CC-4o80JeN5MRI5vJ9qkyY';

const initialConfig = {
	zoom: 15,
	center: { lat: 59.36567, lng: 17.99964 }
};

// hookを利用して表示するコンポーネント
export const MapContact = () => {
	const googleMap = useGoogleMap(API_KEY);
	const mapContainerRef = useRef(null);
	useMap({ googleMap, mapContainerRef, initialConfig });
	return (
		<div
			style={{
				// ホントはstyled-componentsとかで良いのだけど簡略化
				height: '50vh',
				width: '100%'
			}}
			ref={mapContainerRef}
		/>
	);
};

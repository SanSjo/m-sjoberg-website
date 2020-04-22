import { useEffect, useState } from 'react';
import GoogleMapsApiLoader from 'google-maps-api-loader';

// Google Mapのオブジェクトを呼び出すだけのhooks
export const useGoogleMap = apiKey => {
	const [googleMap, setGoogleMap] = useState(null);
	useEffect(() => {
		GoogleMapsApiLoader({ apiKey }).then(google => {
			setGoogleMap(google);
		});
	}, [apiKey]); // useEffect
	return googleMap;
};

// 実際にMapをDOMにマウントする処理。
export const useMap = ({ googleMap, mapContainerRef, initialConfig }) => {
	const [map, setMap] = useState(null);
	useEffect(() => {
		// googleMapかmapContainerRefが初期化されてなければ何もしない
		if (!googleMap || !mapContainerRef.current) {
			return;
		}
		const maps = new googleMap.maps.Map(mapContainerRef.current, initialConfig);
		setMap(maps);
	}, [googleMap, mapContainerRef, initialConfig]); // initialConfigは変わったとしても再マウントするとおかしなことになるので更新対象にしない // googleMapかmapContainerRefが変化したらeffectが発火する。

	// あとで使えるようにmapを返すようにする
	return map;
};

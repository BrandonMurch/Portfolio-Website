import { useEffect, useState } from "react";

function preloadImage(backgroundSource, onLoad) {
	const backgroundImage = new Image();
	backgroundImage.onload = () => {
		// Store image in window object to encourage some browsers to cache the image, and use it to prevent loading screen
		window[backgroundSource] = backgroundImage;
		onLoad();
	};
	backgroundImage.src = backgroundSource;
}

export function usePreloadImages(backgroundSources) {
	const [unloadedImages, setUnloadedImages] = useState(
		backgroundSources.length
	);

	useEffect(() => {
		for (let backgroundSource of backgroundSources) {
			preloadImage(backgroundSource, () => {
				setUnloadedImages((previousState) => previousState - 1);
			});
		}
	}, [backgroundSources]);

	return unloadedImages <= 0;
}

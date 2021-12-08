import { useState } from "react";

function preloadImage(backgroundSource, onLoad) {
	const backgroundImage = new Image();
	backgroundImage.onload = () => {
		// Store image in window object to encourage some browsers to cache the image, and use it to prevent loading screen
		window[backgroundSource] = backgroundImage;
		onLoad();
	};
	backgroundImage.src = backgroundSource;
}

function usePreloadImage(backgroundSource) {
	const [loaded, setLoaded] = useState(
		window[backgroundSource] !== undefined
	);

	if (!loaded) {
		preloadImage(backgroundSource, () => setLoaded(true));
	}

	return loaded;
}

export function usePreloadImages(backgroundSources) {
	const [unloadedImages, setUnloadedImages] = useState(
		backgroundSources.length
	);

	// Ensure multiple preloads don't occur if react re-renders the component multiple times.
	const [alreadyExecuted, setExecution] = useState(false);

	if (unloadedImages > 0 && !alreadyExecuted) {
		for (let backgroundSource of backgroundSources) {
			if (!window[backgroundSource]) {
				preloadImage(backgroundSource, () => {
					setUnloadedImages((previousState) => previousState - 1);
				});
			} else {
				setUnloadedImages((previousState) => previousState - 1);
			}
		}
		setExecution(true);
	}

	return unloadedImages <= 0;
}

export default usePreloadImage;

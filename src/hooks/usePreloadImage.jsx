import { useState } from 'react';

function preloadImage(backgroundSource, setLoaded) {
    const backgroundImage = new Image();
    backgroundImage.onloadend = () => {
        // Store image in window object to encourage some browsers to cache the image, and use it to prevent loading screen
        window[backgroundSource] = backgroundImage;
        setLoaded(true);
    };
    backgroundImage.src = backgroundSource;
}


function usePreloadImage(backgroundSource) {
    const [loaded, setLoaded] = useState(window[backgroundSource] !== undefined);

    if (!loaded) {
        preloadImage(backgroundSource, setLoaded);
    }

    return loaded;

}

export default usePreloadImage;

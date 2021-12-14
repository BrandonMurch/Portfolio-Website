// Inspired Vitalie Maldur by https://dev.to/vitaliemaldur/resize-event-listener-using-react-hooks-1k0c

import { useState, useEffect } from "react";
import { debounce } from "../helpers";

function useWindowWidth() {
	const [width, setWidth] = useState(window.innerWidth);

	useEffect(() => {
		const setWidthOnResize = () => {
			setWidth(window.innerWidth);
		};

		window.addEventListener("resize", debounce(setWidthOnResize));

		return () => {
			window.removeEventListener("resize", debounce(setWidthOnResize));
		};
	}, []);

	return width;
}

export default useWindowWidth;

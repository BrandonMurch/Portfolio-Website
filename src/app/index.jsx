import React, { useRef } from "react";
import NavBar from "../navbar";
import Home from "../home";
import About from "../about";
import Contact from "../contact";
import Work from "../work";
import { Background1 } from "../backgrounds";
import styles from "./app.module.css";
import { usePreloadImages } from "../hooks/usePreloadImage";
import getPhotoSources from "./imageLinks";
import Loading from "../loading_page";

function App() {
	const backgroundImages = useRef(getPhotoSources());
	const loaded = usePreloadImages(backgroundImages.current);

	if (!loaded) {
		return <Loading />;
	}

	return (
		<div className={styles.appWrapper}>
			<NavBar />
			<Home />
			<About />
			<Background1 />
			<Work />
			<Contact />
		</div>
	);
}

export default App;

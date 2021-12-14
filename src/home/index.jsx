// Libraries
import React from "react";

// CSS
import styles from "./home.module.css";

// Components
import Logo from "./logo";

function AboutMe() {
	const aboutMe = "a software developer living in tasmania.";

	return (
		<>
			<Logo />

			<section className={styles.background}>
				<div className={styles.titleContainer}>
					<h1 className={styles.title}> brandon murch </h1>
					<h2 className={styles.subtitle}> {aboutMe} </h2>
				</div>
			</section>
		</>
	);
}

export default AboutMe;

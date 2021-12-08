import React from "react";
import styles from "./about.module.css";

function About() {
	return (
		<section className={styles.background} id="about">
			<h1 className={styles.title}>About Me</h1>
			<p className={styles.body}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Necessitatibus sunt totam eveniet distinctio exercitationem sit
				voluptatum aperiam quia harum cupiditate autem earum voluptate
				ipsam, tenetur minima eaque. Qui, magnam accusantium.
			</p>
		</section>
	);
}

export default About;

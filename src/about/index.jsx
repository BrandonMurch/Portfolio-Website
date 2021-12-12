import React from "react";
import styles from "./about.module.css";
import BoundarySVG from "../boundaries/boundary1";

function About() {
	return (
		<section className={styles.about} id="about">
			<BoundarySVG />
			<div className={styles.background}></div>
			<h1 className={styles.title}>About Me</h1>
			<p className={styles.body}>
				From a chef, serving up delicacies all over the world, to a web
				developer cooking up some sweet websites and solutions for your
				business. Currently working towards my Bachelor of Computer
				Science at Deakin Univeristy. Spending my spare time soaking up
				all the new coding techniques and algorithms that I can.
			</p>
		</section>
	);
}

export default About;

import React from "react";
import styles from "./about.module.css";
import BoundarySVG from "../boundaries/boundary1";

function About() {
	return (
		<section className={styles.about} id="about">
			<BoundarySVG />
			<div className={styles.background}></div>
			{/* <h1 className={styles.title}>About Me</h1> */}
			<p className={styles.body}>
				From a chef, cooking delicacies in high-end restaurants all over
				the world, to then becoming a <b>software developer</b> serving
				up websites and software solutions. I am able to bring my
				creativity and logical thinking to{" "}
				<b>solve problems to help make lives easier</b>.
				<br />
				<br />
				Currently I am working towards a{" "}
				<b>Bachelor of Computer Science</b> at <b>Deakin University</b>{" "}
				with specialisations in <b>embedded systems</b> and{" "}
				<b>full-stack web and mobile development</b>. My spare time is
				consumed by researching new techniques, algorithms and tools to
				create better solutions.
			</p>
		</section>
	);
}

export default About;

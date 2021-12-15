import React from "react";
import styles from "./work.module.css";
import Portfolio from "../images/portfolio.webp";
import Quote from "../images/QuoteGenerator.webp";
import SimonSays from "../images/Simon Says.webp";
import tend from "../images/tend.webp";
import { LinkButton } from "../button";
import Boundary from "../boundaries/boundary2";
import Slider from "../slider";
import useWindowWidth from "../hooks/useWindowWidth";

function ProjectBox(props) {
	return (
		<div className={styles.card}>
			<img className={styles.image} src={props.image} alt={props.name} />
			<div className={styles.descriptionContainer}>
				<h2 className={styles.projectName}>{props.name}</h2>
				<p className={styles.description}>{props.description}</p>
				<p className={styles.skills}>Skills: {props.techStack}</p>
				<LinkButton
					className={styles.button}
					link={props.code}
					dark={true}
				>
					code
				</LinkButton>
				<LinkButton
					className={styles.button}
					link={props.demo}
					dark={true}
				>
					demo
				</LinkButton>
			</div>
		</div>
	);
}

function Projects() {
	const width = useWindowWidth();

	return (
		<>
			<section className={styles.work} id="work">
				<Boundary />
				<h1 className={styles.title}>Here is some of my past work:</h1>
				{width < 700 ? (
					<Slider width={75} widthUnit="vw">
						{getBoxes()}
					</Slider>
				) : (
					getBoxes()
				)}
			</section>
		</>
	);
}

function getBoxes() {
	var boxes = [
		<ProjectBox
			key="1"
			image={tend}
			name="tend"
			description="A social media website for plant enthusiasts. Keep track of care schedules, learn about plants, and connect with other like-minded individuals."
			techStack="Vuejs, vuerouter, vuex"
			code="https://github.com/BrandonMurch/tend"
			demo="https://tend.brandonmurch.com"
		/>,
		<ProjectBox
			key="2"
			image={Portfolio}
			name="This Portfolio Website"
			description="A website to display my work and provide a little information about me."
			techStack="React, CSS Modules"
			code="https://github.com/BrandonMurch/Portfolio-Website"
			demo="https://www.brandonmurch.com"
		/>,
		<ProjectBox
			key="5"
			image={SimonSays}
			name="Simon Says"
			description="A virtual game of simon says, complete with hard mode! Replay the classic 1970's memory game. Listen to the series of button presses, then repeat them."
			techStack="Javascript, HTML, CSS "
			code="https://github.com/BrandonMurch/Simon-Game"
			demo="https://codepen.io/BrandonMurch/full/YaErGR/"
		/>,
		<ProjectBox
			key="4"
			image={Quote}
			name="Quote Generator"
			description="A random quote generator that provides a random quote everytime the page is visited or one is requested. Quotes can easily be shared on twitter."
			techStack="JQuery, CSS, HTML, Third Party API"
			code="https://github.com/BrandonMurch/Quote-Generator"
			demo="https://codepen.io/BrandonMurch/full/vRBZVY/"
		/>,
	];

	return boxes;
}

export default Projects;

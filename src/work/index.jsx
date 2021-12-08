import React from "react";
import styles from "./work.module.css";
import Calculator from "../images/Javascript Calculator.jpg";
import Quote from "../images/QuoteGenerator.jpg";
import SimonSays from "../images/Simon Says.jpg";
import tend from "../images/tend.jpg";
import { LinkButton } from "../button";

function ProjectBox(props) {
	return (
		<div className={styles.card}>
			<img className={styles.image} src={props.image} alt={props.name} />
			<div className={styles.descriptionContainer}>
				<h2 className={styles.projectName}>{props.name}</h2>
				<p className={styles.description}>{props.description}</p>
				<LinkButton className={styles.button} link={props.code}>
					code
				</LinkButton>
				<LinkButton className={styles.button} link={props.demo}>
					demo
				</LinkButton>
			</div>
		</div>
	);
}

function Projects() {
	return (
		<>
			<section className={styles.work} id="work">
				<h1 className={styles.title}>Work</h1>
				<div className={styles.cardContainer}>{getBoxes()}</div>
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
			description="A social media website for plant enthusiasts"
			code="https://github.com/BrandonMurch/tend"
			demo="https://tend.brandonmurch.com"
		/>,
		<ProjectBox
			key="2"
			image={Calculator}
			name="Javascript Calculator"
			description="A basic calculator web app"
			code="https://github.com/BrandonMurch/Javascript-Calculator"
			demo="https://www.brandonmurch.com/Javascript-Calculator"
		/>,
		<ProjectBox
			key="4"
			image={Quote}
			name="Quote Generator"
			description="A random quote generator"
			code="https://github.com/BrandonMurch/Quote-Generator"
			demo="https://codepen.io/BrandonMurch/full/vRBZVY/"
		/>,
		<ProjectBox
			key="5"
			image={SimonSays}
			name="Simon Says"
			description="A virtual game of simon says, complete with hard mode!"
			code="https://github.com/BrandonMurch/Simon-Game"
			demo="https://codepen.io/BrandonMurch/full/YaErGR/"
		/>,
	];

	return boxes;
}

export default Projects;

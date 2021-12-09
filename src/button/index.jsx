import React from "react";
import styles from "./button.module.css";

function AppButton(props) {
	return (
		<button className={styles.button} onClick={props.onClick}>
			{props.children}
		</button>
	);
}

export function LinkButton(props) {
	const selectedStyle = props.dark
		? styles.darkLinkButton
		: styles.linkButton;

	return (
		<a
			className={selectedStyle + " " + props.className}
			href={props.link}
			target="_blank"
			rel="noopener noreferrer"
		>
			{props.children}
		</a>
	);
}

export default AppButton;

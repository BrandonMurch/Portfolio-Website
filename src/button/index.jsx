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
	return (
		<a
			className={styles.linkButton + " " + props.className}
			href={props.link}
		>
			{props.children}
		</a>
	);
}

export default AppButton;

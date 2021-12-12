import React from "react";
import styles from "./boundary.module.css";

function BoundarySVG(props) {
	return (
		<svg
			className={props.className}
			viewBox="0 479 900 122"
			xmlns="http://www.w3.org/2000/svg"
			version="1.1"
		>
			<path d="M0 553L75 557.5C150 562 300 571 450 559.8C600 548.7 750 517.3 825 501.7L900 486L900 601L825 601C750 601 600 601 450 601C300 601 150 601 75 601L0 601Z"></path>
		</svg>
	);
}

function Boundary(props) {
	return (
		<>
			<BoundarySVG className={styles.topBoundary} />
			<BoundarySVG className={styles.bottomBoundary} />
		</>
	);
}
export default Boundary;

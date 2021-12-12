import React from "react";
import styles from "./boundary.module.css";

function BoundarySVG(props) {
	return (
		<svg
			className={props.className}
			viewBox="0 500 900 100"
			xmlns="http://www.w3.org/2000/svg"
			version="1.1"
		>
			<path d="M0 534L50 530.8C100 527.7 200 521.3 300 531.8C400 542.3 500 569.7 600 573.8C700 578 800 559 850 549.5L900 540L900 601L850 601C800 601 700 601 600 601C500 601 400 601 300 601C200 601 100 601 50 601L0 601Z"></path>
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

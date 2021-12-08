import React from "react";
import styles from "./icons.module.css";

function NavBarIcon(props) {
    if (props.isOpen) {
        return (
            <div>
                <svg
                    className={styles.icon}
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    width="5rem"
                    height="5rem"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 1024 1024"
                >
                    <path
                        d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504L738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512L828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496L285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512L195.2 285.696a64 64 0 0 1 0-90.496z"/>
                </svg>
            </div>
        );
    }


	return (
		<div>
			<svg
				className={styles.icon}
				xmlns="http://www.w3.org/2000/svg"
				aria-hidden="true"
				role="img"
				width="5rem"
				height="5rem"
				preserveAspectRatio="xMidYMid meet"
				viewBox="0 0 24 24"
			>
                <path
                    d="M21 18h-9v-2h9v2zm0-5H3v-2h18v2zm0-5H3V6h18v2z"
                />
			</svg>
		</div>
	);
}

export default NavBarIcon;

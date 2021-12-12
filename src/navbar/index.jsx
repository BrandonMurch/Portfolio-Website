import React, { useState } from "react";
import styles from "./navbar.module.css";
import SocialIcons from "../icons";
import NavBarIcon from "../icons/navbar_icon";

function NavBar() {
	const [isOpen, setIsOpen] = useState(false);

	function getLinkComponents(pages) {
		return pages.map((page) => {
			return (
				<li key={page.index} className={styles.item}>
					<a
						className={styles.link}
						href={page.location}
						onClick={() => {
							setIsOpen(false);
						}}
					>
						{page.name}
					</a>
				</li>
			);
		});
	}

	return (
		<section className={styles.navbar}>
			<div
				className={styles.navbarToggle}
				onClick={() => setIsOpen((previousState) => !previousState)}
			>
				<NavBarIcon isOpen={isOpen} />
			</div>
			<ul className={styles.list + " " + (isOpen ? styles.open : "")}>
				{getLinkComponents(getPages())}
				<li className={styles.socialsContainer}>
					<SocialIcons />
				</li>
			</ul>
		</section>
	);
}

function getPages() {
	return [
		{
			name: "Home",
			location: "/#",
			index: 3,
		},
		{
			name: "About",
			location: "#about",
			index: 2,
		},
		{
			name: "Work",
			location: "#work",
			index: 1,
		},
		{
			name: "Contact",
			location: "#contact",
			index: 0,
		},
	];
}

export default NavBar;

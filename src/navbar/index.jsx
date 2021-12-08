import React, { useState } from "react";
import styles from "./navbar.module.css";
import SocialIcons from "../icons";
import NavBarIcon from "../icons/navbar_icon";

function NavBar() {
	const [isOpen, setIsOpen] = useState(false);

	function getLinkComponents(argPages) {
		const pages = window.innerWidth < 1200 ? argPages.reverse() : argPages;
		return pages.map((page) => {
			return (
				<li key={page.index} className={styles.item}>
					<a className={styles.link} href={page.location}>
						{page.name}
					</a>
				</li>
			);
		});
	}

	function GetOrderedNavigationItems() {
		if (window.innerWidth < 1200) {
			return (
				<>
					{getLinkComponents(getPages())}
					<div className={styles.socialsContainer}>
						<SocialIcons />
					</div>
				</>
			);
		}
		return (
			<>
				<div className={styles.socialsContainer}>
					<SocialIcons />
				</div>{" "}
				{getLinkComponents(getPages())}
			</>
		);
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
				<GetOrderedNavigationItems />
			</ul>
		</section>
	);
}

function getPages() {
	return [
		{
			name: "Contact",
			location: "#contact",
			index: 0,
		},
		{
			name: "Projects",
			location: "#projects",
			index: 1,
		},
		{
			name: "About",
			location: "#about",
			index: 2,
		},
		{
			name: "Home",
			location: "/#",
			index: 3,
		},
	];
}

export default NavBar;

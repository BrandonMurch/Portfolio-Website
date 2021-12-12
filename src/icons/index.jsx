import React from "react";
import GithubLogo from "./github_icon";
import LinkedInLogo from "./linkedin_icon";
import ChangeTheme from "./theme_icon";
import styles from "./icons.module.css";

function SocialLinks() {
	return (
		<div className={styles.container}>
			{getSocials().map((social) => {
				const Display = social.logo;
				return (
					<div key={social.index}>
						<a href={social.location}>
							<Display />
						</a>
					</div>
				);
			})}

			<div key={100}>
				<ChangeTheme />
			</div>
		</div>
	);
}

function getSocials() {
	var socials = [
		{
			name: "Github",
			logo: GithubLogo,
			location: "https://www.github.com/BrandonMurch",
			index: 0,
		},
		{
			name: "LinkedIn",
			logo: LinkedInLogo,
			location: "https://www.linkedin.com/in/brandonmurch/",
			index: 1,
		},
	];
	return socials;
}

export default SocialLinks;

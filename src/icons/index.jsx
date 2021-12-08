import React from 'react';
import GithubLogo from './github_icon';
import LinkedInLogo from './linkedin_icon';
import styles from './icons.module.css';



function SocialLinks() {
        return getSocials().map(social => {
            const Display = social.logo;
            return (
                <li key={social.index} className={styles.item}>
                    <a href={social.location}>
                        <Display />
                    </a>
                </li>
            )
        });
    }

function getSocials() {
    var socials = [{
            name: "Github",
            logo: GithubLogo,
            location: "https://www.github.com/BrandonMurch",
            index: 0,
        },{
            name: "LinkedIn",
            logo: LinkedInLogo,
            location: "https://www.linkedin.com/in/brandonmurch/",
            index: 1,
        }
    ];
    return socials;
}

export default SocialLinks;
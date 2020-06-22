import React from 'react';
import {Link} from 'react-router-dom';
import styles from './navbar.module.css';

//media
import GithugLogo from './logos/Github_Logo.png';
import LinkedInLogo from './logos/Linkedin_Logo.png';


class NavBar extends React.Component {
    getLinks(pages, onLeft) {
        const items = pages.map(page => {
            const props = page.props;
            const display = props.logo ? <img className={styles.image} src={props.logo} alt={props.name}/> : props.name;
            return (
                <li key={props.index} className={styles.item}>
                    <Link className={styles.link} to={props.location}>
                        {display}
                    </Link>
                </li>
            )
        });
        const navBarSide = onLeft ? styles.leftSide : styles.rightSide
        return <div className={navBarSide}>{items}</div>
    }

    render() {
        const pages = getPages();
        const social = getSocials();

        return (
            <div className={styles.navbar}>
                <ul className={styles.list}>
                    {this.getLinks(pages,true)}
                    {this.getLinks(social, false)}
                </ul>
            </div>
        )
    }
}

class NavBarItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            logo: props.logo,
            location: props.location,
            index: props.index,
        }
    }
}

function getPages() {
    var pages = [];
    pages.push(
        <NavBarItem
            name={"About Me"}
            logo={null}
            location={"/about-me"}
            index={0}
        />
    );
    pages.push(
        <NavBarItem
            name={"Projects"}
            logo={null}
            location={"/projects"}
            index={1}
        />
    );
    pages.push(
        <NavBarItem
            name={"Experience"}
            logo={null}
            location={"/experience"}
            index={2}
        />
    );
    pages.push(
        <NavBarItem
            name={"Contact"}
            logo={null}
            location={"/contact"}
            index={3}
        />
    );
    return pages;
}

function getSocials() {
    var socials = [];
    socials.push(
        <NavBarItem
            name={"Github"}
            logo={GithugLogo}
            location={"https://www.github.com/BrandonMurch"}
            index={0}
        />
    );
    socials.push(
        <NavBarItem
            name={"LinkedIn"}
            logo={LinkedInLogo}
            location={"https://www.linkedin.com/in/brandonmurch/"}
            index={1}
        />
    );
return socials;
}

export default NavBar;

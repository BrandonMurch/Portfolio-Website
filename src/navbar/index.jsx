import React from 'react';
import { Link } from 'react-router-dom';
import styles from './navbar.module.css';
import { withRouter } from 'react-router';

//media
import GithubLogo from '../icons/github_icon';
import LinkedInLogo from '../icons/linkedin_icon';


class NavBar extends React.Component {


    getInternalLinks(pages) {
        const items = pages.map(page => {
            const props = page.props;
            const display = props.logo ? <img className={styles.image} src={props.logo} alt={props.name} /> : props.name;
            return (
                <li key={props.index} className={styles.item}>
                    <Link className={styles.link} to={props.location}>
                        {display}
                    </Link>
                </li>
            )
        });
        return <div className={styles.leftSide}>{items}</div>
    }

    getExternalLinks(pages) {
        const items = pages.map(page => {
            const props = page.props;
            const Display = props.logo;
            // const display = props.logo ? <img className={styles.image} src={props.logo} alt={props.name} /> : props.name;
            return (
                <li key={props.index} className={styles.item}>
                    <a className={styles.link} href={props.location}>
                        <Display />
                    </a>
                </li>
            )
        });
        return <div className={styles.rightSide}>{items}</div>
    }

    render() {
        const { location } = this.props;

        const pages = getPages();
        const social = getSocials();

        return (
            <section className={styles.navbar}>
                <ul className={styles.list}>
                    {this.getInternalLinks(pages)}
                    {this.getExternalLinks(social)}
                </ul>
            </section>
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
            name={"Home"}
            logo={null}
            location={"/"}
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
            name={"Contact"}
            logo={null}
            location={"/contact"}
            index={2}
        />
    );
    return pages;
}

function getSocials() {
    var socials = [];
    socials.push(
        <NavBarItem
            name={"Github"}
            logo={GithubLogo}
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

export default withRouter(NavBar);

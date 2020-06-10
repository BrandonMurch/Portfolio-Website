import React from 'react';
import './navbar.css';
import GithugLogo from './logos/Github_Logo.png';
import LinkedInLogo from './logos/Linkedin_Logo.png';


class NavBar extends React.Component {
    getLinks(pages, onLeft) {
        const items = pages.map(page => {
            const props = page.props;
            const display = props.logo ? <img className="navbar-image" src={props.logo} alt={props.name}/> : props.name;
            return (
                <li key={props.index} className="navbar-item">
                    <a className="text navbar-link" href={props.location}>
                        {display}
                    </a>
                </li>
            )
        });
        const navBarSide = onLeft ? "navbar-left" : "navbar-right"
        return <div className={"navbar-group " + navBarSide}>{items}</div>
    }

    render() {
        const pages = getPages();
        const social = getSocials();

        return (
            <ul className="navbar">
                {this.getLinks(pages,true)}
                {this.getLinks(social, false)}
            </ul>
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
            location={"#about-me"}
            index={0}
        />
    );
    pages.push(
        <NavBarItem
            name={"Projects"}
            logo={null}
            location={"#projects"}
            index={1}
        />
    );
    pages.push(
        <NavBarItem
            name={"Relevant Courses"}
            logo={null}
            location={"#courses"}
            index={2}
        />
    );
    pages.push(
        <NavBarItem
            name={"Contact"}
            logo={null}
            location={"#contact"}
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

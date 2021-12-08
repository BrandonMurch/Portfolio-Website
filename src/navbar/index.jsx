import React from 'react';
import styles from './navbar.module.css';
import SocialIcons from '../icons';


function NavBar() {
    function getLinkComponents(pages) {
        return pages.map(page => {
            return (
                <li key={page.index} className={styles.item}>
                    <a className={styles.link} href={page.location}>
                        {page.name}
                    </a>
                </li>
            )
        });
    }

    return (
        <section className={styles.navbar}>
            <ul className={styles.list}>
                    <SocialIcons />
                    {getLinkComponents(getPages())}
            </ul>
        </section>
    )
}


function getPages() {
    return [{ 
        name: "Contact",
        location: "#contact",
        index: 0,
    },{
        name:"Projects",
        location: "#projects",
        index: 1,
    },{
        name:"About",
        location: "#about",
        index: 2,
    },{
        name: "Home",
        location: "/#",
        index: 3,
    }];
}

export default NavBar;

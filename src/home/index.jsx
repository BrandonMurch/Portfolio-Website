// Libraries
import React from 'react';

// CSS
import styles from './home.module.css';

// Components
import Logo from './logo'
import SocialLinks from '../icons';

function AboutMe() {
    const aboutMe = "a software developer living in tasmania.";


    return (
        <>
        <Logo />
        <SocialLinks />

        <section  className={styles.background}>
            <div className={styles.titleContainer}>
                <h1 className={styles.title}> brandon murch </h1>
                <h3 className={styles.subtitle}> {aboutMe} </h3>
            </div>
        </section>
        </>
    )

}


export default AboutMe;

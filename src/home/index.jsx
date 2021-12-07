// Libraries
import React from 'react';

// CSS
import styles from './home.module.css';

// Components
import Loading from '../loading_page';
import usePreloadImage from '../hooks/usePreloadImage';

function AboutMe() {
    const aboutMe = "a software developer living in tasmania.";

    const backgroundSource = window.innerHeight > window.innerWidth ? "../images/Personal_Photo_cropped.jpg" : "../images/Personal_Photo_gradient.jpg"

    return (
        <>

        <section  className={styles.background}>
            <div className={styles.container}>
                <h1 className={styles.title}> brandon murch </h1>
                <h3 className={styles.subtitle}> {aboutMe} </h3>
            </div>
        </section>
        </>
    )

}


export default AboutMe;

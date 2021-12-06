// Libraries
import React from 'react';

// CSS
import styles from './about_me.module.css';

// Components
import Loading from './loading_page';
import usePreloadImage from './usePreloadImage';




function AboutMe() {
    const aboutMe = "a software developer living in tasmania.";

    const backgroundSource = window.innerHeight > window.innerWidth ? "images/Personal_Photo_cropped.jpg" : "images/Personal_Photo_gradient.jpg"
    const loaded = usePreloadImage(backgroundSource);

    return (
        <>
        <div hidden={loaded}>
            <Loading/>
        </div>

        <section hidden={!loaded} className={styles.background} style={{ backgroundImage:'url(' + backgroundSource + ')'}}>
            <div className={styles.container}>
                <h1 className={styles.title}> brandon murch </h1>
                <h3 className={styles.subtitle}> {aboutMe} </h3>
            </div>
        </section>
        </>
    )

}


export default AboutMe;

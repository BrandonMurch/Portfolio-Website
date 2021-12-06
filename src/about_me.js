// Libraries
import React, { useState } from 'react';

// CSS
import styles from './about_me.module.css';

// Components
import Loading from './loading_page';


function preloadImage(backgroundSource, setLoaded){
    const backgroundImage = new Image();
    backgroundImage.onloadend = () => {
        // Store image in window object to encourage some browsers to cache the image, and use it to prevent loading screen
        window[backgroundSource] = backgroundImage;
        setLoaded(true);
    };
    backgroundImage.src = backgroundSource;
}

function AboutMe() {
    const backgroundSource = window.innerHeight > window.innerWidth ? "images/Personal_Photo_cropped.jpg" : "images/Personal_Photo_gradient.jpg"
    const [loaded, setLoaded] = useState(window[backgroundSource] !== undefined);
    const aboutMe = "a software developer living in tasmania.";
    
    if (!loaded) {
        preloadImage(backgroundSource, setLoaded);
    }



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

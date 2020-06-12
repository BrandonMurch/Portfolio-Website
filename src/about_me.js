// Libraries
import React from 'react';

// CSS
import styles from './about_me.module.css';

class AboutMe extends React.Component {
    render() {
        // TODO add a more detailed intro
        const aboutMe = "a software developer living in tasmania.";
        const background = this.props.state.orientation === "landscape" ? styles.landscapeBackground : styles.portraitBackground;
        return (
            <section id="aboutme" className={background}>
                    <div className={styles.container}>
                        <h1 className={styles.title}> brandon murch </h1>
                        <h3 className={styles.subtitle}> {aboutMe} </h3>
                    </div>
            </section>
        )
    }
}

export default AboutMe;

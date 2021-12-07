import React from 'react';
import styles from './about.module.css';


function About() {
    return (
        <div className={styles.background}>
            <h1 className={styles.title}>About Me</h1>
            <p className={styles.body}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id voluptates eaque odit beatae officiis, dolores odio aperiam illo doloremque ea recusandae? Explicabo iste, sapiente quis quasi eius reiciendis dolores voluptas.
            </p>


        </div>
    )
}

export default About;
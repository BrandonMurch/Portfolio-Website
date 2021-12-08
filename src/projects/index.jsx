import React, {useState} from 'react';
import styles from './projects.module.css';
import Calculator from '../images/Javascript Calculator.jpg';
import Pomodoro from '../images/Pomodoro Clock.jpg';
import Quote from '../images/QuoteGenerator.jpg';
import SimonSays from '../images/Simon Says.jpg';
import tend from '../images/tend.jpg';

function ProjectBox(props) {

    const [hover, setHover] = useState(false);

    function toggleHover() {
        setHover((previousState) => !previousState);
    }

    function noHover() {
        setHover(false);
    }

    function clickLink() {
        if (hover) {
            window.location.href = props.link;
        } else {
            toggleHover();
        }

    }
    var descriptionContainerStyle;
    if (hover) {
        descriptionContainerStyle = styles.descriptionContainerHover;
    } else {
        descriptionContainerStyle = styles.descriptionContainer;
    }


    return (
        <div className={styles.container}
            onMouseEnter={toggleHover}
            onMouseLeave={noHover}
            onClick={clickLink}
        >
            <img
                className={styles.image}
                src={props.image} alt={props.imageDescription} />
            <div className={descriptionContainerStyle}>
                <p className={styles.description}>
                    {props.description}
                </p>
            </div>
        </div>
    )
}

function Projects() {

    return (
        <>
        <section className={styles.projects} id="projects">
            <div className={styles.boxesContainer}>
                {getBoxes()}
            </div>
        </section>
        </>
    )
}

function getBoxes() {
    var boxes = [];
        boxes.push(<ProjectBox
        key="1"
        image={tend}
        imageDescription="tend"
        description="A social media website for plant enthusiasts"
        link="https://tend.brandonmurch.com"
    />);
    boxes.push(<ProjectBox
        key="2"
        image={Calculator}
        imageDescription="Javascript Calculator"
        description="A basic calculator web app"
        link="https://www.brandonmurch.com/Javascript-Calculator"
    />);
    boxes.push(<ProjectBox
        key="3"
        image={Pomodoro}
        imageDescription="Pomodoro Clock"
        description="A timer to improve your productivity"
        link="https://codepen.io/BrandonMurch/full/RMZLab"
    />);
    boxes.push(<ProjectBox
        key="4"
        image={Quote}
        imageDescription="Quote Generator"
        description="A random quote generator"
        link="https://codepen.io/BrandonMurch/full/vRBZVY/"
    />);
    boxes.push(<ProjectBox
        key="5"
        image={SimonSays}
        imageDescription="Simon Says"
        description="A virtual game of simon says, complete with hard mode!"
        link="https://codepen.io/BrandonMurch/full/YaErGR/"
    />);

    return boxes;
}

export default Projects;

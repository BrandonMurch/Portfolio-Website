import React from 'react';
import styles from './projects.module.css';
import Calculator from './images/Javascript Calculator.png'
import Pomodoro from './images/Pomodoro Clock.png'
import Quote from './images/QuoteGenerator.png'
import SimonSays from './images/Simon Says.png'
import tend from './images/tend.png'

class ProjectBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: false,
        }
        this.toggleHover = this.toggleHover.bind(this);
        this.noHover = this.noHover.bind(this);
        this.clickLink = this.clickLink.bind(this);
    }

    toggleHover() {
        this.setState({
            hover: !this.state.hover,
        })
    }

    noHover() {
        this.setState({
            hover: false,
        })
    }

    clickLink() {
        if (this.state.hover) {
            window.location.href = this.props.link;
        } else {
            this.setState({
                hover: !this.state.hover,
            })
        }

    }
    render() {
        var descriptionContainer;
        if (this.state.hover) {
            descriptionContainer = styles.descriptionContainerHover;
        } else {
            descriptionContainer = styles.descriptionContainer;
        }


        return (
            <div className={styles.container}
                onMouseEnter={this.toggleHover}
                onMouseLeave={this.noHover}
                onClick={this.clickLink}
            >
                <img
                    className={styles.image}
                    src={this.props.image} alt={this.props.imageDescription} />
                <div className={descriptionContainer}>
                    <p className={styles.description}>
                        {this.props.description}
                    </p>
                </div>
            </div>
        )
    }
}

class Projects extends React.Component {
    render() {
        return (
            <section className={styles.projects}>
                <div className={styles.boxesContainer}>
                    {getBoxes()}
                </div>
            </section>
        )
    }
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

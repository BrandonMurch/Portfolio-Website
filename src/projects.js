import React from 'react';
import styles from './projects.module.css';
import placeholder from './images/placeholder-square.jpeg'

class ProjectBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: false,
        }
        this.toggleHover = this.toggleHover.bind(this);
        this.noHover = this.noHover.bind(this);


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
            onClick={this.toggleHover}
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
        image={placeholder}
        imageDescription="This is a placeholder image"
        description="A placeholder app"
    />);
    boxes.push(<ProjectBox
        key="2"
        image={placeholder}
        imageDescription="This is a placeholder image"
        description="A placeholder app"
    />);
    boxes.push(<ProjectBox
        key="3"
        image={placeholder}
        imageDescription="This is a placeholder image"
        description="A placeholder app"
    />);
    boxes.push(<ProjectBox
        key="4"
        image={placeholder}
        imageDescription="This is a placeholder image"
        description="A placeholder app"
    />);
    boxes.push(<ProjectBox
        key="4"
        image={placeholder}
        imageDescription="This is a placeholder image"
        description="A placeholder app"
    />);
    boxes.push(<ProjectBox
        key="4"
        image={placeholder}
        imageDescription="This is a placeholder image"
        description="A placeholder app"
    />);

    return boxes;
}

export default Projects;

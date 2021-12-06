import React from 'react';
import styles from './experience.module.css';

class Experience extends React.Component {
    render() {
        const items = getItems();

        return (
            <section className={styles.experience}>
                <div className={styles.container}>
                    {items}
                </div>
            </section>
        )
    }
}

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hidden: true,
        }
    }

    modifyDisplay() {
        this.setState({hidden: !this.state.hidden});
    }

    render() {
        const descriptionContainer = this.state.hidden ? styles.descriptionContainerHidden : styles.descriptionContainer;
        const description = this.state.hidden ? styles.descriptionHidden : styles.description;

        return (
            <div className={styles.itemContainer}
            onClick={() => this.modifyDisplay()}>
                <div className={styles.titleContainer}>
                    <p className={styles.title}>
                        {this.props.title}
                    </p>
                </div>
                <div className={descriptionContainer}>
                    <p className={description}>
                        {this.props.description}
                    </p>
                </div>
            </div>
        )

    }
}

function Line() {
    return (
        <hr className={styles.line} />
    )
}

function getItems() {
    var items = [];
    var count = 0;
    items.push(<Line key={count++} />);
    items.push(
        <Item
        key="Data Structures"
        title="PennsylvaniaX - Data Structures and Software Design"
        description ="Understanding and identifying ideal data structures, and techniques for creating quality software" />
    );
    items.push(<Line key={count++} />);
    items.push(
        <Item
        key="Rest"
        title="Udemy - Master Java Web Services"
        description ="Creating both SOAP and RESTful web services using the Spring Framework" />
    );
    items.push(<Line key={count++} />);
    items.push(
        <Item
        key="Fundamentals"
        title="PennsylvaniaX - Software Development Fundamentals"
        description ="Understanding Java and object oriented programming" />

    );
    items.push(<Line key={count++} />);
    items.push(
        <Item
        key="CS50"
        title="HarvardX - CS50"
        description ="Creating web applications using Javascript, HTML, CSS" />
    );
    items.push(<Line key={count++} />);
    items.push(
        <Item
        key="FCC"
        title="FreeCodeCamp - Frontend certificate"
        description ="Touching on C, SQL, Python, JavaScript, HTML and CSS" />
    );
    items.push(<Line key={count++} />);

    return items;
}

export default Experience;

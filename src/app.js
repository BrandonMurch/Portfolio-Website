import React from 'react';
import styles from './app.module.css';
import NavBar from './navbar';
import AboutMe from './about_me';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            orientation: "landscape",
            size: "large",
        };
        this.updateResize = this.updateResize.bind(this);
    }


    componentDidMount() {
        this.updateResize();
        window.addEventListener("resize", this.updateResize);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateResize);
    }

    updateResize() {
        console.log("resized");
        this.setState({
            orientation: getOrientation(),
            size: getSize(),
        })
        console.log(this.state.orientation);
        console.log(this.state.size);
    }

    render() {
        return (
            <div className={styles.app}>
                <NavBar />
                <AboutMe state={this.state}/>
            </div>
        )
    }
}


function getOrientation() {
    if (window.innerHeight > window.innerWidth) {
        return "portrait";
    } else {
        return "landscape";
    }
}

function getSize() {
    const width = window.innerWidth;
    if (width > 1280) {
        return "large";
    } else if (width > 600) {
        return " medium";
    } else {
        return "small";
    }
}

export default App;

import React from 'react';
import NavBar from '../navbar';
import Home from '../home';
import About from '../about';
import Contact from '../contact';
import Projects from '../projects';
import {Background1} from '../backgrounds';

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
        this.setState({
            orientation: getOrientation(),
            size: getSize(),
        })
    }

    render() {
        return (
            <>
                <NavBar />
                <Home />
                <About />
                <Background1 />
                <Projects />
                {/* <Background2 /> */}
                <Contact />
            </>
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

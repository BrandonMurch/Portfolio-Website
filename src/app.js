import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styles from './app.module.css';
import NavBar from './navbar';
import About from './about_me';
import Contact from './contact';
import Projects from './projects';
import Experience from './experience';

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
            <BrowserRouter>
                <div className={styles.app}>
                    <NavBar />
                    <Switch>
                        <Route path="/contact">
                            <Contact state={this.state} />
                        </Route>
                        <Route path="/projects">
                            <Projects state={this.state} />
                        </Route>
                        <Route path="/experience">
                            <Experience state={this.state} />
                        </Route>
                        <Route path = "/">
                            <About state={this.state} />
                        </Route>
                    </Switch>
                </div>
            </BrowserRouter>

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

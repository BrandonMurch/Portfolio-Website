import React from 'react';
import './app.css';
import NavBar from './navbar';
import AboutMe from './about_me';
import Contact from './contact';

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <NavBar />
                <AboutMe />
            </div>
        )
    }
}

export default App;

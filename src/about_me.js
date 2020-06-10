import React from 'react';
import './about_me.css';

class AboutMe extends React.Component {
    render() {
        // TODO add a more detailed intro
        const aboutMe = "a software developer living in tasmania.";
        return (
            <section id="aboutme">
                    <div className="aboutme-box">
                        <h1 className="text aboutme-title"> brandon murch </h1>
                        <h3 className="text aboutme-text"> {aboutMe} </h3>
                    </div>
            </section>
        )
    }
}

export default AboutMe;

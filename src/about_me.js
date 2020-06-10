import React from 'react';
import './about_me.css';
import PersonalPhoto from './images/Personal_Photo.jpg';


class AboutMe extends React.Component {

    render() {
        const aboutMe = "a software developer living in tasmania.";
        return (
            <section id="aboutme">
                    <div className="aboutme-box">
                        <h1 className="aboutme-title"> brandon murch </h1>
                        <h3 className="aboutme-text"> {aboutMe} </h3>
                    </div>
                    <img className="aboutme-image" src={PersonalPhoto} alt="Brandon Murch"/>
            </section>
        )
    }
}

export default AboutMe;

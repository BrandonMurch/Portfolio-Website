import React from 'react';
import './contact.css';

class Contact extends React.Component {
    render() {
        return (
            <form className="contact-form">
                <div className="contact-group">
                    <label className="text" for="name">Name</label><br />
                    <input className="contact-text-input" type="text" id="name"></input>
                </div>
                <div className="contact-group">
                    <label className="text" for="email">Email</label><br />
                    <input className="contact-text-input"  type="email" id="email"></input>
                </div>
                <label className="text" >message</label>
                <textarea className="contact-textbox" id="message" name="message"></textarea>
                <input className="btn btn-secondary contact-submit" type="submit" value="Submit"></input>
            </form>
        )
    }
}

export default Contact;

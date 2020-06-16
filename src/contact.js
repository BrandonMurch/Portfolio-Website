import React from 'react';
import styles from './contact.module.css';

class Contact extends React.Component {
    render() {
        return (
            <form className={styles.contactForm}>
                <div className={styles.inputGroup}>
                    <label className={styles.label} htmlFor="name">Name</label><br />
                    <input className={styles.textInput} type="text" id="name"></input>
                </div>
                <div className={styles.inputGroup}>
                    <label className={styles.label} htmlFor="email">Email</label><br />
                    <input className={styles.textInput}  type="email" id="email"></input>
                </div>
                <label className="text" >message</label>
                <textarea className={styles.textInput} id="message" name="message"></textarea>
                {
                    // TODO bootstrap to css modules?
                }
                <input className="btn btn-secondary contact-submit" type="submit" value="Submit"></input>
            </form>
        )
    }
}

export default Contact;

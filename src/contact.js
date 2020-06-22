import React from 'react';
import styles from './contact.module.css';

class Contact extends React.Component {
    render() {
        return (
            <div className={styles.background}>
                <form className={styles.contactForm}>
                    <div className={styles.inputGroup}>
                        <label className={styles.label} htmlFor="name">Name</label><br />
                        <input className={styles.textInput} type="text" id="name"></input>
                    </div>
                    <div className={styles.inputGroup}>
                        <label className={styles.label} htmlFor="email">Email</label><br />
                        <input className={styles.textInput}  type="email" id="email"></input>
                    </div>
                    <div className={styles.wideGroup}>
                        <label className={styles.label} >message</label>
                        <textarea className={styles.textArea} id="message" name="message"></textarea>
                    </div>
                    <div className={styles.buttonContainer}>
                        <input className={"btn btn-secondary " + styles.submit}  type="submit" value="Submit"></input>
                    </div>
                </form>
            </div>
        )
    }
}

export default Contact;

import React from 'react';
import styles from './contact.module.css';
import usePreloadImage from '../hooks/usePreloadImage';
import Loading from '../loading_page';

function Contact() {
    const backgroundSource = "../images/mtwellington.jpeg";

    const loaded = usePreloadImage(backgroundSource);
    

    return (

        <>
        <div hidden={loaded}>
            <Loading/>
        </div>

        <section 
            hidden={!loaded} 
            className={styles.contact} 
            style={{ 
                background:'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(' + backgroundSource + ')', 
                backgroundSize:'cover'
            }}
        >
            <form className={styles.contactForm}>
                <TextInput name="name" type="text"  autofocus={true}/>
                <TextInput name="email" type="email" />
                <div className={styles.inputGroup}>
                    <label className={styles.label}>message</label>
                    <textarea className={styles.textArea} id="message" name="message" required/>
                </div>
                <div className={styles.buttonContainer}>
                    <input className={styles.submit}  type="submit" value="Submit" disabled />
                </div>
            </form>
        </section>
        </>
    )
}


function TextInput(props) {
    return (
        <div className={styles.inputGroup}>
            <label 
                className={styles.label} 
                htmlFor={props.name}
            >
                {props.name}
            </label>
            <br />
            <input className={styles.textInput} type={props.type}  id={props.name} autoFocus={props.autofocus} required/>
        </div>
    )
}

export default Contact;

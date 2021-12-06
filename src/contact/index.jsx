import React, {useState} from 'react';
import styles from './contact.module.css';
import usePreloadImage from '../hooks/usePreloadImage';
import Loading from '../loading_page';

function Contact() {
    const backgroundSource = "../images/mtwellington.jpeg";
    const [submitted, setSubmitted] = useState(false);
    const loaded = usePreloadImage(backgroundSource);
    const defaultValues = {
        name: "",
        email: "",
        message: "",
    }
    const [formContent, setFormContent] = useState(defaultValues);

    function handleChange(event) {
        // event.persist() must be used because setFormContent will execute asynchronously.
        event.persist();
        setFormContent((previousState) => {
            return {...previousState, [event.target.name]: event.target.value}
        }); 
    }


  const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

    function handleSubmit(event) {
        fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...formContent })
      })
        .then((response) => {
            if (response.status === 200) {
                alert("Success!");
            }
            else 
                alert("Message was unsuccessful, please try again later.");

        }).catch(error => alert(error));        
        event.preventDefault();
    }
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
            <form 
                className={
                    styles.contactForm 
                    + " " 
                    + (submitted ? styles.submitted : "")
                }
                onSubmit={handleSubmit}
            >
                <TextInput name="name" type="text"  autofocus={true} onChange={handleChange}/>
                <TextInput name="email" type="email" onChange={handleChange} />
                <div className={styles.inputGroup}>
                    <label className={styles.label}>message</label>
                    <textarea className={styles.textArea} id="message" name="message" onChange={handleChange} required/>
                </div>
                <div className={styles.buttonContainer}>
                    <input className={styles.submit}  type="submit" value="Submit" onClick={() => setSubmitted(true)}/>
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
            <input className={styles.textInput} type={props.type}  id={props.name} name={props.name} autoFocus={props.autofocus} onChange={props.onChange} required/>
        </div>
    )
}

export default Contact;

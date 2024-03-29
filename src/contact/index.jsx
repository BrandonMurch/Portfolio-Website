import React, { useState, useRef } from "react";
import styles from "./contact.module.css";

function Contact() {
	const [submitted, setSubmitted] = useState(false);
	const submitButton = useRef();
	const defaultValues = {
		name: "",
		email: "",
		message: "",
	};
	const [formContent, setFormContent] = useState(defaultValues);

	function handleChange(event) {
		// event.persist() must be used because setFormContent will execute asynchronously.
		event.persist();
		setFormContent((previousState) => {
			return {
				...previousState,
				[event.target.name]: event.target.value,
			};
		});
	}

	const encode = (data) => {
		return Object.keys(data)
			.map(
				(key) =>
					encodeURIComponent(key) +
					"=" +
					encodeURIComponent(data[key])
			)
			.join("&");
	};

	function handleSubmit(event) {
		submitButton.current.disabled = true;
		fetch("/", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: encode({ "form-name": "contact", ...formContent }),
		})
			.then((response) => {
				submitButton.current.disabled = false;
				if (response.status === 200) {
					alert("Success!");
				} else
					alert("Message was unsuccessful, please try again later.");
			})
			.catch((error) => alert(error));
		event.preventDefault();
	}

	return (
		<>
			<section className={styles.contact}>
				<h1 className={styles.title} id="contact">
					Get in touch, <br /> Let's make something great!
				</h1>
				<form
					name="contact"
					className={
						styles.contactForm +
						" " +
						(submitted ? styles.submitted : "")
					}
					onSubmit={handleSubmit}
				>
					<input type="hidden" name="form-name" value="contact" />
					<p hidden>
						<label>
							This field will stop bots. Don't fill it out.
							<input name="bot-field" />
						</label>
					</p>
					<TextInput
						name="name"
						type="text"
						onChange={handleChange}
					/>
					<TextInput
						name="email"
						type="email"
						onChange={handleChange}
					/>
					<div className={styles.inputGroup}>
						<label className={styles.label} htmlFor="message">
							message
						</label>
						<textarea
							className={styles.textArea}
							id="message"
							name="message"
							onChange={handleChange}
							required
						/>
					</div>
					<div className={styles.buttonContainer}>
						<input
							className={styles.submit}
							type="reset"
							value="reset"
						/>
						<input
							className={styles.submit}
							type="submit"
							value="send"
							ref={submitButton}
							onClick={() => setSubmitted(true)}
						/>
					</div>
				</form>
			</section>
		</>
	);
}

function TextInput(props) {
	return (
		<div className={styles.inputGroup}>
			<label className={styles.label} htmlFor={props.name}>
				{props.name}
			</label>
			<br />
			<input
				className={styles.textInput}
				type={props.type}
				id={props.name}
				name={props.name}
				onChange={props.onChange}
				required
			/>
		</div>
	);
}

export default Contact;

import React, { useState } from 'react'

import '../styles/Contact.css'

export function Contact() {
	const [status, setStatus] = useState("Submit")

	const handleSubmit = async (e) => {
		e.preventDefault()
		setStatus("Sending...")

		const { name, email, message } = e.target.elements;

		let details = {
			name: name.value,
			email: email.value,
			message: message.value
		}
		let response = await fetch("http://localhost:1234/contact" , {
			method: "POST",
			headers: {
				"Content-Type": "appliction/json;charset=utf-8"
			},
			body: JSON.stringify(details)
		})
		setStatus("Submit")
		let result = await response.json()
		alert(result.status)
	}

	return (
		<div className="contact">
			<form onSubmit={handleSubmit}>
      			<div>
			        <label htmlFor="name">Name:</label>
			        <input type="text" id="name" required />
      			</div>
      			<div>
			        <label htmlFor="email">Email:</label>
			        <input type="email" id="email" required />
      			</div>
      			<div>
			        <label htmlFor="message">Command:</label>
			        <textarea id="message" required />
      			</div>
      			<button type="submit">{status}</button>
    		</form>
		</div>
	)
}
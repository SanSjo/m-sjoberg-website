import React, { useState } from 'react';

export const ContactForm = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [text, setText] = useState('');

	return (
		<div className="contact-form">
			<h2>Kontakta oss</h2>
			<form>
				<label>Namn:</label>
				<input
					value={name}
					placeholder="Enter Name"
					type="text"
					name="name"
					onChange={event => setName(event.target.value)}
					required
				/>

				<label>Email:</label>
				<input
					value={email}
					placeholder="Enter Email"
					type="email"
					name="email"
					onChange={event => setEmail(event.target.value)}
					required
				/>

				<label>Meddelande:</label>
				<input
					value={text}
					placeholder="Meddelande"
					type="text"
					name="text"
					row="10"
					required
				/>
			</form>
		</div>
	);
};

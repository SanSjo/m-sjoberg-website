import React, { useState } from 'react';
import { langService } from '../services/langService'

const lang = langService.getStrings({
  en: {
    header: 'Contact us',
    name: 'Name',
    email: 'Email',
    message: 'Message',
    send: 'Send'
  },
  se: {
    header: 'Kontakta oss',
    name: 'Namn',
    email: 'Email',
    message: 'Meddelande',
    send: 'Skicka'
  }
})

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');

  return (
    <div className="contact-form">
      <h2>{lang.header}</h2>
      <form>
        <label>{lang.name}</label>
        <input
          className="input"
          value={name}
          placeholder="Enter Name"
          type="text"
          name="name"
          onChange={(event) => setName(event.target.value)}
          required />

        <label>{lang.email}</label>
        <input
          className="input"
          value={email}
          placeholder="Enter Email"
          type="email"
          name="email"
          onChange={(event) => setEmail(event.target.value)}
          required />

        <label>{lang.message}</label>
        <input
          className="input"

          placeholder="Meddelande"
          type="text"
          name="text"
          row="10"
          required />

        <button type="submit" className="form-button">Skicka</button>
      </form>
    </div>
  );
};

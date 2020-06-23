import React from 'react';
import { MapContact } from 'components/MapContact';
import { Header } from 'components/Header';
import '../components/styles/contact.css';
import { ContactForm } from 'components/ContactForm';

export const Contact = () => {
  return (
    <>
      <Header />
      <section className="contact">
        <div className="contact-info">
          <h2>Här hittar du oss</h2>
          <p>Råsundavägen 79, Solna</p>
          <p>08-567 89 04</p>
          <p>info@msjoberg.se</p>

          <MapContact />
        </div>

        <div className="contact-team">
          <h2>Kontakta oss</h2>
          <div className="team">
            <h4>Receptionen</h4>
            <p>08-567 89 04</p>
            <p>info@msjoberg@gmail.com</p>
          </div>
          <div className="team">
            <h4>Support</h4>
            <p>08-567 89 04</p>
            <p>support@msjoberg@gmail.com</p>
          </div>
          <div className="team">
            <h4>Lager</h4>
            <p>08-567 89 04</p>
            <p>lager@msjoberg@gmail.com</p>
          </div>
          <div className="team">
            <h4>Service</h4>
            <p>08-567 89 04</p>
            <p>service@msjoberg@gmail.com</p>
          </div>
        </div>
        <ContactForm />
      </section>
    </>
  );
};

export default Contact;

import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { FloatLabel } from 'primereact/floatlabel'; 
import { Button } from 'primereact/button';
import '../styles/Contact.css';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ name, email, message });
        // Aquí podrías agregar la lógica para enviar los datos a un servidor o servicio
    };

    return (
        <div className="contact-page">
            <h1>Contáctanos</h1>
            <div className="contact-form">
                <form onSubmit={handleSubmit}>
                    <div className="p-field">
                        <label htmlFor="name">Nombre </label>
                        <InputText id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>
                    <div className="p-field">
                        <label htmlFor="email"> Tu e-mail</label>
                        <InputText id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>

                    {/* Textarea con FloatLabel */}
                    <div className="p-field">
                        <FloatLabel>
                            <InputTextarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} rows={5} cols={30} required />
                            <label htmlFor="message">Comentario</label>
                        </FloatLabel>
                    </div>

                    <Button type="submit" label="Enviar" className="p-mt-2" />
                </form>
            </div>

            <div className="contact-info">
                <h2>Nuestra Ubicación</h2>
                <iframe
                    title="Google Maps"
                    src="https://maps.app.goo.gl/QJ3qx7S3onrQv9dd9"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
                <div className="contact-details">
                    <p><strong>Dirección:</strong> calle picapiedra, Desamparados, Costa Rica</p>
                    <p><strong>Teléfono:</strong> +506 8476 7437</p>
                    <p><strong>Email:</strong> rockarte.com</p>
                </div>
            </div>
        </div>
    );
}

export default Contact;

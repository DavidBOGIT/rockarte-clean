import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { FloatLabel } from 'primereact/floatlabel'; 
import { Button } from 'primereact/button';
import { RadioButton } from 'primereact/radiobutton';
import { Dropdown } from 'primereact/dropdown';
import '../styles/Contact.css';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [message, setMessage] = useState('');
    const [messagePreference, setMessagePreference] = useState(null);
    const [bestTime, setBestTime] = useState(null);

    const timeOptions = [
        { label: 'Mañana', value: 'morning' },
        { label: 'Tarde', value: 'afternoon' },
        { label: 'Noche', value: 'night' },
        { label: 'Lo más antes posible', value: 'asap' }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ name, email, telefono, message, messagePreference, bestTime });
    
    };

    return (
        <div className="contact-page">
            <h1>Contáctanos</h1>
            <div className="contact-form">
                <form onSubmit={handleSubmit}>
                    <div className="p-field">
                        <label htmlFor="name">Tu Nombre </label>
                        <InputText id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>
                    <div className="p-field">
                        <label htmlFor="email"> Tu e-mail</label>
                        <InputText id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="p-field">
                        <label htmlFor="telefono"> Tu numero de telefono</label>
                        <InputText id="telefono" value={telefono} onChange={(e) => setTelefono (e.target.value)} required />
                    </div>

        
                    <div className="p-field">
                        <label>¿Le gustaría que le enviemos un mensaje antes de llamarte?</label>
                        <div className="p-field-radiobutton">
                            <RadioButton 
                                inputId="yes" 
                                name="messagePreference" 
                                value="yes" 
                                onChange={(e) => setMessagePreference(e.value)} 
                                checked={messagePreference === 'yes'} 
                            />
                            <label htmlFor="yes">Sí</label>
                        </div>
                        <div className="p-field-radiobutton">
                            <RadioButton 
                                inputId="no" 
                                name="messagePreference" 
                                value="no" 
                                onChange={(e) => setMessagePreference(e.value)} 
                                checked={messagePreference === 'no'} 
                            />
                            <label htmlFor="no">No</label>
                        </div>
                    </div>

                    
                    <div className="p-field">
                        <label htmlFor="bestTime">¿Mejor momento para llamarte?</label>
                        <Dropdown 
                            id="bestTime" 
                            value={bestTime} 
                            options={timeOptions} 
                            onChange={(e) => setBestTime(e.value)} 
                            placeholder="Selecciona una opción" 
                        />
                    </div>

                    
                    <div className="p-field">
                            <p>Cuentano acerca de tu proyecto</p>
                        <FloatLabel>
                            <InputTextarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} rows={8} cols={70} required />
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

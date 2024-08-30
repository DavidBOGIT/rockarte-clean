import React, { useState } from 'react';
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import '../styles/Navbar.css'


const Navbar = () => {
    const [items] = useState([
        {
            label: 'Inicio',
            icon: 'pi pi-home',
            command: () => { window.location = "/" }
        },
        {
            label: 'Nosotros',
            icon: 'pi pi-info-circle',
            command: () => { window.location = "/about" }
        },
        {
            label: 'Productos',
            icon: 'pi pi-tags',
            command: () => { window.location = "/products" }
        },
        {
            label: 'Contacto',
            icon: 'pi pi-envelope',
            command: () => { window.location = "/contact" }
        }
    ]);

    const start = <img alt="rockarte" src="imagenes-de-proyecto/logorockarte.jpeg" height="40" className="p-mr-2"></img>;
    const end = (
        <span className="p-input-icon-left">
            <i className="pi pi-search" />
            <InputText placeholder=" Buscar" type="text" />
        </span>
    );

    return (
        <Menubar model={items} start={start} end={end} className='navbar-fixed' />
    );
}

export default Navbar;

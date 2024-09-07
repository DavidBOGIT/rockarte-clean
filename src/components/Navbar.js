import React, { useState, useContext } from 'react';
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Badge } from 'primereact/badge';
import { Link } from 'react-router-dom'; 
import { CartContext } from './CartContext'; 
import 'primeicons/primeicons.css';
import '../styles/Navbar.css';

const Navbar = () => {
    const { cartItems } = useContext(CartContext); 

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
        <div style={{ display: 'flex', alignItems: 'center' }}>
          
          <Link to="/cart">
              <Button 
                  icon="pi pi-shopping-cart" 
                  className="p-button-rounded p-button-secondary p-mr-2" 
                  style={{ marginLeft: '10px' }} 
                  aria-label="Carrito"
              />
              <Badge value={cartItems.length} severity="danger" /> 
          </Link>
        </div>
    );

    return (
        <Menubar model={items} start={start} end={end} className='navbar-fixed' />
    );
}

export default Navbar;

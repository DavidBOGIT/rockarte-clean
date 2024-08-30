import React from 'react';
import '../styles/Home.css';
import Galleria from '../components/Galleria';
 

    

const Home = () => {

   return(
        <div className="home-page">
        <div className="welcome-section">
            <div className="welcome-image">
                <div className="welcome-text">
                    <h1>Bienvenido a RockArte</h1>
                    <p>Explora nuestros productos únicos para decorar tu hogar con estilo.</p>
                </div>
            </div>
        </div>

        <div className='inspiration-section'>
            <h2>¿Necesitas inspiración para tu obra?</h2>
            <h2> Aquí tenemos algunos ejemplos que te pueden ayudar...</h2>

        </div>
   
            <Galleria/>
            <Footer/>
        </div>
    );
};
const Footer = () => {
    return(
        <footer className='footer'>
            <div className='footer-left'>
            <p>© 2024 RockArte. Todos los derechos reservados.</p> 
            </div>
            <div className='footer-right'>
                <p className='p'>Siguenos en </p> 
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <i className="pi pi-facebook"></i>
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <i className="pi pi-instagram"></i>
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <i className="pi pi-twitter"></i>
                </a>
            </div>
        </footer>
    );
};

export default Home;

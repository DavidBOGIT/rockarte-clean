import React from 'react';
import '../styles/Home.css';
import { Carousel } from 'primereact/carousel';

const images = [
    { id: 1, src: '/imagenes-de-proyecto/mollejon/mollejonRusticoF.jpg', alt: 'Imagen 1' },
    { id: 2, src: '/imagenes-de-proyecto/piedra-para-jardines/granitoMulticolorF.jpg', alt: 'Imagen 2' },
    { id: 3, src: '/imagenes-de-proyecto/mollejon/mollejonCuadrado.jpg', alt: 'Imagen 3' },
];

const Home = () => {
    const responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '768px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '560px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    const imageTemplate = (image) => {
        return (
            <div className="image-item">
                <img src={image.src} alt={image.alt} className="carousel-image" />
            </div>
        );
    };

    return (
        <div className="home-page">
            <section className="gallery-section">
                <Carousel 
                    value={images} 
                    itemTemplate={imageTemplate} 
                    numVisible={1} 
                    numScroll={1} 
                    responsiveOptions={responsiveOptions} 
                    circular 
                    autoplayInterval={5000} 
                    showNavigators 
                    showIndicators={false}
                    className="custom-carousel"
                />
            </section>


            <section className="slogan-section">
                <h2 className="slogan-title">Inspirando Espacios con la Belleza de la Piedra</h2>
                <p className="slogan-description">
                    En RockArte, nos especializamos en la venta de productos de decoración de piedra para jardines, enchapes para paredes y pisos. Nuestro objetivo es transformar tus espacios con la durabilidad y el estilo natural que solo la piedra puede ofrecer.
                </p>
            </section>
                     
                   <div className='etiquetan'>
                    <h2> Encuentra en nuestra seccion de productos todo necesario para tus jardines, fachadas y pisos!</h2>
                   </div>

            <section className="testimonials-section">
                <h2 className="testimonials-title">Nuestros Clientes Opinan</h2>

                        <div className="testimonial-box">
                            <p className="testimonial-text">"RockArte transformó mi jardín en un verdadero oasis. ¡Recomiendo sus productos a todos mis amigos!"</p>
                            <p className="testimonial-client">- Laila Pérez</p>
                        </div>
                        <div className="testimonial-box">
                            <p className="testimonial-text">" Mi sala ahora tiene un toque elegante y único."</p>
                            <p className="testimonial-client">- Alfredito el guapo</p>
                        </div>
                        <div className="testimonial-box">
                            <p className="testimonial-text">"Excelente servicio y productos de primera. Mi cocina luce espectacular con los enchapes de RockArte."</p>
                            <p className="testimonial-client">- Fiona Gómez</p>
                        </div>
                        <div className="testimonial-box">
                            <p className="testimonial-text">" Con RockArte hemos comvertido mi jardín en algo espectacular. ¡Recomiendo sus productos a todos mis amigos!"</p>
                            <p className="testimonial-client">- Nami jimenez</p>
                        </div>
                        <div className="testimonial-box">
                            <p className="testimonial-text">"La calidad de sus piedras es inigualable"</p>
                            <p className="testimonial-client">- Juan Rodríguez</p>
                        </div>
                        <div className="testimonial-box">
                            <p className="testimonial-text">"Excelente servicio y y excelente tiempo de entrega. Mi fachada luce increible con los enchapes de RockArte."</p>
                            <p className="testimonial-client">- Nanuta Mendez</p>
                        </div>   

            </section>
            <Footer />
        </div>
    );
};

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-left'>
                <p>© 2024 RockArte. Todos los derechos reservados.</p>
            </div>
            <div className='footer-right'>
                <p className='p'>Síguenos en </p>
                <a href="https://www.facebook.com/rockartecr/" target="_blank" rel="noopener noreferrer" className="social-icon">
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

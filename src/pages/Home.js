import React from 'react';
import { Carousel } from 'primereact/carousel';
import '../styles/Home.css';

const images = [
    { id: 1, src: '/imagenes-de-proyecto/mollejon/mollejonRusticoF.jpg', alt: 'Proyecto 1' },

    { id: 2, src: '/imagenes-de-proyecto/piedra para jardines/granitoMulticolorF.jpg', alt: 'Proyecto 2' },
    { id: 3, src: '/imagenes-de-proyecto/proyectos realizados/laja negra recortes combinados.jpeg', alt: 'Proyecto 3' },
    // Agrega más imágenes aquí
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
            <Carousel 
                value={images} 
                itemTemplate={imageTemplate} 
                numVisible={1} 
                numScroll={1} 
                autoplayInterval={3000} 
                responsiveOptions={responsiveOptions} 
                className="custom-carousel"
            />
        </div>
    );
};

export default Home;

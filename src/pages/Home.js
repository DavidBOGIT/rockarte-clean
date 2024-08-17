import React from 'react';
import { Carousel } from 'primereact/carousel';
import { Button } from 'primereact/button';

const products = [
    { id: '1', name: 'Producto 1', image: 'path/to/image1.jpg' },
    { id: '2', name: 'Producto 2', image: 'path/to/image2.jpg' },
    { id: '3', name: 'Producto 3', image: 'path/to/image3.jpg' },
];

function Home() {
    const responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 3
        },
        {
            breakpoint: '768px',
            numVisible: 2,
            numScroll: 2
        },
        {
            breakpoint: '560px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    const productTemplate = (product) => {
        return (
            <div className="product-item">
                <div className="product-item-content">
                    <div className="p-mb-3">
                        <img src={product.image} alt={product.name} className="product-image" />
                    </div>
                    <div>
                        <h4>{product.name}</h4>
                        <Button label="Ver más" className="p-button-rounded p-button-secondary" />
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="home-page">
            <h1>Bienvenido a RockArte</h1>
            <Carousel value={products} numVisible={3} numScroll={3} responsiveOptions={responsiveOptions} itemTemplate={productTemplate} />
        </div>
    );
}

export default Home;

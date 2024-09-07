import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Products.css';

const categories = [
    { name: 'Piedra para Jardines', image: '../imagenes-de-proyecto/piedra-para-jardines/cuartillaMollejon.jpg', description: 'Piedras naturales ideales para decoración de jardines.', path: 'garden-stone' },
    { name: 'Piedras de Enchape', image: '../imagenes-de-proyecto/mollejon/mollejonCuadrado.jpg', description: 'Enchapes de piedra para paredes y fachadas.', path: 'enchape-stone' },
    { name: 'Piedras para exteriores', image: '../imagenes-de-proyecto/lajas/lajon-negro.jpeg', description: 'Piedras resistentes y duraderas para pisos y paredes interiores y exteriores.', path: 'floor-stone' }
];

const Products = () => {
    return (
        <div className="products-page">
            <h1 className="products-title">Nuestros Productos</h1>
            <div className="categories">
                {categories.map((category, index) => (
                    <Link key={index} to={`/products/${category.path}`} className="category-card">
                        <img src={category.image} alt={category.name} className="category-image" />
                        <div className="category-content">
                            <h2>{category.name}</h2>
                            <p>{category.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Products;

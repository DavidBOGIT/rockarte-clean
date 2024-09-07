import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../styles/ProductList.css';

const products = {
    'garden-stone': [
        { id: 1, name: 'Granito Blanco', image: '../imagenes-de-proyecto/piedra-para-jardines/granito-blanco.jpg', price: 3000, rating: 4.5 },
        { id: 2, name: 'Granito Mixto', image: '../imagenes-de-proyecto/piedra-para-jardines/granito-multicolor.jpg', price: 3000, rating: 4.9 },
        { id: 3, name: 'Granito Rojo', image: '../imagenes-de-proyecto/piedra-para-jardines/granito-rojo.jpg', price: 3000, rating: 4.5 },
        { id: 4, name: 'Granito Negro', image: '../imagenes-de-proyecto/piedra-para-jardines/granito-sanchez.jpg', price: 3000, rating: 4.3 },
        { id: 5, name: 'Quintilla Blanca', image: '../imagenes-de-proyecto/piedra-para-jardines/quinta-blanca.jpg', price: 4000, rating: 4.5 },
        { id: 6, name: 'Granito Mollejon', image: '../imagenes-de-proyecto/piedra-para-jardines/quinta-mollejon.jpg', price: 3000, rating: 4.0 },
    ],
    'enchape-stone': [
        { id: 7, name: 'Mollejon Rustico', image: '../imagenes-de-proyecto/mollejon/mollejonRusticoF.jpg', price: 6000, rating: 4.8 },
        { id: 8, name: 'Mollejon Pulido', image: '../imagenes-de-proyecto/mollejon/mollejonpulido.jpg', price: 6500, rating: 4.2 },
    ],
    'floor-stone': [
        { id: 9, name: 'Laja Gris palillo', image: '../imagenes-de-proyecto/lajas/laja-gris-palillo.jpeg', price: 16500, rating: 4.7 },
        { id: 10, name: 'Sanchez palillo', image: '../imagenes-de-proyecto/sanchez/semirrustica_palillo.jpeg', price: 16500, rating: 4.7 },
        { id: 11, name: 'Laja Gris cuadrada', image: '../imagenes-de-proyecto/lajas/lajagriscuadro.jpg', price: 15000, rating: 4.4 },
        { id: 12, name: 'Lajón Negro', image: '../imagenes-de-proyecto/lajas/lajon-negro.jpeg', price: 10000, rating: 4.3 },
    ]
};

const ProductList = () => {
    const { category } = useParams();  
    const categoryProducts = products[category] || [];

    const [priceRange, setPriceRange] = useState([0, 20000]);
    const [minRating, setMinRating] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');

    const handlePriceChange = (event) => {
        const value = event.target.value.split('-');
        setPriceRange([parseInt(value[0]), parseInt(value[1])]);
    };

    const handleRatingChange = (event) => {
        setMinRating(parseFloat(event.target.value));
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value.toLowerCase());
    };

    const filteredProducts = categoryProducts.filter(product => 
        product.price >= priceRange[0] && product.price <= priceRange[1] &&
        product.rating >= minRating &&
        product.name.toLowerCase().includes(searchTerm)
    );

    return (
        <div className="product-list-page">
            <h1 className="product-list-title">Productos en {category.replace('-', ' ')}</h1>

            <div className="filters">
                <div>
                    <label>Rango de Precios:</label>
                    <select onChange={handlePriceChange}>
                        <option value="0-20000">Todos</option>
                        <option value="0-10000">₡0 - ₡10,000</option>
                        <option value="10001-15000">₡10,001 - ₡15,000</option>
                        <option value="15001-20000">₡15,001 - ₡20,000</option>
                    </select>
                </div>
                <div>
                    <label>Calificación Mínima:</label>
                    <select onChange={handleRatingChange}>
                        <option value="0">Todos</option>
                        <option value="4">4 estrellas o más</option>
                        <option value="4.5">4.5 estrellas o más</option>
                        <option value="5">5 estrellas</option>
                    </select>
                </div>
                <div>
                    <label>Búsqueda:</label>
                    <input type="text" onChange={handleSearchChange} placeholder="Buscar por nombre..." />
                </div>
            </div>
            
            <div className="product-grid">
                {filteredProducts.map((product) => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.name} className="products-image" />
                        <div className="product-details">
                            <h2>{product.name}</h2>
                            <p>₡{product.price}</p>
                            <p>Rating: {product.rating}</p>
                            <Link to={`/products/${category}/${product.id}`} className="product-link">
                               Ver Detalles
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductList;

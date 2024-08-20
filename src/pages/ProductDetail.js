import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/ProductDetail.css';

const products = {
    'garden-stone': [
        { id: 1, name: 'Piedra de Jardín 1', image: 'path/to/image1.jpg', price: '₡10,000', rating: 4.5, description: 'Descripción detallada de Piedra de Jardín 1.' },
        { id: 2, name: 'Piedra de Jardín 2', image: 'path/to/image2.jpg', price: '₡12,000', rating: 4.0, description: 'Descripción detallada de Piedra de Jardín 2.' },
    ],
    'enchape-stone': [
        { id: 3, name: 'Piedra de Enchape 1', image: 'path/to/image3.jpg', price: '₡15,000', rating: 4.8, description: 'Descripción detallada de Piedra de Enchape 1.' },
        { id: 4, name: 'Piedra de Enchape 2', image: 'path/to/image4.jpg', price: '₡14,000', rating: 4.2, description: 'Descripción detallada de Piedra de Enchape 2.' },
    ],
    'floor-stone': [
        { id: 5, name: 'Piedra para Piso 1', image: 'path/to/image5.jpg', price: '₡18,000', rating: 4.7, description: 'Descripción detallada de Piedra para Piso 1.' },
        { id: 6, name: 'Piedra para Piso 2', image: 'path/to/image6.jpg', price: '₡17,000', rating: 4.3, description: 'Descripción detallada de Piedra para Piso 2.' },
    ]
};

const ProductDetail = () => {
    const { category, id } = useParams();
    const categoryProducts = products[category];

    if (!categoryProducts) {
        return <div>Categoría no encontrada</div>;
    }

    const product = categoryProducts.find(p => p.id === parseInt(id));

    if (!product) {
        return <div>Producto no encontrado</div>;
    }

    return (
        <div className="product-detail-page">
            <h1 className="product-name">{product.name}</h1>
            <div className="product-detail-content">
                <img src={product.image} alt={product.name} className="product-image" />
                <div className="product-info">
                    <p className="product-price"><strong>Precio:</strong> {product.price}</p>
                    <p className="product-rating"><strong>Rating:</strong> {product.rating}</p>
                    <p className="product-description">{product.description}</p>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;

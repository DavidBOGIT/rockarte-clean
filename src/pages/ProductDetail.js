import React, { useState, useContext} from 'react'; 
import { useParams } from 'react-router-dom';
import { CartContext } from '../components/CartContext'
import Swal from 'sweetalert2';
import '../styles/ProductDetail.css';

const products = { 
    'garden-stone': [
        { id: 1, name: 'Granito Blanco', image: '/imagenes-de-proyecto/piedra-para-jardines/granito-blanco.jpg', price: '₡3,000', rating: 4.5, description: 'Ideal para decorar macetas, en presentacion de saco de 25 kilogramos ' },
        { id: 2, name: 'Granito Mixto', image: '/imagenes-de-proyecto/piedra-para-jardines/granito-multicolor.jpg', price: '₡3,000', rating: 4.0, description: 'ideal para decorar macetas y jardines, en presentacion de saco de 20 kilogramos' },
        { id: 3, name: 'Granito Rojo', image: '/imagenes-de-proyecto/piedra-para-jardines/granito-rojo.jpg', price: '₡3,000', rating: 4.5, description: 'ideal para decoracion de macetas y bordes de lago, en presentacion de saco de 20 kilogramos' },
        { id: 4, name: 'Granito Negro', image: '/imagenes-de-proyecto/piedra-para-jardines/granito-sanchez.jpg', price: '₡3,000', rating: 4.0, description: 'ideal para rellenar bordes de acera y huellas, en presentacion de saco de 20 kilogramos' },
        { id: 5, name: 'Quintilla Blanca', image: '/imagenes-de-proyecto/piedra-para-jardines/quinta-blanca.jpg', price: '₡4,000', rating: 4.5, description: 'ideal para rodear plantas y funciona para relleno de piso para restaurates, garages, etc. en presentacion de saco de 25 kilogramos' },
        { id: 6, name: 'Granito Mollejon', image: '/imagenes-de-proyecto/piedra-para-jardines/quinta-mollejon.jpg', price: '₡3,000', rating: 4.0, description: 'ideal para decorar jardines (bajo techo) y rodear plantas. en presentacion de saco de 25 kilogramos' },
    ],
    'enchape-stone': [
        { id: 7, name: 'Mollejon Rustico', image: '/imagenes-de-proyecto/mollejon/mollejonRusticoF.jpg', price: '₡6000', rating: 4.8, description: 'exclusivo para fachada e interiores bajo techo. precio es por metro cuadrado' },
        { id: 8, name: 'Mollejon Pulido', image: '/imagenes-de-proyecto/mollejon/mollejonPulido.jpg', price: '₡6500', rating: 4.2, description: 'exclusivo para fachada e interiores bajo techo. precio es por metro cuadrado' },
    ],
    'floor-stone': [
       {id: 9, name: 'Laja Gris palillo', image: '/imagenes-de-proyecto/lajas/laja-gris-palillo.jpeg', price: '₡18,000', rating: 4.7, description: 'Una excelente opcion para paredes exteriores y fuentes, muy resistente al agua.' },
       {id: 10, name: 'Sanchez palillo', image: '/imagenes-de-proyecto/sanchez/semirrustica_palillo.jpeg', price: '₡18,000', rating: 4.7, description: 'Una excelente opcion para paredes exteriores, muy resistente al agua.' },
        { id: 11, name: 'laja Gris cuadrada', image: '/imagenes-de-proyecto/lajas/lajagriscuadro.jpg', price: '₡17,000', rating: 4.3, description: 'ideal para pisos exteriores, cerca de una piscina, etc, muy resistente al agua y al sol.' },
        { id: 12, name: 'Lajón Negro', image: '/imagenes-de-proyecto/lajas/lajon_ducha.jpeg', price: '₡10,000', rating: 4.3, description: 'ideal para pisos exteriores, cerca de una piscina, etc, muy resistente al agua y al sol.' },
    ]
};

const ProductDetail = () => {

    const [quantity, setQuantity] = useState(1);
    
    const handleChange = (event) => {
        setQuantity(event.target.value)};

    const { category, id } = useParams();
    const categoryProducts = products[category];
    const { addToCart } = useContext(CartContext); 

    
    const [cart, setCart] = useState([]);

    if (!categoryProducts) {
        return <div>Categoría no encontrada</div>;
    }

    const product = categoryProducts.find(p => p.id === parseInt(id));

    if (!product) {
        return <div>Producto no encontrado</div>;
    }

    const handleAddToCart = () => {
        addToCart({ ...product, quantity });
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Se añadió al carrito",
            showConfirmButton: false,
            timer: 1500
        });
    };

    return (
        <div className="product-detail-page">
            <h1 className="product-name">{product.name}</h1>
            <div className="product-detail-content">
                <img src={product.image} alt={product.name} className="product-image" />
                <div className="product-info">
                    <p className="product-price"><strong>Precio:</strong> {product.price}</p>
                    <p className="product-rating"><strong>Rating:</strong> {product.rating}</p>
                    <p className="product-description">{product.description}</p>
                    <label htmlFor="product-quantity">
                        <strong>Cantidad:</strong>
                    </label>
                    <input type='number' id='product-quantity' onChange={handleChange} min='1' max='10' step='1'
                     value={quantity} /> 
                <button className="add-to-cart-btn" onClick={handleAddToCart}>
                    Añadir al carrito
                </button>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;

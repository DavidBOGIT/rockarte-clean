import React, { useContext } from 'react';
import { CartContext } from '../components/CartContext';
import '../styles/Cart.css'; 

const Cart = () => {
    const { cartItems, removeFromCart } = useContext(CartContext);
     
    
    const parsePrice = (price) => {
        return parseFloat(price.replace('₡', '').replace(',', '').trim());
    };
    
    const calculateTotal = () => {
        return cartItems.reduce((total, item) => 
            total + (parsePrice(item.price) * item.quantity), 0
        );
    };
    
    const totalUnidad = (productId) => {
        return cartItems
            .filter(item => item.id === productId)
            .reduce((total, item) => total + (parseFloat(item.price.replace('₡', '').replace(',', '')) * item.quantity), 0);
    };

    return (
        <div className="cart-page">
            <h1 className="cart-title">Carrito de Compras</h1>
            {cartItems.length === 0 ? (
                <p>Tu carrito está vacío.</p>
            ) : (
                <div className="cart-items">
                    {cartItems.map((item) => (
                        <div key={item.id} className="cart-item">
                            <img src={item.image} alt={item.name} />
                            <div className="cart-item-details">
                                <h3 className="cart-item-name">{item.name}</h3>
                                <p className="cart-item-price">precio por unidad:{item.price}</p>
                                <p className="cart-item-quantity">cantidad:{item.quantity}</p>
                                <p className="cart-item-total">Total:{totalUnidad(item.id).toLocaleString()}</p>

                            </div>
                            <div className="cart-item-actions">
                                <button 
                                    className="cart-item-remove-btn"
                                    onClick={() => removeFromCart(item.id)}
                                >
                                    Eliminar
                                </button>
                            </div>
                        </div>
                    ))}
                    
                </div>
            )}

            <div className="cart-summary">
                <h2>Resumen del Pedido</h2>
                <p>Productos en el carrito: {cartItems.length}</p>
                
                <p className="cart-summary-total">Total: ₡{calculateTotal().toLocaleString()}</p>

                <button className="cart-summary-btn">Proceder al Pago</button>
            </div>
        </div>
    );
};

export default Cart;

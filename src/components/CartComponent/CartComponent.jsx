import React, { useEffect, useState } from 'react';
import './CartComponent.css';

const CartComponent = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItems(storedCartItems);
    }, []);

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    const handleCheckout = () => {
        alert("Order placed successfully!");
        localStorage.removeItem('cart');
        setCartItems([]);
    };

    return (
        <div className="cart-page">
            <h2>Your Cart</h2>
            {cartItems.length > 0 ? (
                <div className="cart-items">
                    {cartItems.map((item) => (
                        <div key={item.id} className="cart-item">
                            <img src={item.imageUrl} alt={item.name} />
                            <div className="item-details">
                                <h3>{item.name}</h3>
                                <p>Price: Rs. {item.price}</p>
                                <p>Quantity: {item.quantity}</p>
                            </div>
                        </div>
                    ))}
                    <div className="cart-summary">
                        <h3>Total: Rs. {calculateTotal()}</h3>
                        <button className="checkout-btn" onClick={handleCheckout}>Checkout</button>
                    </div>
                </div>
            ) : (
                <p>Your cart is empty.</p>
            )}
        </div>
    );
}

export default CartComponent




import React, { useState } from 'react';
import { FaRegHeart } from 'react-icons/fa'; 
import './ProductsComponent.css';

const ProductsComponent = ({ product }) => {
    const [selectedQuantity, setSelectedQuantity] = useState(0);

    const incrementHandler = () => {
        setSelectedQuantity(selectedQuantity + 1);
    };

    const decrementHandler = () => {
        if (selectedQuantity > 0) {
            setSelectedQuantity(selectedQuantity - 1);
        }
    };

    const handleAddToCart = () => {
        if (selectedQuantity > 0) {
            let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
            const existingItemIndex = cartItems.findIndex(item => item.id === product.id);

            if (existingItemIndex !== -1) {
                cartItems[existingItemIndex].quantity += selectedQuantity;
            } else {
                cartItems.push({ ...product, quantity: selectedQuantity });
            }

            localStorage.setItem('cart', JSON.stringify(cartItems));
            setSelectedQuantity(0);
            alert(`${product.name} has been added to the cart successfully!`);
        } else {
            alert('Please select at least one item.');
        }
    };

    const handleAddToWishlist = () => {
        let wishlistItems = JSON.parse(localStorage.getItem('wishlist')) || [];
        const alreadyInWishlist = wishlistItems.some(item => item.id === product.id);

        if (!alreadyInWishlist) {
            wishlistItems.push(product);
            localStorage.setItem('wishlist', JSON.stringify(wishlistItems));
            alert(`${product.name} has been added to the wishlist!`);
        } else {
            alert(`${product.name} is already in your wishlist.`);
        }
    };

    return (
        <div className="card">
            <img src={product.imageUrl} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Price: Rs. {product.price}</p>
            <div className="buttons-container">

                <button className="wishlist-btn" onClick={handleAddToWishlist}>
                    <FaRegHeart />
                </button>

                <div className="counter">
                    <button className='counter-btn' onClick={decrementHandler}>-</button>
                    <span>{selectedQuantity}</span>
                    <button className='counter-btn' onClick={incrementHandler}>+</button>
                </div>

                <button className='addtocart-btn' onClick={handleAddToCart}>
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductsComponent;

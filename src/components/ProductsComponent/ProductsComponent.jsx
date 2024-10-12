import React, { useState } from 'react';
import { FaRegHeart } from 'react-icons/fa';
import './ProductsComponent.css';
import { toast } from 'react-toastify';

const ProductsComponent = ({ product, addToCart }) => {
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
            addToCart(product, selectedQuantity);
            setSelectedQuantity(0);
        } else {
            toast.info('Please select at least one item.');
        }
    };

    const handleAddToWishlist = () => {
        let wishlistItems = JSON.parse(localStorage.getItem('wishlist')) || [];
        const alreadyInWishlist = wishlistItems.some(item => item.id === product.id);

        if (!alreadyInWishlist) {
            wishlistItems.push(product);
            localStorage.setItem('wishlist', JSON.stringify(wishlistItems));
            toast.success(`${product.name} has been added to the wishlist!`);
        } else {
            toast.info(`${product.name} is already in your wishlist.`);
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

import React, { useState, useEffect } from 'react';
import './WishlistComponent.css';

const WishlistComponent = () => {
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    const storedWishlistItems = JSON.parse(localStorage.getItem('wishlist')) || [];
    setWishlistItems(storedWishlistItems);
  }, []);

  const handleAddToCart = (product) => {
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItemIndex = cartItems.findIndex(item => item.id === product.id);

    if (existingItemIndex !== -1) {
      cartItems[existingItemIndex].quantity += 1;
    } else {
      cartItems.push({ ...product, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cartItems));
    alert(`${product.name} has been added to the cart successfully!`);
  };

  const removeFromWishlist = (productId) => {
    const updatedWishlist = wishlistItems.filter(item => item.id !== productId);
    setWishlistItems(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
  };

  return (
    <div className="wishlist-page">
      <h2>Your Wishlist</h2>
      {wishlistItems.length > 0 ? (
        <div className="wishlist-items">
          {wishlistItems.map(item => (
            <div key={item.id} className="wishlist-item">
              <img src={item.imageUrl} alt={item.name} />
              <div className="item-details">
                <h3>{item.name}</h3>
                <p>Price: Rs. {item.price}</p>
              </div>
              <div className="buttons">
                <button className="add" onClick={() => handleAddToCart(item)}>Add to Cart</button>
                <button className="remove" onClick={() => removeFromWishlist(item.id)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Your wishlist is empty.</p>
      )}
    </div>
  );
};

export default WishlistComponent;

import { useState } from 'react';
import products from '../../data/products';
import ProductsComponent from '../ProductsComponent/ProductsComponent';
import './GetAllProductsComponent.css';

const GetAllProductsComponent = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOrder, setSortOrder] = useState('default');

    const handleAddToCart = (product, quantity) => {
        const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
        const itemIndex = existingCart.findIndex(item => item.id === product.id);

        if (itemIndex > -1) {
            existingCart[itemIndex].quantity += quantity;
        } else {
            existingCart.push({ ...product, quantity });
        }

        localStorage.setItem('cart', JSON.stringify(existingCart));
        alert(`${product.name} added to cart!`);
    };

    const filteredProducts = products.filter(product => {
        const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());

        return matchesCategory && matchesSearch;
    });

    const sortedProducts = filteredProducts.sort((a, b) => {
        if (sortOrder === 'lowToHigh') {
            return a.price - b.price;
        } else if (sortOrder === 'highToLow') {
            return b.price - a.price;
        }
        return 0;
    });

    return (
        <div>
            <div className="searchcontainer">
                <input
                    type="text"
                    placeholder="Search for products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="searchbar"
                />
            </div>

            <div className="category-filters">
                <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="category-dropdown"
                >
                    <option value="All">Categories</option>
                    <option value="Men">Men</option>
                    <option value="Women">Women</option>
                    <option value="Kids">Kids</option>
                </select>

                <button onClick={() => setSelectedCategory('All')}>All</button>
                <button onClick={() => setSelectedCategory('Men')}>Men</button>
                <button onClick={() => setSelectedCategory('Women')}>Women</button>
                <button onClick={() => setSelectedCategory('Kids')}>Kids</button>

                <select
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                    className="sort-dropdown"
                >
                    <option value="default">Sort by</option>
                    <option value="lowToHigh">Price: Low to High</option>
                    <option value="highToLow">Price: High to Low</option>
                </select>
            </div>

            <div className="cards-container">
                {sortedProducts.length > 0 ? (
                    sortedProducts.map(product => (
                        <ProductsComponent key={product.id} product={product} addToCart={handleAddToCart} />
                    ))
                ) : (
                    <p>No products found</p>
                )}
            </div>
        </div>
    );
}

export default GetAllProductsComponent;

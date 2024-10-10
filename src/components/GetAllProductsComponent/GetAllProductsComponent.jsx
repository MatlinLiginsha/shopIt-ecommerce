import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductsComponent from '../ProductsComponent/ProductsComponent';
import './GetAllProductsComponent.css';

const GetAllProductsComponent = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products'); 
                setProducts(response.data); 
                setLoading(false); 
            } catch (error) {
                console.error("Error fetching products:", error);
                setLoading(false); 
            }
        };

        fetchProducts(); 
    }, []); 

    if (loading) {
        return <div>Loading...</div>; 
    }

    return (
        <div className='cards-container'>
            {products.map(product => (
                <ProductsComponent key={product.id} product={product} />
            ))}
        </div>
    );
}

export default GetAllProductsComponent;


// import products from '../../data/products';
// import ProductsComponent from '../ProductsComponent/ProductsComponent';
// import './GetAllProductsComponent.css'
// const GetAllProductsComponent = () => {
//     return (
//         <div className='cards-container'>
//             {products.map(product => (
//                 <ProductsComponent key={product.id} product={product} />
//             ))}
//         </div>
//     )
// }

// export default GetAllProductsComponent
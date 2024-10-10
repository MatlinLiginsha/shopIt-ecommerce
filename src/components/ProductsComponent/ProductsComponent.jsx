import './ProductsComponent.css';

const ProductsComponent = ({ product }) => {
  return (
    <div className='card'>
      <img src={product.image} alt={product.title} className='product-image' />
      <p>{product.title}</p> 
      <p>${product.price.toFixed(2)}</p> 
    </div>
  );
};

export default ProductsComponent;

// import './ProductsComponent.css'
// const ProductsComponent = ({ product }) => {
//     return (
//         <div className='card'>
//             <img src='{product.image}'></img>
//             <p>{product.name}</p>
//             <p>{product.price}</p>
//         </div>
//     )
// }

// export default ProductsComponent
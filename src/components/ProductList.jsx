import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/CartSlice';

function ProductList() {
  const dispatch = useDispatch();

  const products = [
    { id: 1, name: 'Rose Plant', price: 10 },
    { id: 2, name: 'Tulip Plant', price: 15 },
    { id: 3, name: 'Cactus Plant', price: 20 },
  ];

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div>
      <h2>Products</h2>

      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <button onClick={() => handleAddToCart(product)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
import React from 'react';
import './App.css';

type ProductType = {
    id: any,
    title: string,
    imageUrl: string
}
function Product({ id, title, imageUrl }: ProductType) {
  return (
    <div className="product" id={id}>
        <h2>{title}</h2>
        <img src={imageUrl} alt={title} />
    </div>
  );
}

export default Product;

import React from 'react';
import './App.css';

export type ProductType = {
    id: any;
    title: string;
    imageUrl: string;
    onClick: Function;
}
function Product({ id, title, imageUrl, onClick }: ProductType) {
  return (
    <div className="product" id={id} onClick={() => onClick({ product_id: id, title, image: imageUrl })}>
        <h2>{title}</h2>
        <img src={imageUrl} alt={title} />
    </div>
  );
}

export default Product;

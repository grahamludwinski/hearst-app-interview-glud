import React from 'react';
import Product from './Product';
import './App.css';

const productsData = [
  { "product_id": 1, "title": "Product A", "image": "https://picsum.photos/id/6/200" },
  { "product_id": 2, "title": "Gizmo B", "image": "https://picsum.photos/id/11/200" },
  { "product_id": 3, "title": "Widget C", "image": "https://picsum.photos/id/40/200" }
]
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Products</h1>
      </header>
      <section className="main">
        <div className="row">
          {productsData.map(({product_id, title, image}) => (
            <Product id={product_id} title={title} imageUrl={image} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import Product from './Product';
import Content, { ContentType } from './Content';
import './App.css';
import Modal from './Modal';

const groupBy = <T, K extends keyof any>(arr: T[], key: (i: T) => K) =>
  arr.reduce((groups, item) => {
    (groups[key(item)] ||= []).push(item);
    return groups;
  }, {} as Record<K, T[]>);


type ProductDataType = {
  product_id: number;
  title: string;
  image: string;
}[]

const contentsData: ContentType[] = [
  { "type": "html", "contents": "<p>This is row 1 of content.</p>", "position": "row-1" },
  { "type": "html", "contents": "<p>This is row 3 of content.</p>", "position": "row-3" }
]

let contentsDataGrouped = groupBy(contentsData, (content) => (content.position));

function App() {
  const [productData, setProductData] = useState<{ products: ProductDataType }>({ products: [] })
  const [contentData, setContentData] = useState<{ data: ContentType[] }>({ data: [] })
  const [currentProduct, setCurrentProduct] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (product: any) => {
    setCurrentProduct(product);
    setIsOpen(true);
  }


  useEffect(() => {
    async function fetchProductData() {
      const response = await fetch("https://cx-interview-api.dev.ecmapps.com/products?page=hello-world");
      const data = await response.json();
      setProductData(data);
    }
    async function fetchContentData() {
      const response = await fetch("https://cx-interview-api.dev.ecmapps.com/content?page=hello-world");
      const data = await response.json();
      setContentData(data);
    }
    fetchProductData();
    fetchContentData();
  }, []);

  const row1 = productData.products.slice(0,3)
  const row4 = productData.products.slice(3)

  contentsDataGrouped = groupBy(contentData.data, (content) => (content.position));
  
  return (
    <div className="App">
      <Modal isOpen={isOpen} onClose={() => { setIsOpen(false)}} currentProduct={currentProduct} />
      <header className="App-header">
        <h1>Products</h1>
      </header>
      <section className="main">
        {contentsDataGrouped['row-1']?.map((content: ContentType) => (
          <Content {...content} />
        ))}
        <div className="row">
          {row1.map(({ product_id, title, image }) => (
            <Product id={product_id} title={title} imageUrl={image} onClick={openModal} />
          ))}
        </div>
        {contentsDataGrouped['row-3']?.map((content: ContentType) => (
          <div className="row" dangerouslySetInnerHTML={{ __html: content.contents }}></div>
        ))}
        <div className="row">
          {row4.map(({ product_id, title, image }) => (
            <Product id={product_id} title={title} imageUrl={image} onClick={openModal} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;

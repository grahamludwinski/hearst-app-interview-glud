import Product from './Product';
import Content, { ContentType } from './Content';
import './App.css';

const groupBy = <T, K extends keyof any>(arr: T[], key: (i: T) => K) =>
  arr.reduce((groups, item) => {
    (groups[key(item)] ||= []).push(item);
    return groups;
  }, {} as Record<K, T[]>);

const productsData = [
  { "product_id": 1, "title": "Product A", "image": "https://picsum.photos/id/6/200" },
  { "product_id": 2, "title": "Gizmo B", "image": "https://picsum.photos/id/11/200" },
  { "product_id": 3, "title": "Widget C", "image": "https://picsum.photos/id/40/200" }
]
const contentsData: ContentType[] = [
  { "type": "html", "contents": "<p>This is row 1 of content.</p>", "position": "row-1" },
  { "type": "html", "contents": "<p>This is row 3 of content.</p>", "position": "row-3" }
]

let contentsDataGrouped = groupBy(contentsData, (content) => (content.position));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Products</h1>
      </header>
      <section className="main">
        {contentsDataGrouped['row-1']?.map((content: ContentType) => (
          <Content {...content} />
        ))}
        <div className="row">
          {productsData.map(({ product_id, title, image }) => (
            <Product id={product_id} title={title} imageUrl={image} />
          ))}
        </div>
        {contentsDataGrouped['row-3']?.map((content: ContentType) => (
          <div className="row" dangerouslySetInnerHTML={{ __html: content.contents }}></div>
        ))}
      </section>
    </div>
  );
}

export default App;

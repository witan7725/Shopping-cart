import 'bootstrap/dist/css/bootstrap.min.css';
import fishimg1 from './assets/images/fish1.jpg';
import fishimg2 from './assets/images/fish2.jpg';
import fishimg3 from './assets/images/fish3.jpg';
import fishimg4 from './assets/images/fish4.jpg';
import fishimg5 from './assets/images/fish5.jpg';
import fishimg6 from './assets/images/fish6.jpg';
import fishimg7 from './assets/images/fish7.jpg';
import fishimg8 from './assets/images/fish8.jpg';
import fishimg9 from './assets/images/fish9.jpg';
import fishimg10 from './assets/images/fish10.jpg';



const products = [
  { id: 1, name: 'Fish 1', price: 125, image: fishimg1 },
  { id: 2, name: 'Fish 2', price: 150, image: fishimg2 },
  { id: 3, name: 'Fish 3', price: 200, image: fishimg3 },
  { id: 4, name: 'Fish 4', price: 250, image: fishimg4 },
  { id: 5, name: 'Fish 5', price: 300, image: fishimg5 },
  { id: 6, name: 'Fish 6', price: 350, image: fishimg6 },
  { id: 7, name: 'Fish 7', price: 400, image: fishimg7 },
  { id: 8, name: 'Fish 8', price: 450, image: fishimg8 },
  { id: 9, name: 'Fish 9', price: 300, image: fishimg9 },
  { id: 10, name: 'Fish 10', price: 450, image: fishimg10 },
];



export default function Product({ onAdd }) {
  return (
    <div className="row">
      {products.map(product => (
        <div key={product.id} className="col-md-6 mb-4">
          <div className="card">
            <img 
              src={product.image} 
              className="card-img-top" 
              alt={product.name} 
              style={{ height: '200px', objectFit: 'cover' }} 
            />
            <div className="card-body">
              <h3 className="card-title">{product.name}</h3>
              <p className="card-text">Price: {product.price} THB</p>
              <button className="btn btn-primary" onClick={() => onAdd(product)}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Product from './Product';
import Cart from './Cart';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [discount, setDiscount] = useState(0);

  const handleAddToCart = (product) => {
    const exist = cartItems.find(item => item.id === product.id);
    if (exist) {
      setCartItems(cartItems.map(item => 
        item.id === product.id ? { ...exist, qty: exist.qty + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const handleRemoveFromCart = (product) => {
    const exist = cartItems.find(item => item.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter(item => item.id !== product.id));
    } else {
      setCartItems(cartItems.map(item => 
        item.id === product.id ? { ...exist, qty: exist.qty - 1 } : item
      ));
    }
  };

  const applyCoupon = (code) => {
    if (code === 'DISCOUNT100') {
      setDiscount(100);
    } else {
      alert('Invalid coupon');
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-5">Fish Shop</h1>
      <Product onAdd={handleAddToCart} />
      <Cart 
        cartItems={cartItems} 
        onRemove={handleRemoveFromCart} 
        discount={discount} 
        applyCoupon={applyCoupon} 
      />
    </div>
  );
}

export default App;

import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from 'react';

export default function Cart({ cartItems, onRemove, discount, applyCoupon }) {
  const [coupon, setCoupon] = useState('');

  const handleApplyCoupon = () => {
    applyCoupon(coupon);
    setCoupon('');
  };

  return (
    <div className="mt-4">
      <h2 className="mb-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <div className="alert alert-info">Your cart is empty</div>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Product</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map(item => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.price} THB</td>
                <td>{item.qty}</td>
                <td>
                  <button className="btn btn-danger" onClick={() => onRemove(item)}>
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <div className="mt-3">
        <h5>Total: {cartItems.reduce((total, item) => total + item.price * item.qty, 0)} THB</h5>
        <h5>Discount: {discount} THB</h5>
        <h5>Final Total: {cartItems.reduce((total, item) => total + item.price * item.qty, 0) - discount} THB</h5>
      </div>
      <div className="mt-3">
        <input
          type="text"
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
          placeholder="Enter coupon code"
          className="form-control d-inline w-50"
        />
        <button onClick={handleApplyCoupon} className="btn btn-success ml-2">
          Apply Coupon
        </button>
      </div>
    </div>
  );
}

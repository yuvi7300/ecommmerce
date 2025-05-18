// App.js
import React, { useState } from 'eact';
import ReactDOM from 'eact-dom';

function App() {
  const [cart, setCart] = useState([]);
  const [checkout, setCheckout] = useState(false);
  const [userDetails, setUserDetails] = useState({});

  const items = [
    { id: 1, name: 'Item 1', price: 10.99 },
    { id: 2, name: 'Item 2', price: 9.99 },
    { id: 3, name: 'Item 3', price: 12.99 },
  ];

  const handleAddToCart = (item) => {
    setCart([...cart, item]);
  };

  const handleCheckout = () => {
    setCheckout(true);
  };

  const handleUserDetailsChange = (event) => {
    setUserDetails({...userDetails, [event.target.name]: event.target.value });
  };

  const handlePlaceOrder = () => {
    console.log('Order placed:', userDetails, cart);
    // Send request to server to place order
  };

  return (
    <div id="root">
      {checkout? (
        <Checkout
          userDetails={userDetails}
          handleUserDetailsChange={handleUserDetailsChange}
          handlePlaceOrder={handlePlaceOrder}
        />
      ) : (
        <Shop
          items={items}
          cart={cart}
          handleAddToCart={handleAddToCart}
          handleCheckout={handleCheckout}
        />
      )}
    </div>
  );
}

function Shop({ items, cart, handleAddToCart, handleCheckout }) {
  return (
    <div>
      <h1>Shop</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <span>{item.name}</span>
            <span>${item.price}</span>
            <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
          </li>
        ))}
      </ul>
      <p>Cart: {cart.length} items</p>
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
}

function Checkout({ userDetails, handleUserDetailsChange, handlePlaceOrder }) {
  return (
    <div>
      <h1>Checkout</h1>
      <form>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={userDetails.name}
            onChange={handleUserDetailsChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={userDetails.email}
            onChange={handleUserDetailsChange}
          />
        </label>
        <br />
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={userDetails.address}
            onChange={handleUserDetailsChange}
          />
        </label>
        <br />
        <button onClick={handlePlaceOrder}>Place Order</button>
      </form>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
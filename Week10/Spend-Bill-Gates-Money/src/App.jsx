import ProductList from './components/ProductList';
import { products } from './data/products';
import { useState } from 'react';
import './App.css'
import PurchasedList from './components/PurchasedList';

function App() {

  const INTIAL_BALANCE = 100_000_000_000;

  const [balance, setBalance] = useState(INTIAL_BALANCE);
  const [purchased, setPurchased] = useState({});

  //Handle buying a product
  const handleBuy = (product) => {
    if (balance >= product.price) {
      setBalance(balance - product.price);

      //Update purchased state
      setPurchased((prev) => ({
        ...prev,
        [product.id]: {
          ...product,
          quantity: (prev[product.id]?.quantity || 0) + 1
        }
      }));
    }
  };

  //Handle selling a product
  const handleSell = (product) => {
    const existing = purchased[product.id];
    if (existing && existing.quantity > 0) {
      setBalance(balance + product.price);

      //Update purchased state
      setPurchased((prev) => ({
        ...prev,
        [product.id]: {
          ...product,
          quantity: existing.quantity - 1
        }
      }));
    }
  };

  return (
    <div className='container'>
      <h1>Spend Bill Gates' Money</h1>
      <h2>Balance: ${balance.toLocaleString()}</h2>
      <ProductList
        products={products}
        balance={balance}
        purchased={purchased}
        onBuy={handleBuy}
        onSell={handleSell}
      />

      <PurchasedList purchased={purchased} />
    </div>
  )
}

export default App

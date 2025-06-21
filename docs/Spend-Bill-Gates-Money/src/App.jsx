import ProductList from './components/ProductList';
import { products } from './data/products';
import { useState } from 'react';
import './App.css'
import PurchasedList from './components/PurchasedList';

function App() {

  const INTIAL_BALANCE = 100_000_000_000;

  const [balance, setBalance] = useState(INTIAL_BALANCE);
  const [purchased, setPurchased] = useState({});


  // Spawn dollar elements from random horizontal positions
  const triggerDollarRain = (count = 10) => {
    for (let i = 0; i < count; i++) {
      const dollar = document.createElement("div");
      dollar.className = "dollar";

      const left = Math.random() * 100;
      dollar.style.left = `${left}vw`;

      dollar.textContent = Math.random() < 0.2 ? "💸" : "$";

      document.body.appendChild(dollar);

      setTimeout(() => {
        dollar.remove();
      }, 2000);
    }
  };


  //Handle buying a product
  const handleBuy = (product, count = 1) => {
    const total = product.price * count;

    if (balance >= total) {
      setBalance((prev) => Number(prev) - total);

      //Update purchased state
      setPurchased((prev) => ({
        ...prev,
        [product.id]: {
          ...product,
          quantity: (prev[product.id]?.quantity || 0) + count
        }
      }));

      triggerDollarRain(Math.min(count, 30));
    }
  };

  //Handle selling a product
  const handleSell = (product, count = 1) => {
    const existing = purchased[product.id];
    if (existing && existing.quantity > 0) {
      const actualCount = Math.min(count, existing.quantity)

      setBalance((prev) => Number(prev) + product.price * actualCount);

      //Update purchased state
      setPurchased((prev) => ({
        ...prev,
        [product.id]: {
          ...product,
          quantity: existing.quantity - actualCount
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

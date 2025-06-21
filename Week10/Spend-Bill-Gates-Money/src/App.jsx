import ProdductList from './components/ProductList';
import { products } from './data/products';
import { useState } from 'react';
import './App.css'

function App() {

  const INTIAL_BALANCE = 100_000_000_000;

  const [balance, setBalance] = useState(INTIAL_BALANCE);
  const [purchased, setPurchased] = useState({});

  //Handle buying a product
  const handleBuy = (product) => {

  };

  //Handle selling a product
  const handleSell = (product) => {

  };

  return (
    <>
      <ProdductList
        products={products}
        balance={balance}
        purchased={purchased}
        onBuy={handleBuy}
        onSell={handleSell}
      />
    </>
  )
}

export default App

import { Routes, Route } from 'react-router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './components/Header'
import Home from './pages/home/Home';
import CheckOut from './pages/CheckOut/CheckOut'
import Orders from './pages/Orders/Orders'
import Tracking from './pages/Tracking'
import ErrorPage from './pages/ErrorPage';

function App() {
  const [cart, setCart] = useState([]);

  const LoadCart = async () => {
    const response = await axios.get('/api/cart-items?expand=product');
    setCart(response.data);
  }

  useEffect(() => {
    LoadCart();
  }, [])

  return (
    <>
      <Routes>
        <Route index element={<Home cart={cart} LoadCart={LoadCart} />} />
        <Route path='checkout' element={<CheckOut cart={cart} LoadCart={LoadCart}/>} />
        <Route path='orders' element={<Orders cart={cart} />} />
        <Route path='tracking/:orderId/:productId' element={<Tracking cart={cart} />} />
        <Route
          path="*"
          element={<ErrorPage cart={cart} />}
        />
      </Routes>
    </>
  )
}

export default App

import { Routes, Route } from 'react-router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './components/Header'
import Home from './pages/Home';
import CheckOut from './pages/CheckOut'
import Orders from './pages/Orders'
import Tracking from './pages/Tracking'
import ErrorPage from './pages/ErrorPage';

function App() {
  const [cart, setCart] = useState([]);

  useEffect(()=>{
    axios.get('/api/cart-items?expand=product').then((response)=>{
      setCart(response.data);
    })
  },[])

  return (
    <>
      <Routes>
        <Route index element={<Home cart={cart} />} />
        <Route path='checkout' element={<CheckOut cart={cart}/>} />
        <Route path='orders' element={<Orders cart={cart}/>} />
        <Route path='tracking' element={<Tracking cart={cart}/>} />
        <Route
          path="*"
          element={<ErrorPage/>}
        />
      </Routes>
    </>
  )
}

export default App

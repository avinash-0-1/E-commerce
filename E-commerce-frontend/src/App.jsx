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
    axios.get('http://localhost:3000/api/cart-items').then((response)=>{
      setCart(response);
    })
  },[])

  return (
    <>
      <Routes>
        <Route index element={<Home cart={cart} />} />
        <Route path='checkout' element={<CheckOut cart={cart}/>} />
        <Route path='orders' element={<Orders />} />
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

import { useState, useEffect } from 'react'
import axios from 'axios'
import Header from '../../components/Header'
import './Orders.css'
import OrdersGrid from './OrdersGrid'

function Orders({ cart , LoadCart}) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const ordersData = async()=>{
     const response = await axios.get(`/api/orders?expand=products`)
     setOrders(response.data);
    }
    ordersData();
  }, [])

  return (
    <>
      <Header cart={cart} />
      
      <div className="orders-page">
        <div className="page-title">Your Orders</div>

        <OrdersGrid orders={orders} LoadCart={LoadCart}/>
      </div>
    </>
  )
}

export default Orders
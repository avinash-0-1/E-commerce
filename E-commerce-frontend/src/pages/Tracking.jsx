import { useState, useEffect } from 'react'
import dayjs from 'dayjs'
import Header from '../components/Header'
import { useParams, Link } from 'react-router'
import './Tracking.css'
import axios from 'axios';


function Tracking({ cart }) {
  const { orderId, productId } = useParams();
  const [order, setOrder] = useState(null)

  useEffect(() => {
    const loadOrder = async () => {
      const response = await axios.get(`/api/orders/${orderId}?expand=products`)
      setOrder(response.data)
    }
    loadOrder()
  }, [orderId])

  if (!order) {
    return null;
  }

  const orderProduct = order.products.find((item) => {
    return item.product.id === productId;
  });

  if (!orderProduct) {
    return <p>Product not found.</p>;
  }

  const totalDeliveryTimeMs = orderProduct.estimatedDeliveryTimeMs - order.orderTimeMs;
  const timePassedMs = dayjs().valueOf() - order.orderTimeMs

  const deliveryPercent = Math.min((timePassedMs / totalDeliveryTimeMs) * 100, 100);


    const isPreparing = deliveryPercent < 33;

    const isShipped = deliveryPercent >=33 && deliveryPercent < 100;

    const isDelivered = deliveryPercent === 100;
  


  return (
    <>
      <Header cart={cart} />

      <div className="tracking-page">
        <div className="order-tracking">
          <Link className="back-to-orders-link link-primary" to="/orders">
            View all orders
          </Link>

          <div className="delivery-date">
            {dayjs(orderProduct.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
          </div>

          <div className="product-info">
            {orderProduct.product.name}
          </div>

          <div className="product-info">
            Quantity: {orderProduct.quantity}
          </div>

          <img className="product-image" src={`${orderProduct.product.image}`} alt={`${orderProduct.product.name}`} />

          <div className="progress-labels-container">
            <div className={`progress-label ${isPreparing && 'current-status'}`}>
              Preparing
            </div>
            <div className={`progress-label ${isShipped && 'current-status'}`}>
              Shipped
            </div>
            <div className={`progress-label ${isDelivered && 'current-status'}`}>
              Delivered
            </div>
          </div>

          <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: `${deliveryPercent}%`, color: 'red' }}></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Tracking
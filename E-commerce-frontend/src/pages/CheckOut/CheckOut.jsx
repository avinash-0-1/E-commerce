import { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router'
// import Header from '../../components/Header'    HW FOR ME..!!
import OrderSummary from './OrderSummary/OrderSummary';
import PaymentSummary from './PaymentSummary';
import './CheckOut.css'

function CheckOut({ cart, LoadCart }) {
  const [deliveryOpt, setDeliveryOpt] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState(null);

  useEffect(() => {
    const fetchCheckOutData = async () => {

      let response = await axios.get('/api/payment-summary')
      setPaymentSummary(response.data);

      response = await axios.get('/api/delivery-options?expand=estimatedDeliveryTime')
      setDeliveryOpt(response.data)

    }

    fetchCheckOutData();
  }, [cart])
  return (
    <>
      <title>Check Out</title>

      <div className="checkout-header">
        <div className="header-content">
          <div className="checkout-header-left-section">
            <Link to="/">
              <img className="logo" src="images/logo.png" />
              <img className="mobile-logo" src="images/mobile-logo.png" />
            </Link>
          </div>

          <div className="checkout-header-middle-section">
            Checkout (<Link className="return-to-home-link"
              to="/">3 items</Link>)
          </div>

          <div className="checkout-header-right-section">
            <img src="images/icons/checkout-lock-icon.png" />
          </div>
        </div>
      </div>

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <OrderSummary cart={cart} deliveryOpt={deliveryOpt} LoadCart={LoadCart} />

          <PaymentSummary paymentSummary={paymentSummary} />
        </div>
      </div>
    </>
  )
}

export default CheckOut
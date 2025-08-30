import React from 'react'
import DeliveryOptions from './DeliveryOptions'
import DeliveryDateLogic from './DeliveryDateLogic'
import CartItemDetails from './cartItemDetails'

function OrderSummary({ cart, deliveryOpt ,LoadCart }) {
  return (
    <div className="order-summary">
      {deliveryOpt.length > 0 && cart.map((cartItem) => {

        return (
          <div key={cartItem.productId} className="cart-item-container">
            <div className="delivery-date">
              Delivery date: <DeliveryDateLogic cartItem={cartItem} deliveryOpt={deliveryOpt} />
            </div>

            <div className="cart-item-details-grid">

              <CartItemDetails cartItem={cartItem} />

              <DeliveryOptions cartItem={cartItem} deliveryOpt={deliveryOpt} LoadCart={LoadCart} />
            </div>
          </div>
        );
      })}

    </div>
  )
}

export default OrderSummary
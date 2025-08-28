import React from 'react'
import dayjs from 'dayjs'
import formateMoney from '../../utils/Money'
import DeliveryOptions from './DeliveryOptions'

function OrderSummary({cart,deliveryOpt}) {
  return (
    <div className="order-summary">
            {deliveryOpt.length > 0 && cart.map((cartItem) => {
              const selectedDeliveryOption = deliveryOpt
                .find((deliveryOption) => {
                  return deliveryOption.id === cartItem.deliveryOptionId
                })

              return (
                <div key={cartItem.productId} className="cart-item-container">
                  <div className="delivery-date">
                    Delivery date: {dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format('dddd , MMMM D')}
                  </div>

                  <div className="cart-item-details-grid">
                    <img className="product-image"
                      src={cartItem.product.image} />

                    <div className="cart-item-details">
                      <div className="product-name">
                        {cartItem.product.name}
                      </div>
                      <div className="product-price">
                        {formateMoney(cartItem.product.priceCents)}
                      </div>
                      <div className="product-quantity">
                        <span>
                          Quantity: <span className="quantity-label">{cartItem.quantity}</span>
                        </span>
                        <span className="update-quantity-link link-primary">
                          Update
                        </span>
                        <span className="delete-quantity-link link-primary">
                          Delete
                        </span>
                      </div>
                    </div>
                    
                    <DeliveryOptions cartItem={cartItem} deliveryOpt={deliveryOpt}/>
                  </div>
                </div>
              );
            })}

          </div>
  )
}

export default OrderSummary
import React from 'react'
import formateMoney from '../../../utils/Money'
import dayjs from 'dayjs'
import axios from 'axios'


function DeliveryOptions({deliveryOpt,cartItem , LoadCart}) {
    return (
        <div className="delivery-options">
            <div className="delivery-options-title">
                Choose a delivery option:
            </div>
            {deliveryOpt.map((deliveryOption) => {
                let priceString = 'FREE Shipping'

                if (deliveryOption.priceCents > 0) {
                    priceString = `${formateMoney(deliveryOption.priceCents)} - Shipping`
                }

                const updateDeliveryOptions = async()=> {
                    await axios.put(`/api/cart-items/${cartItem.productId}`,{
                        deliveryOptionId: deliveryOption.id
                    })
                    await LoadCart();
                }

                return (
                    <div key={deliveryOption.id} className="delivery-option"
                        onClick={updateDeliveryOptions}
                    >
                        <input type="radio"
                            checked={deliveryOption.id === cartItem.deliveryOptionId}

                            onChange={()=>{/*empty function just to avoid error msg*/}}

                            className="delivery-option-input"
                            name={`delivery-option-${cartItem.productId}`} />
                        <div>
                            <div className="delivery-option-date">
                                {dayjs(deliveryOption.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
                            </div>
                            <div className="delivery-option-price">
                                {priceString}
                            </div>
                        </div>
                    </div>
                )
            })
            }
        </div>
    )
}

export default DeliveryOptions
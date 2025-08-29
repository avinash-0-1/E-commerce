import React from 'react'
import dayjs from 'dayjs'

function DeliveryDateLogic({deliveryOpt , cartItem}) {
    const selectedDeliveryOption = deliveryOpt
        .find((deliveryOption) => {
            return deliveryOption.id === cartItem.deliveryOptionId
        })
        const date = dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format('dddd , MMMM D')
    return date;
}

export default DeliveryDateLogic
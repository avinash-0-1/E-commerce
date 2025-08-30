import axios from 'axios'
import formateMoney from '../../../utils/Money'
import { useState } from 'react'

function CartItemDetails({ cartItem, LoadCart }) {
    const [updateBox, setUpdateBox] = useState(false)
    const [quantityItem, setQuantityItem] = useState(cartItem.quantity)

    const deleteCartItem = async () => {
        await axios.delete(`/api/cart-items/${cartItem.productId}`)
        await LoadCart();
    }

    const isUpdate = async () => {

        if (updateBox) {
            await axios.put(`/api/cart-items/${cartItem.productId}`, {
                quantity: Number(quantityItem)
            })
            await LoadCart();
            setUpdateBox(false)
        }
        else {
            setUpdateBox(true)
        }
    }

    const updateQuantity = (event) => {
        setQuantityItem(event.target.value);
    }

    const QuantityHandler = (event)=>{

        if(event.key === 'Enter'){
            isUpdate()
            console.log('enter pressed')
        }

        if(event.key === 'Escape'){
            setQuantityItem(cartItem.quantity)
            setUpdateBox(false)
            console.log('escape pressed')
        }
    }

    return (
        <>
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
                        Quantity:
                        <input className="quantity-update-box" type="text"
                            onKeyDown={QuantityHandler}
                            style={{ width: '25px', opacity: updateBox ? 1 : 0 }}
                            onChange={updateQuantity} value={quantityItem}
                        />
                        <span className="quantity-label">{cartItem.quantity}</span>
                    </span>

                    <span className="update-quantity-link link-primary"
                        onClick={isUpdate}
                    >
                        Update
                    </span>
                    <span className="delete-quantity-link link-primary"
                        onClick={deleteCartItem}
                    >
                        Delete
                    </span>
                </div>
            </div>
        </>
    )
}

export default CartItemDetails
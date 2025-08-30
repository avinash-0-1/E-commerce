import React from 'react'
import dayjs from 'dayjs';
import formateMoney from '../../utils/Money';
import { Fragment } from 'react';
import { Link } from 'react-router';
import axios from 'axios';

function OrdersGrid({ orders, LoadCart }) {

    async function AddToCart(prdId) {
        await axios.post('/api/cart-items', {
            productId: prdId,
            quantity: 1,

        })

        LoadCart();
        console.log('now i have to do somthing here so that it gets added to the cart!!')
    }

    return (
        <div className="orders-grid">
            {orders.map((order) => {
                return (
                    <div key={order.id} className="order-container">

                        <div className="order-header">
                            <div className="order-header-left-section">
                                <div className="order-date">
                                    <div className="order-header-label">Order Placed:</div>
                                    <div>
                                        {dayjs(order.orderTimeMs).format('MMMM D')}
                                    </div>
                                </div>
                                <div className="order-total">
                                    <div className="order-header-label">Total:</div>
                                    <div>
                                        {formateMoney(order.totalCostCents)}
                                    </div>
                                </div>
                            </div>

                            <div className="order-header-right-section">
                                <div className="order-header-label">Order ID:</div>
                                <div>
                                    {order.id}
                                </div>
                            </div>
                        </div>

                        <div className="order-details-grid">
                            {order.products.map((ordProduct) => {
                                return (
                                    <Fragment key={ordProduct.product.id}>
                                        <div className="product-image-container">
                                            <img src={ordProduct.product.image} />
                                        </div>

                                        <div className="product-details">
                                            <div className="product-name">
                                                {ordProduct.product.name}
                                            </div>

                                            <div className="product-delivery-date">
                                                Arriving on:{" "}
                                                {dayjs(ordProduct.estimatedDeliveryTimeMs).format("MMMM D")}
                                            </div>

                                            <div className="product-quantity">
                                                Quantity: {ordProduct.quantity}
                                            </div>

                                            <button className="buy-again-button button-primary"
                                                onClick={() => { AddToCart(ordProduct.product.id) }}
                                            >
                                                <img
                                                    className="buy-again-icon"
                                                    src="images/icons/buy-again.png"
                                                />
                                                <span className="buy-again-message">
                                                    Add to Cart
                                                </span>
                                            </button>
                                        </div>

                                        <div className="product-actions">
                                            <Link to={`/tracking/${order.id}/${ordProduct.product.id}`}>
                                                <button className="track-package-button button-secondary">
                                                    Track package
                                                </button>
                                            </Link>
                                        </div>
                                    </Fragment>
                                );
                            })}
                        </div>

                    </div>
                )
            })}
        </div>
    )
}

export default OrdersGrid
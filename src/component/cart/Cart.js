import React from "react";
import "./cart.scss"
import { useSelector, useDispatch } from "react-redux";
import { remove, decreaseCart, increaseCart, clearCart } from "./cartSlice";
import { Link } from "react-router-dom";


const Cart = () => {
    const cartItems = useSelector(state => state.cart.cartItems)
    console.log(cartItems)
    const cartItemCount = cartItems.reduce((total, product) => total + product.cartQuantity, 0);
    const dispatch = useDispatch();
    const removeToCart = (id) => {
        dispatch(remove(id));
    }
    const handleClearCart = () => {
        dispatch(clearCart())
    }
    const handleDecreaseCart = (product) => {
        dispatch(decreaseCart(product));
    }
    const handleIncreaseCart = (product) => {
        dispatch(increaseCart(product))
    }
    return (
        <>
            <div className="cart-container">
                <h2>Shopping Cart</h2>
                {cartItemCount === 0 ? (
                    <div className="cart-empty">
                        <p>Your cart is currently empty</p>
                        <div className="start-shopping">
                            <Link to="/">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    fill="currentColor"
                                    className="bi bi-arrow-left"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                                    />
                                </svg>
                                <span>Start Shopping</span>
                            </Link>
                        </div>
                    </div>
                ) : (
                    <div>
                        <div className="titles">
                            <h3 className="product-title">Product</h3>
                            <h3 className="price">Price</h3>
                            <h3 className="quantity">Quantity</h3>
                            <h3 className="total">Total</h3>
                        </div>
                        <div className="cart-items">
                            {cartItems && cartItems.map((product) => (
                                <div className="cart-item" key={product.id}>
                                    <div className="cart-product">
                                        {product.images && product.images.length > 0 ? (
                                            <img src={product.images[0]} alt={product.title} />
                                        ) : (
                                            <img src="default-image-url" alt="Default" />
                                        )}

                                        <div>
                                            <h3>{product.title}</h3>
                                            <p>{product.description}</p>
                                            <button onClick={() => removeToCart(product.id)}>
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                    <div className="cart-product-price">${product.price}</div>
                                    <div className="cart-product-quantity">
                                        <button onClick={() => handleDecreaseCart(product)}>
                                            -
                                        </button>
                                        <div className="count">{product.cartQuantity}</div>
                                        <button onClick={() => handleIncreaseCart(product)}>
                                            +
                                        </button>
                                    </div>
                                    <div className="cart-product-total-price">
                                        ${product.price * product.cartQuantity}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="cart-summary">
                            <button onClick={handleClearCart} className="clear-btn">
                                Clear Cart
                            </button>
                            <div className="cart-checkout">
                                <div className="subtotal">
                                    <span>Subtotal</span>
                                    <span className="amount">${cartItems.reduce((total, product) => total + product.price * product.cartQuantity, 0)}</span>
                                </div>
                                <p>Taxes and shipping calculated at checkout</p>
                                <button>Check out</button>
                                <div className="continue-shopping">
                                    <Link to="/">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            fill="currentColor"
                                            className="bi bi-arrow-left"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                                            />
                                        </svg>
                                        <span>Continue Shopping</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    )

}
export default Cart;
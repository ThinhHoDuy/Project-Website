import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchAsyncProducts, getProducts } from "./productSlice";
import { add, decreaseCart, increaseCart } from "../cart/cartSlice";
import "../product/productSingle.scss"
const ProductSingle = () => {
    const { id }  = useParams();
    const dispatch = useDispatch();
    const productId = parseInt(id) - 1
    const product = useSelector(state => getProducts(state)[productId]);
    console.log(product)
    useEffect(() => {
        dispatch(fetchAsyncProducts(id));
    }, [dispatch, id]);
    const handleDecreaseCart = (product) => {
        dispatch(decreaseCart(product));
    }
    const handleIncreaseCart = (product) => {
        dispatch(increaseCart(product));
    }
    const addToCart = (product) => {
        dispatch(add(product));
    }

    return (
        <>
            <div className="product-single">
                <div className="product-items">
                    <div className="product-img">
                        <img src={product ? (product.images ? product.images[0] : "") : ""} alt="" className="product-images"></img>
                    </div>
                    <div className="product-img-mini">
                        <div>
                            <img src={product ? (product.images ? product.images[1] : "") : ""} alt="" className="product-images-mini"></img>
                        </div>
                        <div>
                            <img src={product ? (product.images ? product.images[2] : "") : ""} alt="" className="product-images-mini"></img>
                        </div>
                        <div>
                            <img src={product ? (product.images ? product.images[3] : "") : ""} alt="" className="product-images-mini"></img>
                        </div>
                        <div>
                            <img src={product ? (product.images ? product.images[4] : "") : ""} alt="" className="product-images-mini"></img>
                        </div>

                    </div>
                </div>
                <div className="product-content">
                    <h1>{product.title}</h1>
                    <h6>{product.description}</h6>
                    <div className="product-text">
                        <div className="rating">
                            <span className="text-rt">Rating:</span>
                            <span className="text-1">{product.rating}</span>
                        </div>
                        <div className="line"></div>
                        <div className="brand">
                            <span className="text-rt">Brand:</span>
                            <span className="text-1">{product.brand}</span>
                        </div>
                        <div className="line"></div>
                        <div className="category">
                            <span className="text-rt">Category:</span>
                            <span className="text-1">{product.category}</span>
                        </div>
                    </div>
                    <div className="product-price">
                        <div className="price">
                            <h4 className="text-price">${product.price}</h4>
                            <h7 className="text">Nay chỉ còn:</h7>
                        </div>
                        <div>
                            <h3>${Math.round(product.price - (product.price * product.discountPercentage / 100))}</h3>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div className="cart-product-quantity">
                                <button onClick={() => handleDecreaseCart(product)}>
                                    -
                                </button>
                                {/* <div className="count">{product.Quantity}</div> */}
                                <button onClick={() => handleIncreaseCart(product)}>
                                    +
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button className="button-cart" onClick={() => addToCart(product)}>Add to cart</button>
                    </div>
                </div>
            </div>

        </>
    )
}
export default ProductSingle;
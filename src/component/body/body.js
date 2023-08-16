import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../product/productSlice";
import { add } from "../cart/cartSlice";
import './body.scss'

const Body = () => {
    const dispatch = useDispatch();
    const products = useSelector(getProducts);
    console.log(products)
    const productToShow = products[5];
    const productToShow1 = products[1];
    const productToShow2 = products[8];
    const productToShow3 = products[3];
    const addToCart = (product) => {
        dispatch(add(product));
    }

    return (
        <>
                <div id="content">
                    <div className="content-section">
                        <div class="divider">BEST SELLER</div>
                        <p className="section-sub-heading"> Giảm ngay 10% khi mua trên 2 sản phẩm </p>
                        <div className="product-list">
                            <div key={productToShow.id} className="product-item">
                                <img src={productToShow.images[0]} alt="Ten san pham" className="product-img"></img>
                                <p className="product-name">{productToShow.title}</p>
                                <button className="product-button" onClick={() => addToCart(productToShow)}>Add to cart</button>
                            </div>
                            <div className="product-item">
                                <img src={productToShow1.images[0]} alt="Ten san pham" className="product-img"></img>
                                <p className="product-name">{productToShow1.title}</p>
                                <button className="product-button" onClick={() => addToCart(productToShow1)}>Add to cart</button>
                            </div>
                            <div className="product-item">
                                <img src={productToShow2.images[0]} alt="Ten san pham" className="product-img"></img>
                                <p className="product-name">{productToShow2.title}</p>
                                <button className="product-button" onClick={() => addToCart(productToShow2)}>Add to cart</button>
                            </div>
                            <div className="product-item">
                                <img src={productToShow3.images[0]} alt="Ten san pham" className="product-img"></img>
                                <p className="product-name">{productToShow3.title}</p>
                                <button className="product-button" onClick={() => addToCart(productToShow3)}>Add to cart</button>
                            </div>

                        </div>
                    </div>
                </div>
          
        </>
    )
}
export default Body;
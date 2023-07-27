import React from "react";
import './body.scss'

const Body = () => {
    return (
        <div id="content">
            <div className="content-section">
                <div class="divider">BEST SELLER</div>
                <p className="section-sub-heading"> Giảm ngay 10% khi mua trên 2 sản phẩm </p>
                <div className="product-list">
                    <div className="product-item">
                        <img src="https://preview.colorlib.com/theme/fashe/images/item-02.jpg.webp" alt="Ten san pham" className="product-img"></img>
                        <p className="product-name">Ten san pham</p>
                        <button className="product-button">Add to cart</button>
                    </div>
                    <div className="product-item">
                        <img src="https://preview.colorlib.com/theme/fashe/images/item-03.jpg.webp" alt="Ten san pham" className="product-img"></img>
                        <p className="product-name">Ten san pham</p>
                        <button className="product-button">Add to cart</button>
                    </div>
                    <div className="product-item">
                        <img src="https://preview.colorlib.com/theme/fashe/images/item-04.jpg.webp" alt="Ten san pham" className="product-img"></img>
                        <p className="product-name">Ten san pham</p>
                        <button className="product-button">Add to cart</button>
                    </div>
                    <div className="product-item">
                        <img src="https://preview.colorlib.com/theme/fashe/images/item-05.jpg.webp" alt="Ten san pham" className="product-img"></img>
                        <p className="product-name">Ten san pham</p>
                        <button className="product-button">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Body;
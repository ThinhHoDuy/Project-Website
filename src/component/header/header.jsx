import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import './header.scss'

const Header = () => {
    const cartItems = useSelector(state => state.cart.cartItems);
    const cartItemCount = cartItems.reduce((total, product) => total + product.cartQuantity, 0);
    return (
        <div id="header">
            <div className="logo">
                <a href="/">
                    <img alt="" src="https://preview.colorlib.com/theme/fashe/images/icons/logo.png.webp" />
                </a>
            </div>
            <ul id="nav">
                <li className="Login1">
                    <Link to="/">Trang chủ</Link>
                </li>
                <li className="Login2">
                    <Link to="/product">Sản phẩm</Link>
                </li>
                <li className="Login3">
                    <Link to="/order">Thông tin</Link>
                </li>
                <li className="Login4">
                    <Link to="#">Liên hệ</Link>
                </li>
                <li>
                    <Link to="/admin">
                        <i class="fa-solid fa-user"></i>
                    </Link>
                </li>
                <li>
                    <Link to="/cart">
                        <i className="fa-solid fa-cart-shopping"></i>
                        <span className="icons-noti">{cartItemCount}</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Header;
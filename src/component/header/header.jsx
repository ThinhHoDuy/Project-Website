import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import './header.scss'

const Header = () => {
    const cartProducts = useSelector(state => state.cart);
    const cartItemCount = Object.keys(cartProducts).length;

    return (
        <div id="header">
            <div className="logo">
                <a href="/">
                    <img alt="" src="https://preview.colorlib.com/theme/fashe/images/icons/logo.png.webp"/>
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
                    <Link to="">
                        <i className="fa-solid fa-magnifying-glass Search"></i>
                    </Link>
                </li>
                <li>
                    <Link to="/cart">
                        <i className="fa-solid fa-cart-shopping">{cartItemCount}</i>    
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Header;
import React from "react";
import { Col } from "antd";
import { WrapperHeader, WrapperTextHeader, WrapperHeaderAccount, WrapperTextHeaderSmall } from "./style";
import { UserOutlined } from '@ant-design/icons';
import { CaretDownOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import ButtonInputSearch from "../buttonSearch/buttonInputSearch";
import NavBar from "./navBar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';

const Header = () => {
    const cartProducts = useSelector(state => state.cart);
    const cartItemCount = Object.keys(cartProducts).length;

    return (
        <header style={{ height: '65px', position: 'fixed', top: 0, left: 0, right: 0, zIndex: 999 }}>
            <WrapperHeader gutter={20}>
                <Col span={6}>
                    <WrapperTextHeader>Vinamilk EST 1976</WrapperTextHeader>
                </Col>
                <Col span={12}>
                    <ButtonInputSearch
                        size="large"
                        placeholder="input search text"
                        textButton="Tìm kiếm"
                    />
                </Col>
                <Col span={6} style={{ display: 'flex', gap: '35px' }}>
                    <WrapperHeaderAccount>
                        <div>
                            <UserOutlined style={{ fontSize: '30px' }} />
                        </div>
                        <div>
                            <WrapperTextHeaderSmall>Đăng nhập</WrapperTextHeaderSmall> <br />
                            <div>
                                <WrapperTextHeaderSmall>Tài khoản</WrapperTextHeaderSmall>
                                <CaretDownOutlined />
                            </div>
                        </div>
                    </WrapperHeaderAccount>
                    <div>
                        <li>
                            <Nav.Link className="nav-a" to="/cart" as={Link}>
                                <button style={{ backgroundColor: '#262626' }}>
                                    <ShoppingCartOutlined style={{ color: '#fff', fontSize: 30 }} />
                                    <WrapperTextHeaderSmall>Giỏ hàng {cartItemCount}</WrapperTextHeaderSmall>
                                </button>
                            </Nav.Link>

                        </li>
                    </div>
                </Col>
            </WrapperHeader>
            <div><NavBar /></div>
        </header>
    );
}

export default Header;
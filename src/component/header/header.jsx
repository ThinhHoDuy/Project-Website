import React from "react";
import { Col } from "antd";
// import Search from "antd/es/transfer/search";
import { Outlet } from "react-router-dom";
import { WrapperHeader, WrapperTextHeader, WrapperHeaderAccount, WrapperTextHeaderSmall } from "./style";
import { UserOutlined } from '@ant-design/icons';
import { CaretDownOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import ButtonInputSearch from "../buttonSearch/buttonInputSearch";
import NavBar from "./navBar";
const Header = () => {
    return (
        <>
            <div>
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
                            <ShoppingCartOutlined style={{color: '#fff',fontSize: 30}} />
                            <WrapperTextHeaderSmall>Giỏ hàng</WrapperTextHeaderSmall>
                        </div>
                    </Col>
                </WrapperHeader>
            </div>
            <NavBar />
            <main>
                <Outlet />
            </main>
        </>
    )
}
export default Header;

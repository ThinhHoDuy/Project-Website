import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
const NavBar = () => {
    return (
        <>
            <Navbar style={{ padding: 0}} bg="light" data-bs-theme="light">
                <Container>
                    {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
                    <Nav className="navbar-nav justify-content-center align-items-center fs-5 flex-grow-1 pe-3" >
                        <Nav.Link href="/home">Trang chủ</Nav.Link>
                        <Nav.Link href="/order">Giới thiệu</Nav.Link>
                        <Nav.Link href="/product">Sản phẩm</Nav.Link>
                        <Nav.Link href="#">Liên hệ</Nav.Link>
                    </Nav>
                </Container>
                </Navbar>
        </>
    )
}
export default NavBar;
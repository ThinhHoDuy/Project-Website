import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import { Link } from 'react-router-dom';
import './navBar.scss'
const NavBar = () => {
    return (
        <>
            <Navbar style={{ padding: 0}} bg="light" data-bs-theme="light">
                <Container>
                    {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
                    <Nav className="navbar-nav justify-content-center align-items-center fs-5 flex-grow-1 pe-3" >
                        <Nav.Link className='nav-link' to="/home" as={Link}>Trang chủ</Nav.Link>
                        <Nav.Link className='nav-link' to="/order" as={Link}>Giới thiệu</Nav.Link>
                        <Nav.Link className='nav-link' to="/product" as={Link}>Sản phẩm</Nav.Link>
                        <Nav.Link className='nav-link' to="#" as={Link}>Liên hệ</Nav.Link>
                    </Nav>
                </Container>
                </Navbar>
        </>
    )
}
export default NavBar;
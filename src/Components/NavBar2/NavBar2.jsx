import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import classes from './NavBar2.module.css'
// import MainContext from '../Store/MainContext';
// import { useContext } from 'react';
// import Button from 'react-bootstrap/Button';

const NavBar2 = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky='top'>
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src="images/Logo.jpg"
                            width="40"
                            height="35"
                            className="d-inline-block align-top me-3"
                        />
                        KhanSama Merchant</Navbar.Brand>
                    <div style={{ display: "flex" }}>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse className='ps-5'>
                            <Nav >
                                <Nav.Link as={Link} to="/ResturantPage" className={classes.link}>Home</Nav.Link>
                                <Nav.Link as={Link} to="/RStoreOrder" className={classes.link}>Orders</Nav.Link>
                                <Nav.Link as={Link} to="/" className={classes.link}>KhanSama</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Container>
            </Navbar>

        </>
    )
}

export default NavBar2

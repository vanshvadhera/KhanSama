import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import classes from './NavBar.module.css'
import MainContext from '../Store/MainContext';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';

const NavBar = ({children}) => {
    const MainCtx = useContext(MainContext)
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
                        KhanSama</Navbar.Brand>
                    <div style={{ display: "flex" }}>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse className='ps-5'>
                            <Nav >
                                <Nav.Link as={Link} to="/" className={classes.link}>Home</Nav.Link>
                                <Nav.Link as={Link} to="/Resturants" className={classes.link}>Resturants</Nav.Link>
                                <Nav.Link as={Link} to="/Help" className={classes.link}>Help</Nav.Link>
                                <Nav.Link as={Link} to="/Account" className={classes.link}>Account</Nav.Link>
                                <Nav.Link className={classes.link} onClick={MainCtx.ChangeShow} >Signup</Nav.Link>
                                <Nav.Link className="d-flex align-items-center ">
                                    <Button variant='light' onClick={MainCtx.ChangeCartShow} ><i className="fa-solid fa-cart-plus me-2"></i>Cart</Button>
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar

import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import classes from './SubNavbar.module.css'

const SubNavbar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className={classes.Navbar}>
            <Container>
                <Navbar.Brand>199 Resturants</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className="justify-content-end">
                    <Button className='m-2' variant='success' >Veg</Button>
                    <Button className='m-2' variant='danger' >Non-Veg</Button>
                    <Button className='m-2' variant='warning'>Ratings</Button>
                    <Button className='m-2' variant='info'>Preparation Time</Button>
                    <Button className='m-2' variant='primary' >Filters</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default SubNavbar

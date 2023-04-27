import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import classes from './AccountDetail.module.css'
import PastOrders from './PastOrders/PastOrders';
import RegisterForStore from './RegisterForStore/RegisterForStore';
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';
const AccountDetail = () => {
    return (
        <div className={classes.AccountDetail} >
            <Container>
                <Tabs
                    defaultActiveKey="pastOrders"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                    fill
                >
                    <Tab eventKey="pastOrders" title="Past Orders">
                        <PastOrders />
                    </Tab>
                    <Tab eventKey="Register" title="Register a Store">
                        <RegisterForStore />
                    </Tab>
                    <Tab eventKey="login" title="Login In Store" >
                        <h4 className='text-center'>Go To Your Store</h4>
                        <hr />
                        <p className='text-center'>Your Store is Missing for you </p>
                        <div className='d-flex justify-content-center'>
                            <Button variant='outline-danger'><Link style={{ textDecoration: "none", color: "red" }} to='/ResturantPage' >Go To Your Store</Link></Button>
                        </div>
                        <hr />
                    </Tab>
                </Tabs>
            </Container>
        </div>
    )
}

export default AccountDetail

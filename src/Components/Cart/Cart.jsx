import React from "react";
import { useContext } from "react";
import MainContext from "../Store/MainContext";
import classes from "./Cart.module.css";
import Modal from 'react-bootstrap/Modal';
import CartItem from "./CartItems/CartItems";
import Container from 'react-bootstrap/Container';

const Cart = (props) => {
    const MainCtx = useContext(MainContext)
    // const cartCtx = useContext(CartContext);
    // const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    // const hasItems = cartCtx.items.length > 0;
    // const cartItemRemoveHandler = (id) => {
    //     cartCtx.removeItem(id);
    // };
    // const cartItemAddHandler = (item) => {
    //     cartCtx.addItem({ ...item, amount: 1 })
    // };
    const cartitems = (
        <ul className={classes["cart-items"]}>
            <CartItem
                key="1"
                name="FarmHouse Pizzza"
                amount="2"
                price="250"
                onRemove=''
                onAdd=''
            />
        </ul>
    );
    return (
        <Modal show={MainCtx.CartShow} size="lg" >
            <Container>
                <div className="d-flex justify-content-center">
                    <Modal.Header><h1><i class="fa-solid fa-cart-shopping"> Cart</i></h1></Modal.Header>
                </div>
                {cartitems}
                <div className={classes.total}>
                    <span>Total Amount</span>
                    {/* <span>{totalAmount}</span> */}
                    <div>
                        <i class="fa-solid fa-indian-rupee-sign me-2"></i>
                        <span>250</span>
                    </div>
                </div>
                <div className={classes.actions}>
                    <button className={classes["button--alt"]} onClick={MainCtx.ChangeCartShow}>
                        Close
                    </button>
                    {/* {hasItems && <button className={classes.button}>Order</button>} */}
                    <button className={classes.button}>Order</button>
                </div>
            </Container>
        </Modal >
    );
};

export default Cart;
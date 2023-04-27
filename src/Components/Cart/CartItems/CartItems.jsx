import React from 'react'
import classes from '../CartItems/CartItems.module.css'

const CartItems = (props) => {
    // const price = `$${props.price.toFixed(2)}`;
    return (
        <li className={classes['cart-item']}>
            <div>
                <h2>{props.name}</h2>
                <div className={classes.summary}>
                    <div>
                        <i class="fa-solid fa-indian-rupee-sign me-2"></i><span className={classes.price}>{props.price}</span>
                    </div>
                    <span className={classes.amount}>x {props.amount}</span>
                </div>
            </div>
            <div className={classes.actions}>
                <button onClick={props.onRemove}>−</button>
                <button onClick={props.onAdd}>+</button>
            </div>
        </li>
    )
}

export default CartItems;

import React, { useContext } from "react";

import CartContext from "../../store/cart-context";
import CartIcon from '../Cart/CartIcon';
import styles from './HeaderCartButton.module.css';

const HeaderCartButton = props => {

    const cartCtx = useContext(CartContext);

    const numberOfItemsInCart = cartCtx.items.reduce((current, item) => { return current + item.amount }, 0);

    return (
        <button className={styles.button} onClick={props.onShowClick}>
            <span className={styles.icon}><CartIcon /></span>
            <span>Your Cart</span>
            <span className={styles.badge}>{numberOfItemsInCart}</span>
        </button>
    )
}

export default HeaderCartButton;
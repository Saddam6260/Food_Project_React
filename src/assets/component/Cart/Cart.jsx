import React from "react";

import classes from "./Cart.module.css";
import Modal from "../UI/Modal"

const Cart = (props) => {
  const cartItems = (
    <ul>
      {[{ id: "c1", name: "Sushi", ammount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return(
  <Modal>
    {cartItems}
    <div className={classes.total}>
        <span>Total ammount</span>
        <span>35.62</span>
    </div>
    <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
        <button className={classes.button}>Order</button>
    </div>
  </Modal>
  )
};

export default Cart;

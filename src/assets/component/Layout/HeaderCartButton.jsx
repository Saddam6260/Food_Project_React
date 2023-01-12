import React from "react";

import classes from "./HeaderCartButton.module.css"

const HeaderCartButton = (props) => {
  
  return (
    <button className={classes.button} onClick={props.showCart}>
      <span></span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;

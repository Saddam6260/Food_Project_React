import React from "react";

import classes from "./HeaderCartButton.module.css"

const HeaderCartButton = () => {
  return (
    <button className={classes.button}>
      <span></span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;

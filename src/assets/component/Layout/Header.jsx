import React from 'react'

import classes from "./Header.module.css"
import { Fragment } from "react"
import MealsImage from "../../images/food_image.jpg"
import HeaderCartButton from './HeaderCartButton'

const Header = () => {
  return (
    <div>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCartButton/>
        </header>
        <div className={classes['main-image']}>
            <img src={MealsImage} alt="No Image there" />
        </div>
    </div>
  )
}

export default Header
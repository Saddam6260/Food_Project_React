import React from 'react'

import classes from "./MealItemForm.module.css"
import Input from '../../UI/Input'

const MealItemForm = () => {
  return (
    <form className={classes.form}>
        <Input label="Ammount" input={{
            id: 'ammount',
            type: "number",
            min: '1',
            max: '5',
            defaultValue: '1'
        }}/>
        <button>+ Add</button>
    </form>
  )
}

export default MealItemForm
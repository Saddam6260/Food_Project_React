import React from "react";

import classes from "./Available.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and vaggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "Finest fish and vaggies",
    price: 10.99,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "Finest fish and vaggies",
    price: 18.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Finest fish and vaggies",
    price: 20.99,
  },
];

const Available = () => {
  const mealsList = DUMMY_MEALS.map((meals) => (
    <MealItem
      key={meals.id}
      name={meals.name}
      description={meals.description}
      price={meals.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default Available;

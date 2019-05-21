import React from "react";
import style from "./recipes.module.css";

const Recipe = ({ title, calorie, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <ol>
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <p>Calories / Serving : {calorie}</p>
      <img className={style.image} src={image} alt="" />
    </div>
  );
};

export default Recipe;

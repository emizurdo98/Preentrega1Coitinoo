import React, { useState, useEffect } from "react";
import "./ItemListContainer.css";

import { getDrinks, getDrinksByCategory } from "../../services/firebase";

import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";

function ItemListContainer(props) {
  const [drinksList, setDrinksList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const params = useParams();
  const categoryID = params.categoryID;

   useEffect(() => {
    setDrinksList([]);
    if (categoryID === undefined) {
      getDrinks().then((data) => {
        setDrinksList(data);
        setIsLoading(false);
      });
    } else {
      getDrinksByCategory(categoryID).then((data) => {
        setDrinksList(data);
        setIsLoading(false);
      });
    }
  }, [categoryID]);

  return (
    <div className="container">
      <h1>Tendencias</h1>
      {isLoading ? <Loader /> : <ItemList drinksList={drinksList} />}
      <hr />
    </div>
  );
}

export default ItemListContainer;
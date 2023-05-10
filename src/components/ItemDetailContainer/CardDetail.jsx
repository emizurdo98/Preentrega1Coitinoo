import {React, useState} from "react";
import FlexWrapper from "../FlexWrapper/FlexWrapper";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";

import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";

function CardDetail({ drink }) {
  const [count, setCount] = useState(0);
  const { addToCart } = useContext(cartContext);

  function handleAddToCart(count) {
    addToCart(drink, count);
    setCount(count);
  }

  if (drink.title)
  return (
    <div className="detail-container">
      <FlexWrapper>
        <div className="main container">
          <h1>{drink.title}</h1>
         
            <img  style={{
              width: "500px",
              height: "auto",
              position:"relative", 
              display:"block",
              zIndex: "1"
        }} src={drink.img} alt={drink.title} />
        
        <p style={{
              width: "600px",
              height: "auto",
              position:"relative", 
              display:"block"
        }}>{drink.detail}</p>
          <h3>$ {drink.price}</h3>
        </div>
        {count === 0 ? (
        <ItemCount 
          onAddToCart={handleAddToCart}
          text="Agregar al carrito" 
          stock={drink.stock} 
          initial={1} 
          />
          ) : (
            <Link to="/cart">Ver el carrito</Link>
          )}
      </FlexWrapper>
    </div>
  );

  return <Loader />;
}

export default CardDetail;
import React, { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import FlexWrapper from "../FlexWrapper/FlexWrapper";
import Button from "../Button/Button";
import { Link } from 'react-router-dom';

import UserForm from "../UserForm/UserForm";

import Grid from '@mui/material/Grid';

function CartView() {
  const { cart, removeItem, getTotalPrice, clearCart } = useContext(cartContext);

  let userForm = null;

  if(cart === undefined || cart.length === 0 ){
    userForm = 
    <div>
      <h1>No hay nada aqui, por ahora...</h1>
      <Link to="/">Ir a Home</Link>
    </div>
    
  }else{
    userForm = <UserForm cart={cart} getTotalPrice={getTotalPrice} clearCart={clearCart} />
  }
  

  return (
    <FlexWrapper>
      <Grid container spacing={2} style={{
            color: "white",
            paddingLeft: "40%"
        }}>
      <Grid item xs={12}>
        {cart.map((drink) => (
          <div key={drink.id} style={{
            border: "groove",
            width: "400px",
            height: "auto"
        }} >
            <h2>{drink.title}</h2>
            <h4>${drink.price}</h4>
            <h4>{drink.count}</h4>
            <h4>Precio Total: ${drink.price * drink.count}</h4>
            <Button color="#8F3714" onClick={() => removeItem(drink.id)}>
                X
            </Button>
          </div>
        ))
        }
      </Grid>
      <Grid item xs={12}>
        {userForm}
      </Grid>
    </Grid>
      
      
    </FlexWrapper>
  );
}

export default CartView;
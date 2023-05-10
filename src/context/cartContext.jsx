import { createContext, useState } from "react";

const cartContext = createContext();

function CartContextProvider(props) {
  const [cart, setCart] = useState([]);

  function addToCart(item, count) {
    if(isInCart(item.id)){
      let newCart = [...cart];
      let drinkIndex = newCart.findIndex((drink => drink.id === drink.id));
      newCart[drinkIndex].count += count;
      setCart(newCart);
    }else{
      let newCart = [...cart];
      let newItem = { ...item, count };
      newCart.push(newItem);
      setCart(newCart);
    }
  }

  function removeItem(idToRemove) {
    let newCart = cart.filter((itemInCart) => itemInCart.id !== idToRemove);
    setCart(newCart);
  }

  function getTotalPrice() {
    let total = 0;
    cart.forEach((itemInCart) => {
      total = total + itemInCart.count * itemInCart.price;
    });
    return total;
  }

  function getTotalItemCount() {
    let total = 0;
    cart.forEach((itemInCart) => {
      total = total + itemInCart.count;
    });
    return total;
  }

  function isInCart(idToSearch) {
    return cart.some( element => element.id === idToSearch) 
  }
  
  function clearCart(){
    setCart([]);
  }

  return (
    <>
      <cartContext.Provider
        value={{ cart, addToCart, getTotalItemCount,getTotalPrice, removeItem, clearCart }}
      >
        {props.children}
      </cartContext.Provider>
    </>
  );
}

export { cartContext, CartContextProvider };

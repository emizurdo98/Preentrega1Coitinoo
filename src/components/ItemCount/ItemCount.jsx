import React, { useState } from "react";
import Button from "../Button/Button";
import FlexWrapper from "../FlexWrapper/FlexWrapper";
import "./ItemCount.css";

export default function ItemCount({ stock, initial, text, onAddToCart }) {
  const [count, setCount] = useState(initial);

  function handleSubstract() {
    if (count > 1) setCount(count - 1);
  }

  function handleAdd() {
    if (count < stock) setCount(count + 1);
  }

  return (
    <div className="itemcount_container">
      <FlexWrapper>
        <div>
          <h2>Realiza tu compra</h2>
          <div className="itemcount_control">
            <Button color="#8F3714" onClick={handleSubstract}>
              -
            </Button>

            <strong>{count}</strong>

            <Button color="#4314A3" onClick={handleAdd}>
              +
            </Button>
          </div>
        </div>

        <div className="itemcount_btns">
        <Button color="#4314A3"  onClick={() => {onAddToCart(count);}}>
            {text}
        </Button>
        </div>
      </FlexWrapper>
    </div>
  );
}
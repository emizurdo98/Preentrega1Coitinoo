import React from "react";
import Card from "../Card/Card";
import FlexWrapper from "../FlexWrapper/FlexWrapper";

function ItemList(props) {
  return (
    <>
      <FlexWrapper>
        {props.drinksList.map((drink) => {
          return (
            <Card
              key={drink.id}
              id={drink.id}
              title={drink.title}
              img={drink.img}
              price={drink.price}
              detail={drink.detail}
              stock={drink.stock}
              expired={drink.expires}
            />
          );
        })}
      </FlexWrapper>
    </>
  );
}

export default ItemList;
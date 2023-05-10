import React, { useState, useEffect } from "react";

import { getDrink } from "../../services/firebase";
import FlexWrapper from "../FlexWrapper/FlexWrapper";
import CardDetail from "./CardDetail";

import { useParams } from "react-router-dom";

function ItemDetailContainer(props) {
  const [drink, setDrink] = useState([]);
  const [feedbackMsg, setFeedbackMsg] = useState(null);
  const { itemID } = useParams();

  console.log("Item id", itemID );
  useEffect(() => {
    getDrink(itemID)
      .then((data) => {
        setDrink(data);
      })
      .catch((error) => {
        console.log("Catch?")
        setFeedbackMsg(error.message);
      });
  }, [itemID]);


  return (
    <FlexWrapper>
      {feedbackMsg !== null ? (
        <h4>Error: {feedbackMsg}</h4>
      ) : (
        <CardDetail drink={drink} />
      )}
    </FlexWrapper>
  );
}

export default ItemDetailContainer;
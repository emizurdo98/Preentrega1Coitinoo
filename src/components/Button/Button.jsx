import "./Button.css";
import { useState } from "react";


export default function Button(props) {
  const [colorBtn, setColorBtn] = useState({
    backgroundColor: props.color,
  });

  function handleClick() {
    if (props.onClick) props.onClick();
  }

  return (
    <button onClick={handleClick} style={colorBtn} className="btn">
      {props.children}
    </button>
  );
}

import React from "react";
import { useState } from "react";
import "./Button.css";

const Button = () => {
  const [color, setColor] = useState("false");

  const onHandleBtn = () => {
    setColor(!color);
  };

  return (
    <button className={color ? "btn--1" : "btn--color2"} onClick={onHandleBtn}>
      Click me!
    </button>
  );
};

export default Button;

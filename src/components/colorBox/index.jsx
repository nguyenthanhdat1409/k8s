import React, { useState } from "react";
import PropTypes from "prop-types";

ColorBox.propTypes = {};

function getRandomColor() {
  const COLOR_LIST = ["yellow", "red", "black"];
  const random = Math.trunc(Math.random() * 3);
  return COLOR_LIST[random];
}

function ColorBox() {
  const [color, setColor] = useState("deeppink");
  function handleBoxClick() {
    const newColor = getRandomColor();
    setColor(newColor);
  }
  return (
    <div
      className="color-box"
      style={{ backgroundColor: color}}
      onClick={handleBoxClick}
    >
      COLOR BOX
    </div>
  );
}

export default ColorBox;

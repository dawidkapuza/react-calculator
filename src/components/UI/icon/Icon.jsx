import {
  faCompress,
  faDeleteLeft,
  faDivide,
  faMultiply,
  faPercent,
  faSuperscript,
  faTrashCan,
  faSquareRootVariable,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Icon({ value }) {
  let valueIsSymbol = false;
  let style = {height: "17px"}
  let icon = value;
  switch (value) {
    case "backspace":
      icon = faDeleteLeft;
      break;
    case "erase":
      icon = faTrashCan;
      style = {height: "17px"}
      break;
    case "showExtended":
      icon = faCompress;
      break;
    case "/":
      icon = faDivide;
      break;
    case "*":
      icon = faMultiply;
      break;
    case "%":
      icon = faPercent;
      break;
    case "^":
      value = "Xʸ"
      valueIsSymbol = true
    break;
      
    case "square-root-variable":
      icon = faSquareRootVariable;
      break;

    default:
      valueIsSymbol = true;
      break;
  }
  return (
    <div>
      {valueIsSymbol ? (
        value
      ) : (
        <FontAwesomeIcon style={style} icon={icon} />
      )}
    </div>
  );
}

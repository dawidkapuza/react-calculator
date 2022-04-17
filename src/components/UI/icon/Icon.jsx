import {
  faCompress,
  faDeleteLeft,
  faDivide,
  faMultiply,
  faPercent,
  faSuperscript,
  faTrashCan
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Icon({ value }) {
  return (
    <div>
      {value === "backspace" ? (
        <FontAwesomeIcon style={{ height: "17px" }} icon={faDeleteLeft} />
      ) : value === "erase" ? (
        <FontAwesomeIcon style={{ height: "17px" }} icon={faTrashCan} />
      ) : value === "more" ? (
        <FontAwesomeIcon style={{ height: "18px" }} icon={faCompress} />
      ) : value === "/" ? (
        <FontAwesomeIcon style={{ height: "18px" }} icon={faDivide} />
      ) : value === "*" ? (
        <FontAwesomeIcon style={{ height: "18px" }} icon={faMultiply} />
      ) : value === "%" ? (
        <FontAwesomeIcon style={{ height: "18px" }} icon={faPercent} />
      ) : value === "^" ? (
        <FontAwesomeIcon style={{ height: "17px" }} icon={faSuperscript} />
      ) : (
        value
      )}
    </div>
  );
}

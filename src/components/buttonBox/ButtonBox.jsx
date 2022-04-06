import { faCompress, faDeleteLeft, faDivide, faMultiply, faPercent, faTrashCan, faSuperscript } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { buttonsContent } from "../../utils/buttonsContent";
import Button from "../UI/button/Button";
import cl from "./ButtonBox.module.css";

export default function ButtonBox(props) {
  return (
    <div className={cl.buttonBox} onClick={props.onClick}>
      {buttonsContent.map((btn) => {
        let { value, priority = null, unary = "" } = btn;
        return (
          <Button
            key={value}
            value={value}
            data-priority={priority}
            data-unary={unary}
            className={isNaN(+value) ? cl.nonNumericSymbol : cl.numericSymbol}
          >
            {value === "del" ? (
              <FontAwesomeIcon
                style={{height: "17px" }}
                icon={faDeleteLeft}
              />
            ) : value === "C" ? (
              <FontAwesomeIcon
                style={{height: "17px" }}
                icon={faTrashCan}
              />
            ) : value === 'more'? (
              <FontAwesomeIcon
                style={{height: "18px" }}
                icon={faCompress}
              />
            ) : value === '/'? (
              <FontAwesomeIcon
                style={{height: "18px" }}
                icon={faDivide}
              />
            ) : value === '*'? (
              <FontAwesomeIcon
                style={{height: "18px" }}
                icon={faMultiply}
              />
            ) : value === '%'? (
              <FontAwesomeIcon
                style={{height: "18px" }}
                icon={faPercent}
              />
            ) : value === '^'? (
              <FontAwesomeIcon
                style={{height: "17px" }}
                icon={faSuperscript}
              />
            ) : value}
          </Button>
        );
      })}
    </div>
  );
}

import React from "react";
import { btnValues } from "../../utils/btnValues";
import Button from "../UI/button/Button";
import Icon from "../UI/icon/Icon";
import cl from "./ButtonBox.module.css";

export default function ButtonBox(props) {
  return (
    <div className={cl.buttonBox} onClick={props.onClick}>
      {btnValues.map((btn) => {
        let { value, isunary = "" } = btn;
        return (
          <Button
            key={value}
            value={value}
            isunary={isunary}
            className={isNaN(+value) ? cl.nonNumericSymbol : cl.numericSymbol}
          >
            <Icon value={value}></Icon>
          </Button>
        );
      })}
    </div>
  );
}

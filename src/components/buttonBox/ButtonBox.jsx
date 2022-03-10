import React from "react";
import Button from "../UI/button/Button";
import cl from "./ButtonBox.module.css";
import { buttonsContent } from "../../utils/buttonsContent";

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
          >
            {value}
          </Button>
        );
      })}
    </div>
  );
}

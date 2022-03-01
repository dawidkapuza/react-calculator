import React from "react";
import Button from "../UI/button/Button";
import cl from "./Interface.module.css";
import { interfaceContent } from "../../utils/interfaceContent";

export default function Interface(props) {
  return (
    <div className={cl.interface} onClick={props.onClick}>
      {interfaceContent.map((btn) => {
        let { value, priority = null, unary = '' } = btn;
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

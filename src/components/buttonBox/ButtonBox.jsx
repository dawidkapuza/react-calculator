import React from "react";
import { btnValues } from "../../utils/btnValues";
import Button from "../UI/button/Button";
import Icon from "../UI/icon/Icon";
import cl from "./ButtonBox.module.css";

export default function ButtonBox(props) {
 
  return (
    <div className={props.extendedMod ? cl.extendedButtonBox : cl.buttonBox} onClick={props.onClick} >
      {btnValues
        .filter(btn => !btn.extended || props.extendedMod)
        .map((btn) => {
        let { value, isunary = "", extended = false} = btn;
        let iconClass = extended ? cl.extended : isNaN(btn.value) ? cl.basic : cl.basicNumeric
        return (
          <Button
            key={value}
            value={value}
            isunary={isunary}
            className={iconClass}
          >
            <Icon value={value}></Icon>
          </Button>
        );
      })}
    </div>
  );
}

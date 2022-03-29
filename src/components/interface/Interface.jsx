import React from "react";
import ButtonBox from "../buttonBox/ButtonBox";
import Screen from "../screen/Screen";
import { calculator } from "../../hooks/useCalculator";
import cl from "./Interface.module.css";


export default function Interface() {
  const [result, formattedExpression, onClick] = calculator.useCalculator("");

  return (
    <div className={cl.interface}>
      <Screen>{`\r\r\r\r\r${formattedExpression}\r${result[0]?.operand ?? 0}`}</Screen>
      
      <ButtonBox onClick={onClick} />
    </div>
  );
}

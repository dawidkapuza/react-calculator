import React from "react";
import ButtonBox from "../buttonBox/ButtonBox";
import Screen from "../screen/Screen";
import { calculator } from "../../hooks/useCalculator";
import cl from "./Interface.module.css";

export default function Interface() {
  const [result, formattedExpression, onClick] = calculator.useCalculator("");

  console.log(formattedExpression, result);

  return (
    <div className={cl.interface}>
      <Screen>{`\r\r\r\r\r${formattedExpression}\r${result[0].operand}`}</Screen>
      <ButtonBox onClick={onClick} />
    </div>
  );
}

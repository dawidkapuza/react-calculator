import React from "react";
import ButtonBox from "../buttonBox/ButtonBox";
import { calculator } from "../../hooks/useCalculator";
import cl from "./Interface.module.css";

export default function Interface() {
  const [result, formattedExpression, onClick] = calculator.useCalculator("");

  console.log(formattedExpression, result);

  return (
    <div className={cl.interface}>
      <ButtonBox onClick={onClick} />
    </div>
  );
}

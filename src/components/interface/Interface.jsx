import React from "react";
import { useCalculator } from "../../hooks/useCalculator";
import ButtonBox from "../buttonBox/ButtonBox";
import Screen from "../screen/Screen";
import cl from "./Interface.module.css";

export default function Interface() {
  const [result, expression, onClick] = useCalculator("");

  return (
    <div className={cl.interface}>
      <Screen>{`\r\r\r\r\r${expression}\r${
        result ? '= ' + result : 0
      }`}</Screen>

      <ButtonBox onClick={onClick} />
    </div>
  );
}

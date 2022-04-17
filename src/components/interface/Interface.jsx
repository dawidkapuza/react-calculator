import React from "react";
import { useCalculator } from "../../hooks/useCalculator";
import ButtonBox from "../buttonBox/ButtonBox";
import Screen from "../screen/Screen";
import cl from "./Interface.module.css";

export default function Interface() {
  const [result, expression, history, onClick] = useCalculator("");

  let currentExpression = history[0].expression;
  let currentResult = history[0].result;
  let expIsEmpty = expression ? 1 : 0
  console.log(history);
  return (
    <div className={cl.interface}>
      <Screen>
        <div className={cl.content}>
          <span className={cl.history}>
            
            {
            
              history.map((i, idx) => {
              let expression = history[history.length - idx - expIsEmpty]?.expression || "";
              let result = history[history.length - idx - expIsEmpty]?.result;
              return (
                <span key={idx} style={{marginBottom: "15px"}}>
                  {expression}
                  <br />
                  {result ? "= " + result : ""}
                  <br />
                </span>
              );
            })}
          </span>
          <span className={expIsEmpty ? cl.selected : ""}>
            {expression
              ? expression
              : currentExpression !== ""
              ? currentExpression
              : 0}
          </span>
          <span className={expIsEmpty ? "" : cl.selected}>
            {result 
              ? "= " + result 
              : currentResult !== "" 
              ? "= " + currentResult 
              : ""}
          </span>
        </div>
      </Screen>

      <ButtonBox onClick={onClick} />
    </div>
  );
}

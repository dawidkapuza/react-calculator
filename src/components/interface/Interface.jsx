import React from "react";
import { useCalculator } from "../../hooks/useCalculator";
import ButtonBox from "../buttonBox/ButtonBox";
import History from "../features/history/History";
import Screen from "../screen/Screen";
import cl from "./Interface.module.css";

export default function Interface() {
  const [result, expression, history, extendedMod, onClick] =
    useCalculator("");

  let expressionFromHistory = history[0].expression;
  let resultFromHistory = history[0].result;
  let expressionIsNew = expression ? 1 : 0;
  return (
    <div className={cl.interface}>
      <Screen>
        <div className={cl.content}>
          <History history={history} expressionIsNew={expressionIsNew} />
          <span
            className={expressionIsNew || history.length < 2 ? cl.selected : ""}
          >
            {expression
              ? expression
              : expressionFromHistory
              ? expressionFromHistory
              : 0}
          </span>
          <span className={expressionIsNew ? "" : cl.selected}>
            {result
              ? "= " + result
              : resultFromHistory
              ? "= " + resultFromHistory
              : ""}
          </span>
        </div>
      </Screen>
      <hr style={{border: "0.2px solid rgb(58 58 58 / 70%)", height: "0.2px", width: "90%",marginLeft: "5%"}}/>
      <ButtonBox onClick={onClick} extendedMod={extendedMod} />
    </div>
  );
}

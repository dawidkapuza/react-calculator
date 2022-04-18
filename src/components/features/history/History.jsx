import React from "react";
import cl from "./History.module.css";
export default function History({ history, expressionIsNew, ...props }) {
  return (
    <div className={cl.history} {...props}>
      {history.map((i, index) => {
        let expression =
          history[history.length - index - expressionIsNew]?.expression || "";
        let result = history[history.length - index - expressionIsNew]?.result;
        return (
          <span
            key={index}
            style={{ marginBottom: "15px", overflowWrap: "break-word" }}
          >
            {expression}
            <br />
            {result ? "= " + result : ""}
          </span>
        );
      })}
    </div>
  );
}

import { evaluate } from "mathjs";
import { useState } from "react";
console.log(evaluate("12/(2.3+0.7)"));

export const useCalculator = (initialValue) => {
  const [expression, setExpression] = useState(initialValue);

  const onClick = (e) => {
    let btn = e.target.closest("button");
    if (!btn || !btn.parentElement.contains(btn)) return;

    if (btn.value === "more") return; // TO DO...

    isNaN(btn.value)
      ? setExpression((prevValue) => prevValue + btn.value + "0")
      : setExpression((prevValue) =>
          prevValue.endsWith("0")
            ? prevValue.slice(0, prevValue.length - 1) + btn.value
            : prevValue + btn.value
        );

    if (btn.value === "C") {
      setExpression(initialValue);
    } else if (btn.value === "del") {
      setExpression(expression.slice(0, expression.length - 1) || "");
    }
  };
  let result = evaluate(expression);
  return [result, expression, onClick];
};

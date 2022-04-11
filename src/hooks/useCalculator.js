import { mathjs } from "../utils/math.js";
import { useState, useMemo } from "react";

export const useCalculator = (initialValue) => {
  const [expression, setExpression] = useState(initialValue);
  const onClick = (e) => {
    let btn = e.target.closest("button");
    if (!btn || !btn.parentElement.contains(btn)) return;

    const isUnary = btn.getAttribute("isunary");
    const floatIsUsed = btn.value === "." && /\.\d+$/.test(expression);
    const floatIsAllowed = btn.value === "." && (expression.endsWith("0") || !expression)

    if (btn.value === "more" || btn.value === "=" || !expression && btn.value === '0') return; // TO DO...
    
    if (isNaN(btn.value)) {
      if ((!expression && !isUnary) || floatIsUsed) return;
      if (floatIsAllowed) {
        setExpression(
          (prevValue) => prevValue.slice(0, prevValue.length - 1) + "0.0"
        );
        return;
      }
      expression.endsWith("0")
        ? setExpression(
            (prevValue) =>
              prevValue.slice(0, prevValue.length - 2) + btn.value + "0"
          )
        : setExpression((prevValue) => prevValue + btn.value + "0");
    } else {
      setExpression((prevValue) =>
        expression.endsWith("0")
          ? prevValue.slice(0, prevValue.length - 1) + btn.value
          : prevValue + btn.value
      );
    }
    if (btn.value === "erase") {
      setExpression(initialValue);
    } else if (btn.value === "backspace") {
      setExpression(
        (prevValue) =>
          prevValue.slice(
            0,
            expression.length - (/\D0$/.test(expression) ? 2 : 1)
          ) + (/\D[1-9]$/.test(expression) ? "0" : "")
      );
    }
  };

  let result = useMemo(() => mathjs.evaluate(expression), [expression]);

  return [result, expression, onClick];
};

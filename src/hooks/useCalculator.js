import { mathjs } from "../utils/math.js";
import { useState, useMemo } from "react";
import { toLocaleString } from "../utils/formatting.js";

export const useCalculator = (initialValue) => {
  const [expression, setExpression] = useState(initialValue);
  const [history, setHistory] = useState([
    { expression: initialValue, result: initialValue },
  ]);

  let result = initialValue;
  const onClick = (e) => {
    let btn = e.target.closest("button");
    if (!btn || !btn.parentElement.contains(btn)) return;

    const isUnary = btn.getAttribute("isunary");
    const floatIsUsed = btn.value === "." && /\.\d+$/.test(expression);
    const floatIsAllowed =
      btn.value === "." && (expression.endsWith("0") || !expression);

    if (btn.value === "more" || (!expression && btn.value === "0")) return; // TO DO...

    if (btn.value === "=") {
      if (!expression) return;
      setHistory([
        
        {
          expression: toLocaleString(expression),
          result
        },
        ...history,
      ]);
      setExpression(initialValue)
      return;
    }

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
      setHistory([{ expression: initialValue, result: initialValue }]);
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

  result = useMemo(() => toLocaleString(mathjs.evaluate(expression)), [expression]);

  return [result, toLocaleString(expression), history, onClick];
};

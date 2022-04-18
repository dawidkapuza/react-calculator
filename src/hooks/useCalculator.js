import { mathjs } from "../utils/math.js";
import { useState, useMemo } from "react";
import { toLocaleString } from "../utils/formatting.js";

export const useCalculator = (initialValue) => {
  const [expression, setExpression] = useState(initialValue);
  const [history, setHistory] = useState([
    { expression: initialValue, result: initialValue },
  ]);

  let result = useMemo(
    () => toLocaleString(mathjs.evaluate(expression)),
    [expression]
  );

  const onClick = (e) => {
    // Button's DOM element's verification
    let btn = e.target.closest("button");
    if (!btn || !btn.parentElement.contains(btn)) return;

    const isUnary = btn.getAttribute("isunary");
    const floatingPointIsUsed = btn.value === "." && /\.\d+$/.test(expression);
    const floatingPointIsAllowed =
      btn.value === "." && (expression.endsWith("0") || !expression);

    // SPECIAL SYMBOL'S HANDLING --------------------------------------------------------------------------------------
    if (btn.value === "=") {
      if (!expression) return;
      setHistory([
        {
          expression: toLocaleString(expression),
          result,
        },
        ...history,
      ]);
      setExpression(initialValue);
      return;
    } else if (btn.value === "erase") {
      setExpression(initialValue);
      setHistory([{ expression: initialValue, result: initialValue }]);
      return;
    } else if (btn.value === "backspace") {
      setExpression(
        (prevValue) =>
          prevValue.slice(
            0,
            expression.length - (/\D0$/.test(expression) ? 2 : 1)
          ) + (/\D[1-9]$/.test(expression) ? "0" : "")
      );
      return;
    } else if (btn.value === "more") {
      // TO DO
      return;
    }
    // NON NUMERIC SYMBOL'S HANDLING -----------------------------------------------------------------------------------
    if (isNaN(btn.value)) {
      // Floating point handling
      if ((!expression && !isUnary) || floatingPointIsUsed) return;
      if (floatingPointIsAllowed) {
        setExpression(
          (prevValue) => prevValue.slice(0, prevValue.length - 1) + "0.0"
        );
        return;
      }
      // Non numeric symbols
      expression.endsWith("0")
        ? setExpression(
            (prevValue) =>
              prevValue.slice(0, prevValue.length - 2) + btn.value + "0"
          )
        : setExpression((prevValue) => prevValue + btn.value + "0");
    } else {
      // NUMERIC SYMBOL'S HANDLING ---------------------------------------------------------------------------------------
      if (btn.value === "0" && !expression) return;
      setExpression((prevValue) =>
        expression.endsWith("0")
          ? prevValue.slice(0, prevValue.length - 1) + btn.value
          : prevValue + btn.value
      );
    }
  };

  return [result, toLocaleString(expression), history, onClick];
};

import { useState } from "react";

export const useExpression = (initialValue) => {
  const [expression, setExpression] = useState([
    {
      operand: initialValue,
    },
  ]);
  const onClick = (e) => {
    let btn = e.target.closest("button");
    if (!btn || !btn.parentElement.contains(btn)) return;

    if (btn.value === "more") return; // TO DO...

    let length = expression.length ? expression.length - 1 : expression.length;
    let currentOperand = expression[length]?.operand
    
    if (!isNaN(btn.value)) {
      setExpression((prevValue) => [
        ...expression.slice(0, length),
        {
          operand: prevValue[length].operand + btn.value,
        },
      ]);
    } else if (btn.value === "C") {
      setExpression([{ operand: initialValue }]);
    } else if (btn.value === "del") {
      if (currentOperand === "") {
        if (!length) return;
        setExpression([...expression.slice(0, length - 1)]);
      } else {
        setExpression([
          ...expression.slice(0, length),
          {
            operand:
            currentOperand.slice(
                0,
              currentOperand.length - 1
              ) || "",
          },
        ]);
      }
    } else if (btn.value === ",") {
      if (currentOperand.includes(".")) return;

      setExpression((prevValue) => [
        ...expression.slice(0, length),
        {
          operand:
            prevValue[length].operand === ""
              ? "0."
              : prevValue[length].operand + ".",
        },
      ]);
    } else {
      length = currentOperand === "" ? length - 1 : length + 1;
      if (length < 1) return;

      setExpression([
        ...expression.slice(0, length),
        { operator: btn, id: expression.length },
        { operand: initialValue },
      ]);
    }
  };

  return [expression, onClick];
};

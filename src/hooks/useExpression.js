import { useState } from "react";

export const useExpression = (initialValue) => {
  const [expression, setExpression] = useState([
    {
      operand: initialValue,
    },
  ]);
  const onClick = (e) => {
    let length = expression.length ? expression.length - 1 : expression.length;
    if (!isNaN(e.target.value)) {
      setExpression((prevValue) => [
        ...expression.slice(0, length),
        {
          operand: prevValue[length].operand + e.target.value,
        },
      ]);
    } else {
      length =
        e.target.dataset.unary && expression[length].operand === ""
          ? length
          : expression[length].operand === ""
          ? length - 1
          : length + 1;

      setExpression([
        ...expression.slice(0, length),
        e.target,
        { operand: initialValue },
      ]);
    }
  };

  return [expression, onClick];
};

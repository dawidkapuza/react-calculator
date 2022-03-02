import { useState } from "react";

export const useExpression = (initialValue) => {
  const [expression, setExpression] = useState([
    {
      operand: initialValue,
    },
  ]);
  const [unary, setUnary] = useState(false); // TO DO: Unary Validation

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
      if (expression.length < 2 && !e.target.dataset.unary) return;

      setExpression([...expression, e.target, { operand: initialValue }]);
    }
  };

  return [expression, onClick];
};

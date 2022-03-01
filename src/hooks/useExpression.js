import { useState } from "react";

export const useExpression = (initialValue, callback) => {
  const [operand, setOperand] = useState(initialValue)
  const [expression, setExpression] = useState([])
  const [unary, setUnary] = useState(false)

  const onClick = (e) => {
    if (!isNaN(e.target.value)) {
      setOperand(operand + e.target.value)

      expression.length < 2
        ? (setExpression([(expression[0] = operand)]))
        : (setExpression([...expression].map((item, index) =>
            index === expression.length - 1 ? (item = operand) : item
          )));

      setUnary(true);
    } else {
      // ... Validation
      if (
        (operand === initialValue && !e.target.dataset.unary) ||
        unary
      )
        return;
      if (
        operand === initialValue &&
        e.target.dataset.unary &&
        expression.length === 2
      )
        return;
      if (
        e.target.dataset.unary &&
        expression[expression.length - 2]?.dataset.unary &&
        !unary &&
        operand === ""
      ) {
        setOperand(initialValue)
        setExpression([
          ...expression.slice(0, expression.length - 1),
          e.target,
          (operand),
        ]);
        setUnary(true);
      // ...
      } else {
        setOperand(initialValue)
        setExpression([...expression, e.target, (operand)]);
      }
    }
    callback(expression);
    
  };
  return onClick;
};


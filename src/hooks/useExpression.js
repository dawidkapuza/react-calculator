export const useExpression = (initialValue, callback) => {
  let operand = initialValue;
  let expression = [];
  let unaryOperatorIsUsed = false;

  const onClick = (e) => {
    if (!isNaN(e.target.value)) {
      operand += e.target.value;

      expression.length < 2
        ? (expression = [(expression[0] = operand)])
        : (expression = [...expression].map((item, index) =>
            index === expression.length - 1 ? (item = operand) : item
          ));

      unaryOperatorIsUsed = false;
    } else {
      // ... Validation
      if (
        (operand === initialValue && !e.target.dataset.unary) ||
        unaryOperatorIsUsed
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
        !unaryOperatorIsUsed &&
        operand === ""
      ) {
        expression = [
          ...expression.slice(0, expression.length - 1),
          e.target,
          (operand = initialValue),
        ];
        unaryOperatorIsUsed = true;
      // ...
      } else {
        expression = [...expression, e.target, (operand = initialValue)];
      }
    }
    callback(expression);
    
  };
  console.log(expression)
  return onClick;
};

/*

import { useState } from "react";

  export const useExpression = (initialValue, callback) => {
  const [operand, setOperand] = useState(initialValue);
  const [expression, setExpression] = useState([initialValue]);

  const onClick = (e) => {
    if (!isNaN(e.target.value)) {
      setOperand(operand + e.target.value);

      setExpression(
        expression.length <= 2
          ? [(expression[0] = operand)]
          : [...expression].map((item, index) =>
              index === expression.length - 1 ? (item = operand) : item
            )
      );
    } else {
      setOperand(initialValue);
      setExpression([...expression, e.target, operand]);
    }
  };
  callback(expression);
  return onClick;
}; */

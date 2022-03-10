import React from "react";
import Screen from "../screen/Screen";
import ButtonBox from "../buttonBox/ButtonBox";
import Calculator from "../../hooks/useCalculator";

export default function Interface() {
  const [result, formattedExpression, onClick] = Calculator.useCalculator("");

  // console.log(result)
  console.log(formattedExpression);

  return (
    <div>
      <ButtonBox onClick={onClick} />
      {/* <Screen /> */}
    </div>
  );
}

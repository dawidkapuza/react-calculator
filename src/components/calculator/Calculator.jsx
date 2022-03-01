import React, {useState} from "react";
import { useExpression } from "../../hooks/useExpression";
import Screen from "../screen/Screen";
import Interface from "../interface/Interface";
import { useCalculator } from "../../hooks/useCalculator";

export default function Calculator() {


 
  const [result, expressionHandler] = useCalculator('0')

  const onClick = useExpression("", (expression) => {
    // expressionHandler(expression)
    // console.log(expression)
  });

  

  return (
    <div>
      <Interface onClick={onClick} />
      {/* <Screen /> */}
    </div>
  );
}

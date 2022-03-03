import React, {useEffect, useState} from "react";
import { useExpression } from "../../hooks/useExpression";
import Screen from "../screen/Screen";
import Interface from "../interface/Interface";
import { useCalculator } from "../../hooks/useCalculator";

export default function Calculator() {


 
  const [result, setCalculator] = useCalculator('0')

  const [expression, onClick] = useExpression("");
  

  useEffect(() => {
  setCalculator(expression)
   
  }, [expression, result])
  console.log(result)

 

  return (
    <div>
      <Interface onClick={onClick} />
      {/* <Screen /> */}
    </div>
  );
}

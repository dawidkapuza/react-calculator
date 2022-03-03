import { useMemo, useState } from "react"

export const useCalculator = (defaultResult) => {

  const [result, setResult] = useState(defaultResult)

  const setCalculator = (expression) => {
    setResult(expression)
  }
  


  return [result, setCalculator]
  }
      
      
  

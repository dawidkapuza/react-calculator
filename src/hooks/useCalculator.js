import { useMemo, useState } from "react"

export const useCalculator = (defaultResult) => {

  const [result, setResult] = useState(defaultResult)

  const expressionHandler = (expression) => {
    setResult(expression)
    

  }
  


  return [result, expressionHandler]
  }
      
      
  

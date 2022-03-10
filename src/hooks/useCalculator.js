import { useExpression } from "./useExpression";
import Methods from "../utils/methods";

export default class Calculator extends Methods {
  
  /* TODO: Methods */

  static useCalculator = (defaultResult) => {
    const [expression, onClick] = useExpression(defaultResult);
    const formattedExpression = [...expression]
      .map((item) => {
        return item?.operand ? item.operand : item.value;
      })
      .join("");

    let result = [...expression].reduce((accumulator, item, index) => {}, 0);

    return [result, formattedExpression, onClick];
  };
}

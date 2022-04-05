import { useExpression } from "./useExpression";
import Methods from "../utils/methods";
import numberFormatting from "../utils/numberFormatting";

class Calculator extends Methods {
 
  useCalculator = (defaultResult) => {
    const [expression, onClick] = useExpression(defaultResult);

    const formattedExpression = [...expression] // TO DO: Move whole number & number formatting in a separate utils file
      .map((item) => {
        return item?.operator?.value ? item.operator.value : numberFormatting(item.operand);
      })
      .join("");

    let result = [...expression];

    [...expression]
      .map((item) =>
        !(item?.operand || item?.operand === "") ? { ...item } : false
      )
      .filter((i) => i)
      .sort((a, b) => b.operator.dataset.priority - a.operator.dataset.priority)
      .forEach((byPriority) => {
        result.forEach((item, index) => {
          if (item?.id === byPriority.id) {
            result.splice(index - 1, 3, {
              operand: this[result[index].operator.value](
                +result[index - 1].operand,
                +result[index + 1].operand
              ),
            });
          }
        });
      });
    return [result, formattedExpression, onClick];
  };
}

export const calculator = new Calculator();

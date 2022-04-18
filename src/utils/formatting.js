export const toLocaleString = (num) => {
  if (!num) return "";

  num = num.toString();

  num = /\D0$/.test(num) ? num.replace(/0$/, "") : num;

  return num
    .replace("Infinity", "∞")
    .replace(/(\d)(?=(?:\d{3})+(?:\D|$))/g, "$1 ");

};

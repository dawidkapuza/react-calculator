export const toLocaleString = (num) =>
  num
    ? num
        .toString()
        .replace(/(?<=\D)0$/, "")
        .replace("Infinity", "∞")
        .replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\D|$))/g, "$1 ")
    : "";

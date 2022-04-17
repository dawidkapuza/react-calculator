export const toLocaleString = (num) =>
  num
    ? num
        .toString()
        .replace(/(?<=\D)0$/, "")
        .replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1 ")
    : "";

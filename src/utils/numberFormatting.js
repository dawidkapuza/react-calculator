export default function numberFormatting(str) {
  str = str.toString();
  let num = +str;
  return str === ""
    ? str
    : str === "0."
    ? "0,"
    : !str.includes(".")
    ? num.toLocaleString("ru-RU")
    : (+str.split(".")[0]).toLocaleString("ru-RU") + "," + str.split(".")[1];
}

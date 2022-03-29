export default class Methods {
  constructor() {
    this["+"] = (a, b) => a + b;
    this["-"] = (a, b) => a - b;
    this["*"] = (a, b) => a * b;
    this["/"] = (a, b) => a / b;  
    this["."] = (a, b) => +`${a}.${b}`;
    this["="] = (a, b) => a;
    this["C"] = (a, b) => {return};
    this["del"] = (a, b) => {return};
  }
}


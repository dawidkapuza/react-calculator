export default class Methods {
  constructor() {
    this["+"] = (a, b) => a + b;
    this["-"] = (a, b) => a - b;
    this["*"] = (a, b) => a * b;
    this["/"] = (a, b) => a / b;  
    this["^"] = (a, b) => a ** b;  
    this["="] = (a, b) => a;
  }
}


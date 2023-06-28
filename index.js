const compiler = require("./compiler");
const input = "(add 123 ( sub 4 3))"
const output = compiler(input);
const add = (...args) => {
  let sum = 0;
  args.forEach(a => sum = sum + a)
  return sum;
}
const sub = (a, b) => a - b;

const result = eval(output)
console.log(result)


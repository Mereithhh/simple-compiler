const PATTERNS = [
  "(",
  ")"
]
const NUMBER = /[0-9]/;
const LETTER = /[a-zA-Z]/;
const SPACE = /\s/;



module.exports = function tokenizer(input) {
  const tokens = [];
  let current = 0;
  while (current < input.length) {
    let char = input[current];
    if (PATTERNS.includes(char)) {
      tokens.push({
        type: "paren",
        value: char,
      });
      current++;
      continue;
    }
    if (NUMBER.test(char)) {
      let value = "";
      while (NUMBER.test(char)) {
        value += char;
        char = input[++current];
      }
      tokens.push({
        type: "number",
        value,
      });
      continue;
    }

    if (LETTER.test(char)) {
      let value = "";
      while (LETTER.test(char)) {
        value += char;
        char = input[++current];
      }
      tokens.push({
        type: "name",
        value,
      });
      continue;
    }

    if (SPACE.test(char)) {
      current++;
      continue;
    }


    throw new Error(`unknow charactor: ${char}`)
  }
  return tokens;
}
module.exports = function parser(tokens) {
  let current = 0;
  // walk 函数每次运行完，都增加一个指针，以被下一次 walk
  function walk() {
    let token = tokens[current];
    if (token.type === 'number') {
      current++;
      return {
        type: 'NumberLiteral',
        value: token.value,
      }
    }

    if (token.type === 'paren' && token.value === '(') {
      // 下一个 token 才是函数名称
      token = tokens[++current];
      const expression = {
        type: "CallExpression",
        name: token.value,
        params: []
      }
      token = tokens[++current];
      while (token.value !== ")") {
        expression.params.push(walk())
        token = tokens[current]
      }
      current++;
      return expression;
    }


    throw new TypeError(`Unknow token: ${token.type}`)
  }


  const ast = {
    type: 'Program',
    body: [walk()],
  };



  return ast;
}
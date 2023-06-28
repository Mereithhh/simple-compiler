const tokenizer = require('./tokenizer')
const parser = require('./parser')
const transformer = require("./transformer")
const generateCode = require("./generateCode")

module.exports = function compiler(input) {
  // 1. 词法分析
  const tokens = tokenizer(input)

  // 2. 语法分析
  const lispAST = parser(tokens)

  // 3. 转换
  const jsAST = transformer(lispAST)

  // 4. 代码生成
  const jsCode = generateCode(jsAST)

  return jsCode
}
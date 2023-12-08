const { input } = require('./input.js')

const combineFirstAndLastNumber = (text) => {
  const matchedNumber = text.match(/\d/g)
  const first = matchedNumber[0]
  const last = matchedNumber.at(-1)
  return Number([first, last].join(''))
}

const result = input.reduce((sum, line) => {
  return sum + combineFirstAndLastNumber(line)
}, 0)

console.log(result)

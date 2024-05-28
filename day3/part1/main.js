const { input } = require('./input')

const splittedInput = input.map((inputLine) => inputLine.split(''))

const isSymbol = (str) => !(/\.|\d/.test(str))
const isNumber = (str) => /\d/.test(str)

const isHasAdjacentSymbol = (rowIndex, columnIndex) => {
  let isSymbolFlag = false

  for (let i = rowIndex - 1; i < rowIndex + 2; i++) {
    if (i < 0) continue;
    if (!splittedInput[i]) continue

    for (let j = columnIndex - 1; j < columnIndex + 2; j++) {
      if (j < 0) continue;

      const testingCharacter = splittedInput[i][j]
      if (testingCharacter === undefined) continue

      isSymbolFlag = isSymbolFlag || isSymbol(testingCharacter)
    }
  }

  return isSymbolFlag
}

let sum = 0

for(const [i, inputLine] of splittedInput.entries()) {
  let numberString = ''
  let hasAdjacentSymbol = false

  for (let j = 0; j < inputLine.length; j++) {
    const currentCharacter = inputLine[j]

    if (isNumber(currentCharacter)) {
      numberString = numberString + currentCharacter
      hasAdjacentSymbol = hasAdjacentSymbol || isHasAdjacentSymbol(i, j)

      const nextCharacter = inputLine[j + 1]
      if (nextCharacter !== undefined && isNumber(nextCharacter)) {
        continue
      }
      
      if (hasAdjacentSymbol) sum += Number(numberString)
      numberString = ''
      hasAdjacentSymbol = false
    }
  }
}

console.log(sum)
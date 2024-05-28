const { input } = require('./input')

const splittedInput = input.map((inputLine) => inputLine.split(''))

const isStarSymbol = (str) => /\*/.test(str)
const isNumber = (str) => /\d/.test(str)

const acquireNumberBackward = (row, columnIndex) => {
  let numberString = ''
  let i = columnIndex - 1;
  
  while(i >= 0 && isNumber(row[i])) {
    numberString = row[i] + numberString
    i-=1

  }

  return numberString
}

const acquireNumberForward = (row, columnIndex) => {
  let numberString = ''
  let i = columnIndex + 1;

  while(i < row.length && isNumber(row[i])) {
    numberString = numberString + row[i]
    i+=1
  }

  return { numberString, currentColumnIndex: i }
}



const findAdjacentNumber = (rowIndex, columnIndex) => {
  const numberList = []

  for (let i = rowIndex - 1; i < rowIndex + 2; i++) {
    if (i < 0) continue;
    const row = splittedInput[i]
    if (!row) continue

    for (let j = columnIndex - 1; j < columnIndex + 2; j++) {
      if (j < 0) continue;

      const testingCharacter = splittedInput[i][j]
      if (testingCharacter === undefined) continue
      if (!isNumber(testingCharacter)) continue

      const backwardNumber = acquireNumberBackward(row, j)
      const { numberString: forwardNumber, currentColumnIndex } = acquireNumberForward(row, j)

      const numberString = backwardNumber + testingCharacter + forwardNumber
      numberList.push(Number(numberString))

      j = currentColumnIndex
    }
  }

  if (numberList.length === 2) {
    return numberList[0] * numberList[1]
  }

  return 0
}

let sum = 0

for(const [i, inputLine] of splittedInput.entries()) {
  for (let j = 0; j < inputLine.length; j++) {
    const currentCharacter = inputLine[j]

    if (!isStarSymbol(currentCharacter)) continue

    sum += findAdjacentNumber(i, j)
  }
}

console.log(sum)
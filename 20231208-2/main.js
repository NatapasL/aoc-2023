const { input } = require('./input.js')

const regexp = /^(\d|one|two|three|four|five|six|seven|eight|nine)/

const parser = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9
}

const result = input.reduce((sum, line) => {
  const parsedNumbers = line
    .split('')
    .map((_, index) => line.slice(index, line.length).match(regexp))
    .filter((matched) => matched !== null)
    .map((matched) => matched[0])
    .map((n) => parser[n] ? parser[n] : n)

  const first = parsedNumbers[0]
  const last = parsedNumbers.at(-1)
  const combinedNumber = Number([first, last].join(''))

  return sum + combinedNumber
}, 0)



console.log(result)
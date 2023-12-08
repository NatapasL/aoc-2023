const { input } = require('./input')

const limit = {
  red: 12,
  green: 13,
  blue: 14
}

const result = input.reduce((sum, line) => {
  const [game, samples] = line.split(':')
  
  for(const sample of samples.split(';')) {
    for (const [color, limitQuantity] of Object.entries(limit)) {
      const regexp = new RegExp(`(\\d+) ${color}`)
      const colorMatched = sample.match(regexp)

      if (colorMatched) {
        const colorQuantity = Number(colorMatched[1])
        if (colorQuantity > limitQuantity) return sum
      }
    }
  }

  const gameNumber = Number(game.match(/\d+/)[0])
  return sum + gameNumber
}, 0)

console.log(result)
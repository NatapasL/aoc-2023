const { input } = require('./input')

const result = input.reduce((sum, line) => {
  const [_, samples] = line.split(':')

  const minimumQuantity = {
    red: 0,
    green: 0,
    blue: 0
  }
  
  for(const sample of samples.split(';')) {
    for (const [color, currentMinimumQuantity] of Object.entries(minimumQuantity)) {
      const regexp = new RegExp(`(\\d+) ${color}`)
      const colorMatched = sample.match(regexp)

      if (colorMatched) {
        const colorQuantity = Number(colorMatched[1])
        if (colorQuantity > currentMinimumQuantity) minimumQuantity[color] = colorQuantity
      }
    }
  }

  return sum + (minimumQuantity.red * minimumQuantity.blue * minimumQuantity.green)
}, 0)

console.log(result)
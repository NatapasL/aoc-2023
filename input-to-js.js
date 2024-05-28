const fs = require('fs')

const multilineInput = fs.readFileSync('./input', { encoding: 'utf-8' })
console.log(multilineInput)
const parsedLine = multilineInput.split('\n').map((line) => `\n\t'${line}'`)

const outputText = `const input = [${parsedLine}\n]

module.exports = { input }
`

fs.writeFileSync('./input.js', outputText)
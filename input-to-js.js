const fs = require('fs')

const multilineInput = fs.readFileSync('./input', { encoding: 'utf-8' })
const parsedLine = multilineInput.split('\r\n').map((line) => `\n\t'${line}'`)

const outputText = `const input = [${parsedLine}\n]

module.exports = { input }
`

fs.writeFileSync('./input.js', outputText)
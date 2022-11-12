const prompt = require('prompt-sync')({ sigint: true })
const Algorithms = require('./algorithms')
const { FILE_NAME } = require('./constants')

const main = () => {
  let end = false

  while (!end) {
    const chosenAlgorithm = prompt('Please choose 1 for XOR and 2 for Caesar: ')

    if (!['1', '2'].includes(chosenAlgorithm)) {
      console.log('You write wrong number')
      continue
    }

    if (chosenAlgorithm === '1') {
      Algorithms.XOR.xorTask(FILE_NAME)
    }

    if (chosenAlgorithm === '2') {
      Algorithms.Caesar.caesarTask(FILE_NAME)
    }

    const isEnd = prompt('Should we end yes/no: ')

    if (!['yes', 'no'].includes(isEnd)) {
      console.log('Your answer is not correct')
      continue
    }

    if (isEnd === 'yes') end = true
  }
}

main()

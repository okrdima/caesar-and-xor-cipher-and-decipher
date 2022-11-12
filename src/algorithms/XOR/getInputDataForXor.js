const prompt = require('prompt-sync')({ sigint: true })

const getInputDataForXor = () => {
  const enteredPhrase = prompt(
    'Please enter phrase that should be encrypted and decrypted: '
  )
  const xorKey = prompt('Please enter xor key: ')

  return { enteredPhrase, xorKey }
}

module.exports = getInputDataForXor

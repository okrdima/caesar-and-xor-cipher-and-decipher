const prompt = require('prompt-sync')({ sigint: true })

const getInputDataForCaesar = () => {
  const enteredPhrase = prompt(
    'Please enter phrase that should be encrypted and decrypted: '
  )
  const shiftNumber = prompt('Please enter shiftNumber: ')

  return { enteredPhrase, shiftNumber }
}

module.exports = getInputDataForCaesar

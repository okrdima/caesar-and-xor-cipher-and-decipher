const caesar = require('./Caesar')
const getInputDataForCaesar = require('./getInputDataForCaesar')
const FileOperations = require('../../helpers')

const caesarTask = (fileName) => {
  if (!fileName) {
    console.log('File name is required \n')
    return
  }
  const { enteredPhrase, shiftNumber } = getInputDataForCaesar()

  const { cipherAlphabet, encipher, decipher } = caesar(shiftNumber)

  console.log('cipherAlphabet', cipherAlphabet)

  const encryptedString = encipher(enteredPhrase)
  console.log(`Write file encrypted string - ${encryptedString}`)

  FileOperations.writeTxtFile(fileName, encryptedString)

  const stringThatShouldBeDecrypted = FileOperations.readTxtFile(fileName)
  console.log(
    'Read string that should be decrypted from file - ',
    stringThatShouldBeDecrypted
  )

  const decryptedString = decipher(stringThatShouldBeDecrypted)

  console.log('decryptedString - ', decryptedString)

  FileOperations.deleteFile(fileName)
}

module.exports = caesarTask

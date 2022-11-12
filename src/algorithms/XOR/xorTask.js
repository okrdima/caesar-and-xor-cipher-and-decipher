const getInputDataForXor = require('./getInputDataForXor')
const encryptDecryptXOR = require('./encryptDecryptXOR')
const FileOperations = require('../../helpers')

const xorTask = (fileName) => {
  if (!fileName) {
    console.log('File name is required \n')
    return
  }
  const { enteredPhrase, xorKey } = getInputDataForXor()

  const encryptedString = encryptDecryptXOR(enteredPhrase, xorKey)
  console.log(`Write file encrypted string - ${encryptedString}`)

  FileOperations.writeTxtFile(fileName, encryptedString)

  const stringThatShouldBeDecrypted = FileOperations.readTxtFile(fileName)
  console.log(
    'Read string that should be decrypted from file - ',
    stringThatShouldBeDecrypted
  )

  const decryptedString = encryptDecryptXOR(stringThatShouldBeDecrypted, xorKey)

  console.log('decryptedString - ', decryptedString)

  FileOperations.deleteFile(fileName)
}

module.exports = xorTask

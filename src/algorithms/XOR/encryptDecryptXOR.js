// The same function is used to encrypt and decrypt
const encryptDecryptXOR = (inputString, xorKey = 'secret_phrase_xorKey') =>
  inputString
    .split('')
    .map((char) =>
      // perform XOR operation of key with every character in string
      String.fromCharCode(char.charCodeAt(0) ^ xorKey.charCodeAt(0))
    )
    .join('')

module.exports = encryptDecryptXOR

const { ALPHABET } = require('../../constants')
const transformAlphabet = require('./transformAlphabet')

const isLowerCase = (str) =>
  str === str.toLowerCase() && str !== str.toUpperCase()

const generateCaesarCipher = (shift) => {
  // Adjust Shift (Over 26 Characters)
  if (+shift > ALPHABET.ALPHABET_UPPER?.length) {
    // Assign Remainder As Shift
    shift = +shift % ALPHABET.ALPHABET_UPPER?.length
  }

  const cipherAlphabetUpper = transformAlphabet(ALPHABET.ALPHABET_UPPER, shift)

  const cipherAlphabetLower = transformAlphabet(ALPHABET.ALPHABET_LOWER, shift)

  const makeTranslator = (sourceAlphabet, targetAlphabet) => (message) => {
    const [sourceAlphabetUpperCase, sourceAlphabetLowerCase] = sourceAlphabet
    const [targetAlphabetUpperCase, targetAlphabetLowerCase] = targetAlphabet

    return message
      .split('')
      .map((symbol) => {
        if (
          ALPHABET.OTHER_SYMBOLS.includes(symbol) ||
          ALPHABET.NUMBERS.includes(symbol)
        )
          return symbol

        const isSymbolLowerCase = isLowerCase(symbol)

        if (isSymbolLowerCase) {
          const index = sourceAlphabetLowerCase.indexOf(symbol)
          return targetAlphabetLowerCase[index]
        }

        const index = sourceAlphabetUpperCase.indexOf(symbol)
        return targetAlphabetUpperCase[index]
      })
      .join('')
  }

  return {
    cipherAlphabet: cipherAlphabetUpper,
    encipher: makeTranslator(
      [ALPHABET.ALPHABET_UPPER, ALPHABET.ALPHABET_LOWER],
      [cipherAlphabetUpper, cipherAlphabetLower]
    ),
    decipher: makeTranslator(
      [cipherAlphabetUpper, cipherAlphabetLower],
      [ALPHABET.ALPHABET_UPPER, ALPHABET.ALPHABET_LOWER]
    )
  }
}

module.exports = generateCaesarCipher

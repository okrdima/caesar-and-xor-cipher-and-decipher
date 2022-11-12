const transformAlphabet = (alphabetThatShouldBeTransformed, shift) =>
  alphabetThatShouldBeTransformed.map((_symbol, index, alphabet) => {
    const newIndex = (+shift + index) % alphabet.length
    return alphabet[newIndex]
  })

module.exports = transformAlphabet

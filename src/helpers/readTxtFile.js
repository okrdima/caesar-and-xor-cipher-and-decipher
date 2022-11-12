const fs = require('fs')

const readTxtFile = (fileName) => {
  try {
    return fs.readFileSync(`${fileName}.txt`, 'utf-8')
  } catch (err) {
    console.error(`Error reading file ${fileName}`, err)
  }
}

module.exports = readTxtFile

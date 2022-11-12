const fs = require('fs')

const writeTxtFile = (fileName, content) => {
  try {
    fs.writeFileSync(`${fileName}.txt` || 'defaultWriteName.txt', content)
  } catch (err) {
    console.error(`Error reading file ${fileName}`, err)
  }
}

module.exports = writeTxtFile

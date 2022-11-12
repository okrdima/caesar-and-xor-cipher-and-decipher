const fs = require('fs')

const deleteFile = (fileName) => {
  try {
    fs.unlinkSync(`${fileName}.txt`)
  } catch (error) {
    console.error(`Error deleting file ${fileName}`, error)
  }
}

module.exports = deleteFile

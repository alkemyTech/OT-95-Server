const fs = require('fs');
const path = require('path');

module.exports = {
  saveTempImage: async (img) => {
    if (!img) {
      return new Error('No image uploaded');
    }
    const tempFolder = path.join(__dirname, '../temp');

    if (!fs.existsSync(tempFolder)) {
      fs.mkdirSync(tempFolder);
    }
    const uploadPath = path.join(tempFolder, 'tempfile.jpg');
    fs.writeFileSync(uploadPath, img, 'base64');

    return uploadPath;
  }
};

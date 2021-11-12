const fs = require('fs');
const path = require('path');

module.exports = {
  saveTempImage: async (img) => {
    if (!img) {
      return new Error('No image uploaded');
    }
    const uploadPath = path.join(__dirname, '../temp/', 'tempfile.jpg');
    fs.writeFileSync(uploadPath, img, 'base64');

    return uploadPath;
  }
};

const fs = require('fs');
const { v4: uuid } = require('uuid');
const { upload } = require('../utils/AWS-S3');

const removeTempFile = (path) => {
  fs.unlink(path, (err) => {
    if (err) throw err;
  });
};

module.exports = {
  uploadFile: async ({ mimetype, path }) => {
    try {
      const id = uuid();
      const fileName = `${id}.${mimetype.split('/')[1]}`;
      const stream = fs.createReadStream(path);
      const { Location } = await upload(stream, fileName, mimetype);
      removeTempFile(path);
      return Location;
    } catch (error) {
      throw error;
    }
  },
};

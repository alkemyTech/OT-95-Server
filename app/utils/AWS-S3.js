const AWS = require('aws-sdk');
const config = require('../config/config').S3;

const S3 = new AWS.S3({
  accessKeyId: config.accessKeyId,
  secretAccessKey: config.secretAccessKey,
  region: config.region,
});

module.exports = {

  upload: (body, fileName, mimetype) => {
    const params = {
      Bucket: process.env.S3_BUCKET,
      Key: fileName,
      Body: body,
      ACL: 'public-read',
      ContentType: mimetype,
    };
    return S3.upload(params, (err, data) => {
      if (err) {
        console.log('Error', err);
        return err;
      }
      return data;
    });
  },

  download: (fileName) => {
    const params = {
      Bucket: process.env.S3_BUCKET,
      Key: fileName,
    };
    return S3.getObject(params, (err, data) => {
      if (err) {
        console.log('Error', err);
        return err;
      }
      return data;
    });
  },
};

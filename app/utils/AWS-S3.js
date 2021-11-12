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
      Bucket: config.bucket,
      Key: fileName,
      Body: body,
      ACL: 'public-read',
      ContentType: mimetype,
    };
    return S3.upload(params).promise();
  },

  download: (fileName) => {
    const params = {
      Bucket: process.env.S3_BUCKET,
      Key: fileName,
    };
    return S3.getObject(params).promise();
  },
};

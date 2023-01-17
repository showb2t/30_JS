const { getSignedUrl } = require('@aws-sdk/cloudfront-signer');

const cloudfrontDistributionDomain = "https://your.cloudfront.net";
const s3ObjectKey = "s3-uploaded-image.jpg";
const url = `${cloudfrontDistributionDomain}/${s3ObjectKey}`;
const privateKey = "insert-private-key-generated-with-openssl-in-single-line"
const keyPairId = "public-key-id-on-cloudfront";
const dateLessThan = new Date(Date.now() + 1000 * 60 * 10); // change the expiry time as you need

const signedUrl = getSignedUrl({
  url,
  keyPairId,
  dateLessThan,
  privateKey,
});

console.log( signedUrl );

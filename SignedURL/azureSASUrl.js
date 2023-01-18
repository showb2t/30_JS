var storage = require("@azure/storage-blob")

const accountname ="storage-account-name";
const key = "access-key";
const cerds = new storage.StorageSharedKeyCredential(accountname,key);
const blobServiceClient = new storage.BlobServiceClient(`https://${accountname}.blob.core.windows.net`,cerds);
const containerName = "private-container-name";
const client = blobServiceClient.getContainerClient(containerName)
const blobName = "image.jpg";
const blobClient = client.getBlobClient(blobName);

const blobSAS = storage.generateBlobSASQueryParameters({
      containerName, 
      blobName, 
      permissions: storage.BlobSASPermissions.parse("racwd"), 
      startsOn: new Date(),
      expiresOn: new Date(new Date().valueOf() + 86400 * 2)
    },
    cerds 
  ).toString();

const sasUrl= blobClient.url+"?"+blobSAS;
console.log(sasUrl);

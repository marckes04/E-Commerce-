const cloudinary = require("cloudinary").v2;
const multer = require("multer");

cloudinary.config({
  cloud_name: "ddscwprm9",
  api_key: "381756828818647",
  api_secret: "NWUNjo-FhBD4MGAdr6ORmVDdrzY",
});

const storage = new multer.memoryStorage();

async function ImageUploadUtil(file) {
  const result = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
  });
  return result;
}

const upload = multer({ storage });

module.exports = { upload, ImageUploadUtil };
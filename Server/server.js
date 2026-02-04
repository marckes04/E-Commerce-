async function uploadImageToCloudinary() {
  setImageLoadingState(true);
  
  const data = new FormData();
  // "image" debe ser el mismo nombre que usas en upload.single("image")
  data.append("image", imageFile); 

  try {
    const response = await axios.post(
      "http://localhost:5000/api/admin/products/upload-image", // URL Corregida
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    if (response.data?.success) {
      // Importante: Cloudinary devuelve secure_url o url dentro de result
      setUploadedImageUrl(response.data.result.secure_url || response.data.result.url);
      setImageLoadingState(false);
    }
  } catch (error) {
    console.error("Error detallado:", error.response?.data || error.message);
    setImageLoadingState(false);
  }
}
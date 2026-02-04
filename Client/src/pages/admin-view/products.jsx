import { Button } from "../../components/ui/button";
import { useState, Fragment, useEffect } from "react"; // 1. Agregado useEffect
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle,
  SheetDescription // Para quitar el warning de la consola
} from "../../components/ui/sheet"; 
import CommonForm from "@/components/common/form";
import ProductImageUpload from "@/components/admin-view/image-upload";

const addFormProductFormElements = [
  { label: "Title", name: "title", componentType: "input", type: "text", placeholder: "Enter product title" },
  { label: "Description", name: "description", componentType: "textarea", placeholder: "Enter product description" },
  { 
    label: "Category", name: "category", componentType: "select", 
    options: [
      { id: "men", label: "Men" },
      { id: "women", label: "Women" },
      { id: "kids", label: "Kids" },
      { id: "accessories", label: "Accessories" },
      { id: "footwear", label: "Footwear" },
    ] 
  },
  { 
    label: "Brand", name: "brand", componentType: "select",
    options: [
      { id: "nike", label: "Nike" },
      { id: "adidas", label: "Adidas" },
      { id: "puma", label: "Puma" },
      { id: "levi", label: "Levi's" },
      { id: "zara", label: "Zara" },
    ]
  },
  { label: "Price", name: "price", componentType: "input", type: "number", placeholder: "Enter product price" },
  // CORRECCIÓN 1: name cambió de "salesPrice" a "salePrice" para coincidir con initialFormData y el Backend
  { label: "Sale Price", name: "salePrice", componentType: "input", type: "number", placeholder: "Enter sale price (optional)" },
  { label: "Total Stock", name: "totalStock", componentType: "input", type: "number", placeholder: "Enter total stock" },
];

const initialFormData = {
  image: null,
  title: "",
  description: "",
  category: "",
  brand: "",
  price: "",
  salePrice: "", 
  totalStock: "",
};

function AdminProducts() {
  const [openCreateProductsDialog, setOpenCreateProductsDialog] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [imageFile, setImageFile] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState('');
  const [imageLoadingState, setImageLoadingState] = useState(false);

  // CORRECCIÓN 2: Este efecto "pega" la URL de Cloudinary al formData
  useEffect(() => {
    if (uploadedImageUrl !== "") {
      setFormData((prevData) => ({
        ...prevData,
        image: uploadedImageUrl,
      }));
    }
  }, [uploadedImageUrl]);

  function onSubmit(event) {
    event.preventDefault();
    // Ahora verás en consola que image ya no es null
    console.log("Datos enviados al servidor:", formData);
    
    // Aquí iría tu dispatch o llamada a la API para guardar el producto
  }

  return (
    <Fragment>
      <div className="mb-5 w-full flex justify-end">
        <Button onClick={() => setOpenCreateProductsDialog(true)}>
          Add New Product
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
        {/* Renderizado de productos */}
      </div>

      <Sheet 
        open={openCreateProductsDialog} 
        onOpenChange={() => {
          setOpenCreateProductsDialog(false);
          setFormData(initialFormData);
          setUploadedImageUrl(''); // Limpiar imagen al cerrar
          setImageFile(null);
        }}
      >
        <SheetContent side="right" className="overflow-auto bg-white sm:max-w-[450px] p-0">
          <SheetHeader className="border-b p-6">
            <SheetTitle>Add New Product</SheetTitle>
            {/* CORRECCIÓN 3: Agregado para quitar el warning de accesibilidad */}
            <SheetDescription>
              Upload an image and fill in the product details.
            </SheetDescription>
          </SheetHeader>
          
          <ProductImageUpload 
            imageFile={imageFile} 
            setImageFile={setImageFile} 
            uploadedImageUrl={uploadedImageUrl} 
            setUploadedImageUrl={setUploadedImageUrl}
            setImageLoadingState={setImageLoadingState}
            imageLoadingState={imageLoadingState}
          />
          
          <div className="py-6 px-8">
            <CommonForm
              onSubmit={onSubmit}
              formData={formData}
              setFormData={setFormData}
              buttonText='Add'
              formControls={addFormProductFormElements}
            />
          </div>
        </SheetContent>
      </Sheet>
    </Fragment>
  );
}

export default AdminProducts;
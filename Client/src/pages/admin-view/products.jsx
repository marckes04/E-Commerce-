import { Button } from "../../components/ui/button";
import { useState, Fragment } from "react";
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle 
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
  { label: "Sale Price", name: "salesPrice", componentType: "input", type: "number", placeholder: "Enter sale price (optional)" },
  { label: "Total Stock", name: "totalStock", componentType: "input", type: "number", placeholder: "Enter total stock" },
];

const initialFormData = {
    image: null,
    title: '',
    description: '',
    category: '',
    brand: '',
    price: "",
    salesPrice: '',
    totalStock: ''
}

function AdminProducts() {
  const [openCreateProductsDialog, setOpenCreateProductsDialog] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [imageFile, setImageFile] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState('');

  function onSubmit(event) {
    event.preventDefault();
    console.log(formData);
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
        }}
      >
        <SheetContent side="right" className="overflow-auto bg-white sm:max-w-[450px] p-0">
          <SheetHeader className="border-b p-6">
            <SheetTitle>Add New Product</SheetTitle>
          </SheetHeader>
          
          {/* Componente de imagen intacto */}
          <ProductImageUpload 
            imageFile={imageFile} 
            setImageFile={setImageFile} 
            uploadedImageUrl={uploadedImageUrl} 
            setUploadedImageUrl={setUploadedImageUrl}
          />
          
          <div className="py-6 px-8">
            {/* Formulario intacto con todos sus elementos */}
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
import { useEffect, useRef, useState } from "react"; 
import { Input } from "../ui/input";
import { Label } from "../ui/label"; 
import { FileIcon, UploadCloudIcon, XIcon } from "lucide-react"; // Opcional: un icono queda mejor
import { Button } from "../ui/button";

function ProductImageUpload({
    imageFile,
    setImageFile,
    uploadedImageUrl, 
    setUploadedImageUrl,
}) {
    const inputRef = useRef(null);

    function handleImageFileChange(event) {
        const selectedFile = event.target.files?.[0];
        if (selectedFile) setImageFile(selectedFile);
    }

    // Función para manejar el "Drag & Drop" (arrastrar archivos)
    function handleDragOver(event) {
        event.preventDefault();
    }

    function handleDrop(event) {
        event.preventDefault();
        const droppedFile = event.dataTransfer.files?.[0];
        if (droppedFile) setImageFile(droppedFile);
    }

    function handleRemoveImage()
    {
        setImageFile(null)
        if(inputRef.current)
        {
            inputRef.current.value = "";
        }
    }

    return (  
        <div className="w-full max-w-md mx-auto p-4">
            <Label className="text-lg font-semibold mb-2 block">
                Upload Image
            </Label>
            <div 
                onDragOver={handleDragOver} 
                onDrop={handleDrop} 
                className="border-2 border-dashed rounded-lg p-4"
            >
                <Input 
                    id="image-upload" 
                    type="file" 
                    className="hidden" 
                    ref={inputRef}
                    onChange={handleImageFileChange}
                />
                <div 
                    onClick={() => inputRef.current.click()} 
                    className="cursor-pointer flex flex-col items-center justify-center h-32 hover:bg-gray-50 transition-all"
                >
                    {
                        !imageFile ? (
                            <div className="flex flex-col items-center">
                                <UploadCloudIcon className="w-10 h-10 text-muted-foreground mb-2" />
                                <span className="text-muted-foreground">Click or drag to upload image</span>
                            </div>
                        ) : (
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <FileIcon className="w-8 text-primary mr-2 h-8"/>
                                </div>
                                <p className="text-sm font-medium">{imageFile.name}</p>
                                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground" onClick={handleRemoveImage}>
                                    <XIcon className="w-4 h-4"/>
                                    <span className="sr-only">Remove File</span>
                                </Button>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default ProductImageUpload;
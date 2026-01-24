import { useNavigate } from "react-router-dom";

function ShoppingHome() {
const navigate = useNavigate();

return (
    <div className="flex flex-col w-full min-h-screen">
    <div className="p-8">
        <h1 className="text-4xl font-extrabold mb-4">Bienvenido a la Tienda</h1>
        <p className="text-lg text-gray-600 mb-8">
            Explora nuestros productos y cuando estés listo, gestiona tu envío.
        </p>
        
        <div className="bg-gray-100 p-10 rounded-xl border-2 border-dashed border-gray-300 text-center">
            <h2 className="text-2xl font-bold mb-4">¿Listo para finalizar?</h2>
            <button 
            onClick={() => navigate("/shop/checkout")}
            className="bg-black text-white px-8 py-3 rounded-lg font-bold hover:bg-gray-800 transition-all"
            >
            Ingresar Dirección y Checkout
            </button>
        </div>
        </div>
    </div>
  );
}

export default ShoppingHome;
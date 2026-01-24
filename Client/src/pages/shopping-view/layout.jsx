import { Outlet } from "react-router-dom";
import ShoppingHeader from "./header"; // Ajusta si tu header está en otra carpeta

function ShoppingLayout() {
  return (
    <div className="flex flex-col bg-white overflow-hidden">
      {/* El Header siempre presente arriba */}
      <ShoppingHeader />
      <main className="flex flex-col w-full">
        {/* Aquí es donde React intercambia Home por Checkout */}
        <Outlet />
      </main>
    </div>
  );
}

export default ShoppingLayout;
import { Route, Routes, Navigate } from "react-router-dom";
import AuthLayout from "./components/auth/layout";
import AuthLogin from "./pages/auth/login";
import AuthRegister from "./pages/auth/register";
import AdminLayout from "./components/adminView/layout"; 
import AdminDashboard from "./pages/admin View/dashboard"; // Verifica si tu carpeta tiene espacio "admin View" o no

// --- IMPORTS QUE FALTABAN O ESTABAN MAL ---
import ShoppingLayout from "./pages/shopping View/layout";
import NotFound from "./pages/Not-Found";
import ShoppingHome from "./pages/shopping View/home";      // <--- FALTABA ESTE
import ShoppingListing from "./pages/shopping View/listing"; // <--- FALTABA ESTE
import ShoppingAccount from "./pages/shopping View/account"; // <--- CORREGIDO (Antes apuntaba a checkout)
import ShoppingCheckout from "./pages/shopping View/checkout";

function App() {
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <Routes>
        {/* Redirección inicial */}
        <Route path="/" element={<Navigate to="/auth/login" replace />} />

        {/* Rutas de Autenticación */}
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<AuthLogin />} />
          <Route path="register" element={<AuthRegister />} />
        </Route>

        {/* Rutas de Admin */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="/admin/dashboard" replace />} />
          <Route path="dashboard" element={<AdminDashboard />} /> {/* Usé el componente importado */}
          <Route path="products" element={<div>Productos</div>} />
          <Route path="orders" element={<div>Ordenes</div>} />
          <Route path="features" element={<div>Features</div>} />
        </Route>

        {/* Rutas de Shopping */}
        <Route path="/shop" element={<ShoppingLayout />}>
          <Route path="home" element={<ShoppingHome />} />
          <Route path="listing" element={<ShoppingListing />} />
          <Route path="checkout" element={<ShoppingCheckout />} />
          <Route path="account" element={<ShoppingAccount />} />
        </Route>
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
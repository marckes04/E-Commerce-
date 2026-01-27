import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { checkAuth } from "./store/auth-slice";

// Importación de Layouts (Asegúrate de que estas rutas coincidan con tus carpetas)
import AuthLayout from "./components/auth/layout";
import AdminLayout from "./components/admin-view/layout"; // RUTA CORRECTA
import ShoppingLayout from "./pages/shopping-view/layout"

// Importación de Páginas
import AuthLogin from "./pages/auth/login";
import AuthRegister from "./pages/auth/register";
import AdminDashboard from "./pages/admin-view/dashboard";
import AdminProducts from "./pages/admin-view/products";
import ShoppingHome from "./pages/shopping-view/home";

import CheckAuth from "./components/common/check-auth";
import UnauthPage from "./pages/unauth-Page";
import NotFound from "./pages/Not-Found";
import AdminOrders from "./pages/admin-view/orders";

function App() {
  const { user, isAuthenticated, isLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  if (isLoading) return (
    <div className="flex items-center justify-center min-h-screen font-bold text-lg">
      Verificando sesión...
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Banner de Verificación de Admin (Opcional para pruebas) */}
      {isAuthenticated && user?.role === "admin" && (
        <div className="bg-black text-white text-center py-1 text-[10px] uppercase tracking-[0.2em] z-50">
          Admin Mode: {user?.userName}
        </div>
      )}

      <Routes>
        {/* RUTAS DE AUTENTICACIÓN */}
        <Route path="/auth" element={<CheckAuth isAuthenticated={isAuthenticated} user={user}><AuthLayout /></CheckAuth>}>
          <Route path="login" element={<AuthLogin />} />
          <Route path="register" element={<AuthRegister />} />
        </Route>

        {/* RUTAS DE ADMINISTRADOR (Aquí es donde se verá el Sidebar) */}
        <Route path="/admin" element={<CheckAuth isAuthenticated={isAuthenticated} user={user}><AdminLayout /></CheckAuth>}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="orders" element={<AdminOrders/>}/>
        </Route>

        {/* RUTAS DE LA TIENDA */}
        <Route path="/shop" element={<CheckAuth isAuthenticated={isAuthenticated} user={user}><ShoppingLayout /></CheckAuth>}>
          <Route path="home" element={<ShoppingHome />} />
        </Route>

        {/* RUTAS DE ERROR */}
        <Route path="/unauth-page" element={<UnauthPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
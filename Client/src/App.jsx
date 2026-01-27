import { Route, Routes, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { checkAuth } from "./store/auth-slice";

// Layouts
import AuthLayout from "./components/auth/layout";
import AdminLayout from "./components/admin-view/layout";
import ShoppingLayout from "./pages/shopping-view/layout";

// Páginas
import AuthLogin from "./pages/auth/login";
import AuthRegister from "./pages/auth/register";
import AdminDashboard from "./pages/admin-view/dashboard";
import AdminProducts from "./pages/admin-view/products";
import AdminOrders from "./pages/admin-view/orders";
import ShoppingHome from "./pages/shopping-view/home";

// Componentes de Seguridad
import CheckAuth from "./components/common/check-auth";
import UnauthPage from "./pages/unauth-Page";
import NotFound from "./pages/Not-Found";

function App() {
  const { user, isAuthenticated, isLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  // Si está cargando, mostramos un loader para evitar que parpadee el contenido
  if (isLoading) return (
    <div className="flex items-center justify-center min-h-screen font-bold text-lg">
      Cargando...
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Routes>
        {/* RUTA RAÍZ: Si no está autenticado, va al login directamente */}
        <Route path="/" element={<Navigate to="/auth/login" />} />

        {/* RUTAS DE AUTENTICACIÓN: CheckAuth enviará al usuario fuera de aquí si ya está logueado */}
        <Route path="/auth" element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <AuthLayout />
          </CheckAuth>
        }>
          <Route path="login" element={<AuthLogin />} />
          <Route path="register" element={<AuthRegister />} />
        </Route>

        {/* RUTAS DE ADMINISTRADOR: CheckAuth bloquea esta ruta si isAuthenticated es false */}
        <Route path="/admin" element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <AdminLayout />
          </CheckAuth>
        }>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="orders" element={<AdminOrders />} />
        </Route>

        {/* RUTAS DE LA TIENDA */}
        <Route path="/shop" element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <ShoppingLayout />
          </CheckAuth>
        }>
          <Route path="home" element={<ShoppingHome />} />
        </Route>

        <Route path="/unauth-page" element={<UnauthPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
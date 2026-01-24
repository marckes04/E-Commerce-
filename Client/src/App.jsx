import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import AuthLayout from "./components/auth/layout";
import AuthLogin from "./pages/auth/login";
import AuthRegister from "./pages/auth/register";
import AdminLayout from "./components/adminView/layout"; 
import AdminDashboard from "./pages/admin View/dashboard"; 

import ShoppingLayout from "./pages/shopping View/layout";
import ShoppingHome from "./pages/shopping View/home";       
import ShoppingListing from "./pages/shopping View/listing"; 
import ShoppingAccount from "./pages/shopping View/account"; 
import ShoppingCheckout from "./pages/shopping View/checkout";

import CheckAuth from "./components/common/check-auth";
import UnauthPage from "./pages/unauth-Page";
import NotFound from "./pages/Not-Found";

function App() {
  // Sacamos el estado de auth. 
  // IMPORTANTE: añadimos un valor por defecto para que no sea undefined
  const { user, isAuthenticated, isLoading } = useSelector((state) => state.auth || {});

  // Si el sistema está cargando la sesión, esperamos. 
  // Esto evita que CheckAuth te rebote al login por error.
  if (isLoading) return <div className="flex h-screen w-full items-center justify-center">Cargando...</div>;

  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <Routes>
        <Route path="/" element={<Navigate to="/auth/login" replace />} />

        {/* Rutas Auth */}
        <Route path="/auth" element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <AuthLayout />
          </CheckAuth>
        }>
          <Route path="login" element={<AuthLogin />} />
          <Route path="register" element={<AuthRegister />} />
        </Route>

        {/* Rutas Admin */}
        <Route path="/admin" element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <AdminLayout />
          </CheckAuth>
        }>
          <Route path="dashboard" element={<AdminDashboard />} />
        </Route>

        {/* Rutas Shop */}
        <Route path="/shop" element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <ShoppingLayout />
          </CheckAuth>
        }>
          <Route path="home" element={<ShoppingHome />} />
          <Route path="listing" element={<ShoppingListing />} />
          <Route path="checkout" element={<ShoppingCheckout />} />
          <Route path="account" element={<ShoppingAccount />} />
        </Route>
        
        <Route path="/unauth-page" element={<UnauthPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
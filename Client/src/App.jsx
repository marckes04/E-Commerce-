import { Route, Routes, Navigate } from "react-router-dom";
import AuthLayout from "./components/auth/layout";
import AuthLogin from "./pages/auth/login";
import AuthRegister from "./pages/auth/register";
import AdminLayout from "./components/adminView/layout"; 
import AdminDashboard from "./pages/admin View/dashboard"; 

import ShoppingLayout from "./pages/shopping View/layout";
import NotFound from "./pages/Not-Found";
import ShoppingHome from "./pages/shopping View/home";      
import ShoppingListing from "./pages/shopping View/listing"; 
import ShoppingAccount from "./pages/shopping View/account"; 
import ShoppingCheckout from "./pages/shopping View/checkout";
import CheckAuth from "./components/common/check-auth";
import UnauthPage from "./pages/unauth-Page";
import { useSelector } from "react-redux";


function App() {

  


  const {user,isAuthenticated} = useSelector((state) => state.auth);

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
          <Route index element={<Navigate to="/admin/dashboard" replace />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="products" element={<div>Productos</div>} />
          <Route path="orders" element={<div>Ordenes</div>} />
          <Route path="features" element={<div>Features</div>} />
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
        
        {/* RUTA DE NO AUTORIZADO (Necesaria para que CheckAuth no rompa) */}
        <Route path="/unauth-page" element={<div>You do not have permission to view this page</div>} />

        <Route path="*" element={<NotFound />} />
        <Route path="unauth-page" element={<UnauthPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
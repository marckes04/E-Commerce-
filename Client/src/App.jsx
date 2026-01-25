import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { checkAuth } from "./store/auth-slice";

import AuthLayout from "./components/auth/layout";
import AuthLogin from "./pages/auth/login";
import AuthRegister from "./pages/auth/register";

// CORRECCIÓN: Ruta cambiada de shopping-view a admin-view según tu imagen
import AdminLayout from "./components/admin-view/layout"; 
import AdminDashboard from "./pages/admin-view/dashboard";

import ShoppingLayout from "./pages/shopping-view/layout";
import ShoppingHome from "./pages/shopping-view/home";

import CheckAuth from "./components/common/check-auth";
import UnauthPage from "./pages/unauth-Page";
import NotFound from "./pages/Not-Found";

function App() {
  const { user, isAuthenticated, isLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  if (isLoading) return <div className="flex items-center justify-center h-screen font-bold">Verificando sesión...</div>;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Banner para confirmar visualmente el rol de Admin */}
      {isAuthenticated && user?.role === "admin" && (
        <div className="bg-black text-white text-center py-2 text-xs font-mono uppercase tracking-widest border-b border-gray-800">
            Administrator Mode: {user?.userName || user?.email}
        </div>
      )}

      <Routes>
        <Route path="/auth" element={<CheckAuth isAuthenticated={isAuthenticated} user={user}><AuthLayout /></CheckAuth>}>
          <Route path="login" element={<AuthLogin />} />
          <Route path="register" element={<AuthRegister />} />
        </Route>

        <Route path="/admin" element={<CheckAuth isAuthenticated={isAuthenticated} user={user}><AdminLayout /></CheckAuth>}>
          <Route path="dashboard" element={<AdminDashboard />} />
        </Route>

        <Route path="/shop" element={<CheckAuth isAuthenticated={isAuthenticated} user={user}><ShoppingLayout /></CheckAuth>}>
          <Route path="home" element={<ShoppingHome />} />
        </Route>

        <Route path="/unauth-page" element={<UnauthPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
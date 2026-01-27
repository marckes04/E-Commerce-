import { Navigate, useLocation } from "react-router-dom";

function CheckAuth({ isAuthenticated, user, children }) {
  const location = useLocation();

  // 1. Si NO está autenticado y no está en login/register, mándalo al login
  if (!isAuthenticated && !(location.pathname.includes("/login") || location.pathname.includes("/register"))) {
    return <Navigate to="/auth/login" />;
  }

  // 2. Si SÍ está autenticado y trata de entrar al login, mándalo a su dashboard
  if (isAuthenticated && (location.pathname.includes("/login") || location.pathname.includes("/register"))) {
    if (user?.role === "admin") {
      return <Navigate to="/admin/dashboard" />;
    } else {
      return <Navigate to="/shop/home" />;
    }
  }

  // 3. Si un usuario normal intenta entrar a rutas de admin
  if (isAuthenticated && user?.role !== "admin" && location.pathname.includes("admin")) {
    return <Navigate to="/unauth-page" />;
  }

  // 4. Si un admin intenta entrar a rutas de la tienda (Opcional, depende de tu lógica)
  if (isAuthenticated && user?.role === "admin" && location.pathname.includes("shop")) {
    return <Navigate to="/admin/dashboard" />;
  }

  return <>{children}</>;
}

export default CheckAuth;
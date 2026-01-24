import { Navigate, useLocation } from "react-router-dom";

function CheckAuth({ isAuthenticated, user, children }) {
  const location = useLocation();

  // Caso 1: No está logueado y quiere entrar a algo que no sea login/register
  if (
    !isAuthenticated &&
    !(location.pathname.includes("/login") || location.pathname.includes("/register"))
  ) {
    return <Navigate to="/auth/login" />;
  }

  // Caso 2: Ya está logueado y quiere entrar a login/register
  if (
    isAuthenticated &&
    (location.pathname.includes("/login") || location.pathname.includes("/register"))
  ) {
    if (user?.role === "admin") return <Navigate to="/admin/dashboard" />;
    return <Navigate to="/shop/home" />;
  }

  // Caso 3: No es admin y quiere entrar a admin
  if (
    isAuthenticated &&
    user?.role !== "admin" &&
    location.pathname.includes("admin")
  ) {
    return <Navigate to="/unauth-page" />;
  }

  return <>{children}</>;
}

export default CheckAuth;
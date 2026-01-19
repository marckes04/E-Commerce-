import { Navigate, useLocation } from "react-router-dom"; // <--- ¡FALTABA useLocation AQUÍ!

function CheckAuth({ isAuthenticated, user, children }) {
  const location = useLocation();

  // 1. Si NO está autenticado y NO está en login/register -> Mándalo al Login
  if (
    !isAuthenticated &&
    !(
      location.pathname.includes("/login") ||
      location.pathname.includes("/register")
    )
  ) {
    return <Navigate to="/auth/login" />;
  }

  // 2. Si SI está autenticado y trata de ir a login/register -> Mándalo a su dashboard
  if (
    isAuthenticated &&
    (location.pathname.includes("/login") ||
      location.pathname.includes("/register"))
  ) {
    if (user?.role === "admin") {
      return <Navigate to="/admin/dashboard" />;
    } else {
      return <Navigate to="/shop/home" />;
    }
  }

  // 3. Si es un usuario NORMAL y quiere entrar a ADMIN -> Bloquéalo
  if (
    isAuthenticated &&
    user?.role !== "admin" &&
    location.pathname.includes("admin")
  ) {
    return <Navigate to="/unauth-page" />;
  }

  // 4. Si es ADMIN y quiere entrar a la TIENDA (Shop) -> Mándalo a su dashboard
  // (Nota: Esto es opcional, a veces los admins quieren ver la tienda, pero el tutorial lo bloquea)
  if (
    isAuthenticated &&
    user?.role === "admin" &&
    location.pathname.includes("shop")
  ) {
    return <Navigate to="/admin/dashboard" />;
  }

  return <>{children}</>;
}

export default CheckAuth;
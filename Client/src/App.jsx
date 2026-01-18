import { Route, Routes, Navigate } from "react-router-dom";
// 1. IMPORTARLO AQUÍ 👇
import AuthLayout from "./components/auth/layout"; 
import AuthLogin from "./pages/auth/login";
import AuthRegister from "./pages/auth/register";

function App() {
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <Routes>
        <Route path="/" element={<Navigate to="/auth/login" replace />} />

        {/* 2. USARLO AQUÍ COMO ENVOLTORIO 👇 */}
        <Route path="/auth" element={<AuthLayout />}>
          {/* Gracias al <Outlet/>, estos componentes se verán en el lado derecho */}
          <Route path="login" element={<AuthLogin />} />
          <Route path="register" element={<AuthRegister />} />
        </Route>
        
      </Routes>
    </div>
  );
}

export default App;
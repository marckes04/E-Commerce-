import { Outlet } from "react-router-dom";
import AdminSideBar from "./sidebar";
import AdminHeader from "./header";

function AdminLayout() {
  return (
    <div className="flex min-h-screen w-full">
      {/* Sidebar a la izquierda */}
      <AdminSideBar />
      
      <div className="flex flex-1 flex-col">
        {/* Header arriba */}
        <AdminHeader />
        
        <main className="flex-1 flex bg-gray-100 p-4 md:p-6">
          {/* Aquí se pintarán las páginas hijas (dashboard, productos, etc) */}
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;
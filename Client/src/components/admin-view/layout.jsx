import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import AdminSideBar from "@/components/admin-view/sidebar"; // Asegúrate de crear este también
import AdminHeader from "@/components/admin-view/header";

function AdminLayout() {
  // Estado para controlar el menú lateral en móviles
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div className="flex min-h-screen w-full">
      {/* Sidebar - El menú lateral */}
      <AdminSideBar open={openSidebar} setOpen={setOpenSidebar} />
      
      <div className="flex flex-1 flex-col">
        {/* TU COMPONENTE HEADER */}
        <AdminHeader setOpen={setOpenSidebar} />
        
        <main className="flex-1 flex-col flex bg-muted/40 p-4 md:p-6">
          {/* Aquí se renderizan las sub-rutas (Dashboard, etc) */}
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;
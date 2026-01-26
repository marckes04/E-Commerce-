import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import AdminSideBar from "./sidebar";
import AdminHeader from "./header";

function AdminLayout() {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div className="flex min-h-screen w-full bg-muted/40">
      {/* Sidebar a la izquierda */}
      <AdminSideBar open={openSidebar} setOpen={setOpenSidebar} />
      
      <div className="flex flex-1 flex-col">
        {/* Header arriba */}
        <AdminHeader setOpen={setOpenSidebar} />
        
        {/* Contenido principal a la derecha */}
        <main className="flex-1 p-4 md:p-6 bg-white">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;
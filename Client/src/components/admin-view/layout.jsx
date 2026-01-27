import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import AdminSideBar from "./sidebar";
import AdminHeader from "./header";

function AdminLayout() {
  // Este estado controla si el menú se ve o no
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div className="flex min-h-screen w-full bg-muted/40">
      {/* Pasamos el estado al Sidebar */}
      <AdminSideBar open={openSidebar} setOpen={setOpenSidebar} />
      
      <div className="flex flex-1 flex-col">
        {/* Pasamos la función para abrirlo al Header */}
        <AdminHeader setOpen={setOpenSidebar} />
        
        <main className="flex-1 p-4 md:p-6 bg-white">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;
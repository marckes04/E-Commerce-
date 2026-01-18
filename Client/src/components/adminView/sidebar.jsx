import React from 'react';

function AdminSideBar() {
    return (
        <aside className="w-64 bg-gray-900 text-white hidden md:flex flex-col p-4">
            <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
            <nav className="flex flex-col gap-4">
                <div>Dashboard</div>
                <div>Productos</div>
                <div>Ordenes</div>
            </nav>
        </aside>
    );
}

export default AdminSideBar;
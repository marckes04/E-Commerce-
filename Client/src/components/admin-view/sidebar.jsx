import { BadgeCheck, ChartNoAxesCombined, LayoutDashboard, ShoppingBasket, X } from 'lucide-react';
import React, { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';

export const adminSidebarMenuItems = [
    {
        id: 'dashboard',
        label: 'Dashboard',
        path: '/admin/dashboard',
        icon: <LayoutDashboard />
    },
    {
        id: 'products',
        label: 'Products',
        path: '/admin/products',
        icon: <ShoppingBasket />
    },
    {
        id: 'orders',
        label: 'Orders',
        path: '/admin/orders',
        icon: <BadgeCheck />
    }
];

function MenuItems({ setOpen }) {
    const navigate = useNavigate();

    return (
        <nav className='mt-8 flex-col flex gap-2'>
            {adminSidebarMenuItems.map((menuItem) => (
                <div 
                    key={menuItem.id} 
                    onClick={() => {
                        navigate(menuItem.path);
                        if (setOpen) setOpen(false); 
                    }}
                    className="flex cursor-pointer text-xl items-center gap-2 rounded-md px-3 py-2 text-slate-300 hover:bg-slate-800 hover:text-white transition-all"
                >
                    {menuItem.icon}
                    <span>{menuItem.label}</span>
                </div>
            ))}
        </nav>
    );
}

function AdminSideBar({ open, setOpen }) {
    const navigate = useNavigate();

    return (
        <Fragment>
            {/* 1. VERSIÓN MÓVIL (DESPLEGABLE) */}
            <div 
                className={`fixed inset-0 z-50 bg-black/80 transition-opacity duration-300 lg:hidden ${
                    open ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
                onClick={() => setOpen(false)}
            >
                <div 
                    className={`fixed inset-y-0 left-0 w-64 bg-slate-900 p-6 shadow-xl transition-transform duration-300 ${
                        open ? "translate-x-0" : "-translate-x-full"
                    }`}
                    onClick={(e) => e.stopPropagation()} // Evita que se cierre al clickear dentro del menú
                >
                    <div className="flex justify-between items-center mb-6 border-b border-slate-700 pb-4">
                        <div className="flex items-center gap-2">
                            <ChartNoAxesCombined size={28} className="text-yellow-400" />
                            <h1 className="text-xl font-black text-white">ADMIN</h1>
                        </div>
                        {/* Botón para cerrar manualmente */}
                        <button onClick={() => setOpen(false)} className="text-white">
                            <X size={24} />
                        </button>
                    </div>
                    <MenuItems setOpen={setOpen} />
                </div>
            </div>

            {/* 2. VERSIÓN ESCRITORIO (FIJA) */}
            <aside className="hidden lg:flex flex-col w-64 bg-slate-900 text-white p-6 shadow-2xl min-h-screen border-r border-slate-700">
                <div 
                    onClick={() => navigate('/admin/dashboard')} 
                    className="flex cursor-pointer items-center gap-2 mb-2 border-b border-slate-700 pb-4"
                >
                    <ChartNoAxesCombined size={28} className="text-yellow-400" />
                    <h1 className="text-xl font-black tracking-tight">ADMIN PANEL</h1>
                </div>
                <MenuItems />
            </aside>
        </Fragment>
    );
}

export default AdminSideBar;
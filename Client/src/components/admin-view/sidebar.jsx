import { BadgeCheck, ChartNoAxesCombined, LayoutDashboard, ShoppingBasket } from 'lucide-react';
import React from 'react';
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

// Corregido: Agregamos llaves {} y el nombre correcto de la variable
function MenuItems({ setOpen }) {
    const navigate = useNavigate();

    return (
        <nav className='mt-8 flex-col flex gap-2'>
            {adminSidebarMenuItems.map((menuItem) => (
                <div 
                    key={menuItem.id} 
                    onClick={() => {
                        navigate(menuItem.path);
                        if (setOpen) setOpen(false); // Cierra el sidebar en móviles al hacer click
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
        <aside className="hidden lg:flex flex-col w-64 bg-slate-900 text-white p-6 shadow-2xl min-h-screen border-r border-slate-700">
            <div 
                onClick={() => navigate('/admin/dashboard')} 
                className="flex cursor-pointer items-center gap-2 mb-2 border-b border-slate-700 pb-4"
            >
                <ChartNoAxesCombined size={28} className="text-yellow-400" />
                <h1 className="text-xl font-black tracking-tight">ADMIN PANEL</h1>
            </div>

            {/* Usamos el componente MenuItems aquí */}
            <MenuItems />
        </aside>
    );
}

export default AdminSideBar;
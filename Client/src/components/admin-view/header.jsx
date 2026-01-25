import { AlignJustify, LogOut } from 'lucide-react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { clearUser } from '@/store/auth-slice'; // Acción que limpia el estado

function AdminHeader({ setOpen }) {
    const dispatch = useDispatch();

    function handleLogout() {
        // Al ejecutar esto, CheckAuth detectará que isAuthenticated es false
        // y te mandará automáticamente al login.
        dispatch(clearUser());
    }

    return (
        <header className='flex items-center justify-between px-4 py-3 bg-background border-b'>
            {/* Solo se muestra en móviles para abrir el sidebar */}
            <button 
                onClick={() => setOpen(true)} 
                className='lg:hidden sm:block inline-flex items-center justify-center rounded-md p-2 hover:bg-muted'
            >
                <AlignJustify />
                <span className='sr-only'>Toggle Menu</span>
            </button>

            <div className='flex flex-1 justify-end'>
                <button 
                    onClick={handleLogout}
                    className='inline-flex gap-2 items-center rounded-md px-4 py-2 text-sm font-medium bg-black text-white hover:bg-slate-800 transition-colors'
                >
                    <LogOut size={16} />
                    Logout
                </button>
            </div>
        </header>
    );
}

export default AdminHeader;
import React from 'react';

function AdminHeader() {
    return (
        <header className="flex items-center justify-between px-6 py-4 bg-white border-b">
            <h1 className="text-lg font-bold">Header Admin</h1>
            <button className="bg-black text-white px-4 py-2 rounded">Logout</button>
        </header>
    );
}

export default AdminHeader;
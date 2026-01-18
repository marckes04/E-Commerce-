import { Outlet } from "react-router-dom";
import ShoppingHeader from "./header";

function ShoppingLayout() {
    return ( 
        <div className="flex flex-col bg-white overflow-hidden">
            Shopping Layout
            <main className="flex flex-col w-full">
                <Outlet />
                <ShoppingHeader />
            </main>
        </div>
    );
}

export default ShoppingLayout
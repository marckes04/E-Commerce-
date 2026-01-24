import { LogOut, ShoppingCart, User, House } from "lucide-react"; // Importar LogOut aquí
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearUser } from "../../store/auth-slice";

function ShoppingHeader() {
  const dispatch = useDispatch();

  function handleLogout() {
    // Aquí podrías disparar un thunk de logout al backend también
    dispatch(clearUser());
  }

  return (
    <header className="flex items-center justify-between p-4 border-b">
      <Link to="/shop/home"><House /></Link>
      <div className="flex gap-4">
        <ShoppingCart />
        <User />
        {/* Usando el componente LogOut de lucide-react */}
        <button onClick={handleLogout} className="text-red-600">
          <LogOut className="h-6 w-6" />
        </button>
      </div>
    </header>
  );
}

export default ShoppingHeader;
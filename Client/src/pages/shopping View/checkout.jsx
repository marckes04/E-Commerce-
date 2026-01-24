import { useSelector } from "react-redux";
import CommonForm from "@/components/common/form"; // Usando el alias @ que ya vimos que funciona

function ShoppingCheckout() {
  const { cartItems } = useSelector((state) => state.shopCart || { cartItems: [] });
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="flex flex-col">
      <div className="relative h-[300px] w-full overflow-hidden">
        <img 
          src="https://via.placeholder.com/1600x300" 
          className="h-full w-full object-cover object-center"
          alt="Banner"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5 p-5">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">Shipping Address</h2>
          {/* Aquí puedes renderizar tu componente de direcciones */}
          <div className="p-4 border rounded-md bg-gray-50">
            <p className="text-sm text-gray-600">User: {user?.userName}</p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">Order Summary</h2>
          <div className="mt-4 space-y-4">
            {cartItems && cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div key={item.productId} className="flex justify-between border-b pb-2">
                  <span>{item.title}</span>
                  <span>${item.price}</span>
                </div>
              ))
            ) : (
              <p>Your cart is empty</p>
            )}
            <div className="flex justify-between font-bold text-lg border-t pt-4">
              <span>Total</span>
              <span>${cartItems?.reduce((sum, item) => sum + item.price, 0) || 0}</span>
            </div>
            <button className="w-full bg-black text-white py-2 rounded-md hover:opacity-90">
              Checkout with PayPal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCheckout;
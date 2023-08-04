import React from "react";
import { useCart } from "@/utils/CartContext";
import CartItem from "@/components/organisms/CartItem"; // Create this component

const CartList: React.FC = () => {
  const { cartItems, cartTotal } = useCart();

  return (
    <div className="px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Cart List</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="flex flex-row">
          <div className="w-3/4 flex flex-col">
            {cartItems.map((item) => (
              <div className="rounded-xl shadow-md hover:shadow-xl transition duration-300 my-6 mr-6 p-4 h-32">
                <CartItem key={item.product.id} item={item} />
              </div>
            ))}
          </div>
          <div className="flex flex-col justify-between w-1/4 h-48 my-6 rounded-xl shadow-md p-4">
            <p className="flex flex-row justify-between w-full">
              Sub Total: <span>${cartTotal.toFixed(2)}</span>
            </p>
            <input
              type="text"
              placeholder="Enter voucher code"
              className="mt-2 px-2 py-1 border w-full"
            />
            <button className="w-full bg-black py-2 px-4 mt-4 rounded text-white">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartList;

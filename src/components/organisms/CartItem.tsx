import React from "react";
import { CartItem } from "../../types/types";
import { useCart } from "@/utils/CartContext";
import Image from "next/image";
import { FaTrashAlt } from "react-icons/fa";

interface Props {
  item: CartItem;
}

const CartItem = ({ item }: Props) => {
  const { removeFromCart, updateCartItemQuantity } = useCart();

  const handleQuantityChange = (qty: number) => {
    const quantity = Number(qty);
    if (quantity >= 1) {
      updateCartItemQuantity(item.product.id, quantity);
    }
  };

  const handleRemoveClick = () => {
    removeFromCart(item.product.id);
  };
  return (
    <div className="bg-white flex flex-row justify-start h-full">
      <div className="flex w-1/6">
        <Image
          src={item.product.image}
          alt={item.product.title}
          width={80}
          height={80}
          className="object-contain"
        />
      </div>
      <div className="flex w-2/5 flex-col justify-start mx-4">
        <div className="text-base font-medium mb-2">{item.product.title}</div>
      </div>
      <div className="flex w-1/6 flex-row justify-center">
        <div className="flex bg-gray-300 h-8 rounded-3xl">
          <button
            onClick={() => {
              handleQuantityChange(item.quantity - 1);
            }}
            disabled={item.quantity === 1}
            className="text-black px-2 py-1 rounded"
          >
            -
          </button>
          <div className="flex justify-center items-center mx-2">
            {item.quantity}
          </div>
          <button
            onClick={() => {
              handleQuantityChange(item.quantity + 1);
            }}
            className="text-black px-2 py-1 rounded"
          >
            +
          </button>
        </div>
      </div>
      <div className="flex w-1/4 flex-col justify-between">
        <div className="text-red-600 flex justify-end">${item.product.price}</div>
        <button
          onClick={handleRemoveClick}
          className="flex flex-row justify-center items-center ml-4 text-black-600 hover:text-black-800"
        >
            <span className="pr-2">Remove</span>
          <FaTrashAlt />
        </button>
      </div>
    </div>
  );
};

export default CartItem;

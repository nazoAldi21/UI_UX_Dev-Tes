import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useCart } from "@/utils/CartContext";
import { FaCartShopping } from "react-icons/fa6";

const Navbar: React.FC = () => {
  const { cartCount } = useCart();
  const router = useRouter();
  return (
    <nav className="w-full flex justify-center border border-b-neutral-500 border-opacity-50">
      <ul className="container py-6 flex flex-row justify-between items-center">
        <li>
            <Link href="/" className="font-bold text-zinc-700">STORE</Link>
        </li>
        <li>
          <Link
            className="flex flex-row cursor-pointer relative"
            href="/cart"
          >
            <span className="text-2xl"><FaCartShopping/></span>
            <span className="absolute left-4 bottom-2 text-center w-4 text-xs bg-red-500 text-white rounded-full">{cartCount}</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

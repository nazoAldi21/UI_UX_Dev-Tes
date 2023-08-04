import React from "react";
import Image from "next/image";
import { Product } from "@/types/types"; // Create this file to define the Product type.

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="p-4">
      <div className="p-4 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 bg-white">
        <Image
          src={product.image}
          alt={product.title}
          width={200}
          height={200}
          className="w-full h-48 object-contain"
        />
      </div>
      <div className="mt-4">
        <div className="text-base font-semibold mb-2 text-zinc-600 h-12 overflow-hidden">{product.title}</div>
        <div className="text-base text-zinc-800">${product.price}</div>
      </div>
    </div>
  );
};

export default ProductCard;

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { fetchProductById } from "@/utils/api";
import { Product } from "@/types/types";
import { CartItem } from "../../types/types";
import { useCart } from "@/utils/CartContext";
import { TfiShoppingCart } from "react-icons/tfi";

interface Props {
  item: CartItem;
}

const ProductDetailPage = ({ item }: Props) => {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState<Product | null>(null);
  const { addToCart, updateCartItemQuantity } = useCart();

  const handleQuantityChange = (qty: number) => {
    const quantity = Number(qty);
    if (quantity >= 1) {
      updateCartItemQuantity(item.product.id, quantity);
    }
  };

  useEffect(() => {
    async function fetchData() {
      if (!id) return;
      const data = await fetchProductById(parseInt(id as string));
      setProduct(data);
    }

    fetchData();
  }, [id]);

  const handleAddToCartClick = (product: Product) => {
    addToCart(product);
  };

  if (!product) {
    return <div className="custom-loader">Loading...</div>;
  }

  return (
    <div className="container my-16 flex flex-row mx-auto px-4 py-8 ">
      <div className="flex w-1/2 justify-center items-center ">
        <div className="flex shadow-xl p-4">
          <Image
            src={product.image}
            alt={product.title}
            width={200}
            height={300}
            className="w-full h-auto object-contain"
          />
        </div>
        {/* ... existing code ... */}
      </div>
      <div className="flex flex-col w-1/2 justify-center items-start mb-4">
        <div className="my-6">
          <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
          <p>{product.description}</p>
          <p>{product.rating.rate}</p>
        </div>
        <div className="flex flex-row justify-center items-center">
          <h3 className="mr-2">${product.price}</h3>
          <button
            onClick={() => handleAddToCartClick(product)}
            className="w-36 bg-black flex flex-row justify-between items-center hover:bg-black text-white px-4 py-2 rounded-xl"
          >
            Add to Cart
            <span className="text-lg"><TfiShoppingCart/></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;

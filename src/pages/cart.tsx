import React from "react";
import CartList from "@/components/organisms/CartList";

const CartPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <CartList />
    </div>
  );
};

export default CartPage;

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { fetchProducts } from '@/utils/api';
import { Product } from '@/types/types';
import ProductCard from '@/components/molecules/ProductCard'; // Create this file to define the Product type.

const ProductListPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchProducts();
      setProducts(data);
    }

    fetchData();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-center text-zinc-700">Product List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id}>
            <Link href={`/products/${product.id}`}>
                <ProductCard product={product} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListPage;

// utils/api.ts
import axios from 'axios';

const BASE_URL = 'https://fakestoreapi.com';

export const fetchProducts = async () => {
  const response = await axios.get(`${BASE_URL}/products`);
  return response.data;
};

export const fetchProductById = async (productId: number) => {
  const response = await axios.get(`${BASE_URL}/products/${productId}`);
  return response.data;
};

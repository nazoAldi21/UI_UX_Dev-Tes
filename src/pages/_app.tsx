// These styles apply to every route in the application
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { CartProvider } from "@/utils/CartContext";
import Navbar from "@/components/molecules/Navbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Navbar />
      <Component {...pageProps} />
    </CartProvider>
  );
}

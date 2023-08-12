import ProductListPage from "./products";
import "./src/styles/globals.css";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-zinc-100">
      <ProductListPage />
    </main>
  );
}

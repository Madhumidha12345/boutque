import { useState } from "react";
import ProductCard from "./ProductCard";
import { products } from "../lib/products";

const categories = ["All", "Dresses", "Outerwear", "Bags", "Accessories", "Tops"];

export default function FeaturedProducts() {
  const [activeCat, setActiveCat] = useState("All");

  const filtered =
    activeCat === "All"
      ? products
      : products.filter((p) => p.category === activeCat);

  return (
    <section className="py-24">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Featured Products</h2>
      </div>

      {/* CATEGORY BUTTONS */}
      <div className="flex gap-3 justify-center flex-wrap mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCat(cat)}
            className={`px-4 py-2 border rounded transition ${
              activeCat === cat ? "bg-black text-white" : ""
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* PRODUCTS GRID */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
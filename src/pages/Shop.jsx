import { useSearchParams } from "react-router-dom";
import { useState, useMemo, useEffect } from "react";
import { products, categories } from "../data/products";
import ProductCard from "../components/ProductCard";
import { SlidersHorizontal } from "lucide-react";

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const active = searchParams.get("category") || "All";
  const [sort, setSort] = useState("featured");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [active]);

  const filtered = useMemo(() => {
    let list = active === "All" ? products : products.filter((p) => p.category === active);
    if (sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
    if (sort === "name") list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    return list;
  }, [active, sort]);

  const setCategory = (cat) => {
    if (cat === "All") setSearchParams({});
    else setSearchParams({ category: cat });
  };

  return (
    <div className="container shop">
      <div className="shop-header">
        <div className="section-title" style={{ marginBottom: 0, textAlign: "left" }}>
          <p className="eyebrow">The Collection</p>
          <h2>{active === "All" ? "All Products" : active}</h2>
        </div>
        <div className="shop-controls">
          <span><SlidersHorizontal size={16} /> Sort</span>
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="featured">Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="name">Name: A–Z</option>
          </select>
        </div>
      </div>

      <div className="shop-filters">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-chip ${active === cat ? "active" : ""}`}
            onClick={() => setCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="product-grid">
        {filtered.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>

      {filtered.length === 0 && <p className="shop-empty">No pieces in this category yet.</p>}
    </div>
  );
}

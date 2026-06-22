

import { collections } from "../lib/products";

export default function Collections() {
  return (
    <section className="py-20">
      <h2 className="text-center text-3xl font-bold mb-10">
        Collections
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {collections.map((col, i) => (
          <div key={i} className="border p-6 rounded-lg">
            <img src={col.image} alt={col.title} className="w-full h-60 object-cover" />
            <h3 className="mt-4 font-semibold">{col.title}</h3>
            <p className="text-sm text-gray-500">{col.subtitle}</p>
            <p className="text-gray-600">{col.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

import { useState } from "react";
import { useCart } from "../lib/CartContext";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }: any) {
  const [open, setOpen] = useState(false);

  const [selectedSize, setSelectedSize] = useState(
    product.sizes?.[0] || ""
  );

  const [selectedColor, setSelectedColor] = useState(
    product.colors?.[0] || ""
  );

  const [quantity, setQuantity] = useState(1);

  const { addItem } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product, selectedSize, selectedColor);
    }
    setOpen(false);
  };

  const handleBuyNow = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product, selectedSize, selectedColor);
    }

    setOpen(false);
    navigate("/cart");
  };

  return (
    <>
      {/* CARD */}
      <div className="bg-white shadow rounded-xl overflow-hidden">
        <div className="w-full h-64 overflow-hidden relative group">
          <img
            src={product.image}
            className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
            alt={product.name}
          />

          <button
            onClick={() => setOpen(true)}
            className="absolute bottom-3 left-3 bg-black text-white px-3 py-1 text-sm rounded opacity-0 group-hover:opacity-100 transition"
          >
            Quick View
          </button>
        </div>

        <div className="p-4">
          <h3 className="text-sm font-medium">{product.name}</h3>
          <p className="text-gray-500 text-sm">{product.category}</p>
          <p className="mt-2 font-semibold">₹{product.price}</p>
        </div>
      </div>

      {/* QUICK VIEW MODAL */}
      {open && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid md:grid-cols-2 gap-8">
              {/* IMAGE */}
              <div>
                <div className="w-full h-[500px] bg-gray-100 rounded overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* DETAILS */}
              <div>
                <h2 className="text-3xl font-bold">
                  {product.name}
                </h2>

                <p className="text-gray-500 mt-2">
                  {product.category}
                </p>

                <p className="text-2xl font-semibold mt-4">
                  ₹{product.price}
                </p>

                {product.description && (
                  <p className="mt-4 text-gray-600">
                    {product.description}
                  </p>
                )}

                {/* COLORS */}
                {product.colors?.length > 0 && (
                  <div className="mt-6">
                    <h3 className="font-medium mb-2">
                      Color
                    </h3>

                    <div className="flex flex-wrap gap-2">
                      {product.colors.map((color: string) => (
                        <button
                          key={color}
                          onClick={() =>
                            setSelectedColor(color)
                          }
                          className={`px-4 py-2 border rounded ${
                            selectedColor === color
                              ? "bg-black text-white"
                              : ""
                          }`}
                        >
                          {color}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* SIZES */}
                {product.sizes?.length > 0 && (
                  <div className="mt-6">
                    <h3 className="font-medium mb-2">
                      Size
                    </h3>

                    <div className="flex flex-wrap gap-2">
                      {product.sizes.map((size: string) => (
                        <button
                          key={size}
                          onClick={() =>
                            setSelectedSize(size)
                          }
                          className={`px-4 py-2 border rounded ${
                            selectedSize === size
                              ? "bg-black text-white"
                              : ""
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* QUANTITY */}
                <div className="mt-6">
                  <h3 className="font-medium mb-2">
                    Quantity
                  </h3>

                  <div className="flex items-center gap-4">
                    <button
                      onClick={() =>
                        setQuantity(
                          Math.max(1, quantity - 1)
                        )
                      }
                      className="px-3 py-1 border rounded"
                    >
                      -
                    </button>

                    <span>{quantity}</span>

                    <button
                      onClick={() =>
                        setQuantity(quantity + 1)
                      }
                      className="px-3 py-1 border rounded"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* BUTTONS */}
                <div className="mt-8 flex flex-col gap-3">
                  <button
                    onClick={handleAddToCart}
                    className="w-full bg-black text-white py-3 rounded"
                  >
                    Add To Cart
                  </button>

                  <button
                    onClick={handleBuyNow}
                    className="w-full border border-black py-3 rounded"
                  >
                    Buy Now
                  </button>

                  <button
                    onClick={() => setOpen(false)}
                    className="w-full bg-gray-200 py-3 rounded"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
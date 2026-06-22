import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Check, ChevronLeft, Minus, Plus, ShoppingBag, Star, Truck, RotateCcw, ShieldCheck } from 'lucide-react';
import { products } from '../lib/products';
import { formatPrice, useCart } from '../lib/CartContext';
import ProductCard from '../components/ProductCard';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const product = products.find((p) => p.id === Number(id));

  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] ?? '');
  const [selectedColor, setSelectedColor] = useState(product?.colors[0] ?? '');
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <p className="text-ink-500 mb-4">Product not found.</p>
          <Link to="/" className="btn-outline">Return Home</Link>
        </div>
      </div>
    );
  }

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addItem(product, selectedSize, selectedColor);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleBuyNow = () => {
    addItem(product, selectedSize, selectedColor);
    navigate('/cart');
  };

  return (
    <div className="pt-28 pb-24 bg-ink-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Breadcrumb */}
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-xs font-sans tracking-[0.2em] uppercase text-ink-500 hover:text-ink-900 transition-colors mb-8"
        >
          <ChevronLeft size={14} /> Back
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Image gallery */}
          <div>
            <div className="aspect-[3/4] overflow-hidden bg-ink-100 mb-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover animate-fade-in"
              />
            </div>
            {product.gallery && (
              <div className="grid grid-cols-4 gap-3">
                {product.gallery.map((img, i) => (
                  <div key={i} className="aspect-[3/4] overflow-hidden bg-ink-100 cursor-pointer border border-transparent hover:border-gold-400 transition-colors">
                    <img src={img} alt={`${product.name} ${i + 1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Product info */}
          <div className="lg:py-4">
            <p className="text-xs font-sans font-medium tracking-[0.3em] uppercase text-gold-600 mb-2">
              {product.brand}
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-ink-950 mb-4">{product.name}</h1>

            <div className="flex items-center gap-3 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < Math.floor(product.rating) ? 'fill-gold-400 text-gold-400' : 'text-ink-200'}
                  />
                ))}
              </div>
              <span className="text-sm text-ink-500">
                {product.rating} · {product.reviews} reviews
              </span>
            </div>

            <p className="text-2xl font-sans font-medium text-ink-900 mb-6">{formatPrice(product.price)}</p>

            <p className="text-ink-600 leading-relaxed mb-8">{product.description}</p>

            {/* Color */}
            <div className="mb-6">
              <p className="text-xs font-sans tracking-[0.2em] uppercase text-ink-700 mb-3">
                Color: <span className="text-ink-500 normal-case tracking-normal ml-1">{selectedColor}</span>
              </p>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2.5 text-xs font-sans tracking-wider uppercase border transition-all ${
                      selectedColor === color
                        ? 'border-ink-950 bg-ink-950 text-ink-50'
                        : 'border-ink-200 text-ink-600 hover:border-ink-400'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Size */}
            <div className="mb-8">
              <p className="text-xs font-sans tracking-[0.2em] uppercase text-ink-700 mb-3">Size</p>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`min-w-[3rem] px-3 py-2.5 text-xs font-sans font-medium uppercase border transition-all ${
                      selectedSize === size
                        ? 'border-ink-950 bg-ink-950 text-ink-50'
                        : 'border-ink-200 text-ink-600 hover:border-ink-400'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs font-sans tracking-[0.2em] uppercase text-ink-700 mb-3">Quantity</p>
              <div className="inline-flex items-center border border-ink-200">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-ink-100 transition-colors"
                  aria-label="Decrease"
                >
                  <Minus size={14} />
                </button>
                <span className="w-12 text-center text-sm">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-ink-100 transition-colors"
                  aria-label="Increase"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <button
                onClick={handleAddToCart}
                className={`btn-outline flex-1 ${added ? 'border-gold-500 text-gold-600' : ''}`}
              >
                {added ? (
                  <>
                    <Check size={16} /> Added!
                  </>
                ) : (
                  <>
                    <ShoppingBag size={16} /> Add to Cart
                  </>
                )}
              </button>
              <button onClick={handleBuyNow} className="btn-primary flex-1">
                Buy Now
              </button>
            </div>

            {/* Trust badges */}
            <div className="border-t border-ink-200 pt-6 space-y-3">
              <div className="flex items-center gap-3 text-sm text-ink-600">
                <Truck size={18} className="text-gold-600" /> Free white-glove delivery within 3–5 business days
              </div>
              <div className="flex items-center gap-3 text-sm text-ink-600">
                <RotateCcw size={18} className="text-gold-600" /> 30-day complimentary returns
              </div>
              <div className="flex items-center gap-3 text-sm text-ink-600">
                <ShieldCheck size={18} className="text-gold-600" /> Lifetime craftsmanship guarantee
              </div>
            </div>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-24 pt-16 border-t border-ink-200">
            <div className="text-center mb-12">
              <p className="section-label mb-3">You May Also Like</p>
              <h2 className="heading-serif text-3xl md:text-4xl text-ink-950">Complete the Look</h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

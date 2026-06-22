// import { Link, useNavigate } from 'react-router-dom';
// import { Minus, Plus, Trash2, ShoppingBag, ArrowRight, Tag } from 'lucide-react';
// import { useState } from 'react';
// import { useCart, formatPrice } from '../lib/CartContext';

// export default function Cart() {
//   const { items, removeItem, updateQuantity, subtotal, totalItems } = useCart();
//   const navigate = useNavigate();
//   const [promo, setPromo] = useState('');
//   const [promoApplied, setPromoApplied] = useState(false);
//   const [promoError, setPromoError] = useState('');

//   const discount = promoApplied ? Math.round(subtotal * 0.1) : 0;
//   const shipping = subtotal > 25000 || subtotal === 0 ? 0 : 499;
//   const tax = Math.round((subtotal - discount) * 0.05);
//   const total = subtotal - discount + shipping + tax;

//   const handleApplyPromo = () => {
//     if (promo.trim().toUpperCase() === 'WELCOME10') {
//       setPromoApplied(true);
//       setPromoError('');
//     } else {
//       setPromoError('Invalid promo code');
//       setPromoApplied(false);
//     }
//   };

//   if (items.length === 0) {
//     return (
//       <div className="min-h-screen pt-32 pb-24 bg-ink-50 flex items-center justify-center">
//         <div className="text-center max-w-md mx-auto px-6">
//           <div className="w-24 h-24 mx-auto mb-6 rounded-full border border-ink-200 flex items-center justify-center">
//             <ShoppingBag size={36} className="text-ink-300" />
//           </div>
//           <h1 className="heading-serif text-4xl text-ink-950 mb-3">Your Cart is Empty</h1>
//           <p className="text-ink-500 mb-8">
//             Discover our curated collection of timeless luxury pieces and add your favorites to the cart.
//           </p>
//           <Link to="/#shop" className="btn-gold inline-flex">
//             Explore Collection <ArrowRight size={16} />
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen pt-28 pb-24 bg-ink-50">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Header */}
//         <div className="mb-10">
//           <p className="section-label mb-2">Shopping Bag</p>
//           <h1 className="heading-serif text-4xl md:text-5xl text-ink-950">
//             Your Cart <span className="text-ink-400 text-2xl">({totalItems} items)</span>
//           </h1>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
//           {/* Items list */}
//           <div className="lg:col-span-2 space-y-6">
//             {items.map((item) => (
//               <div
//                 key={`${item.product.id}-${item.selectedSize}-${item.selectedColor}`}
//                 className="flex gap-4 md:gap-6 bg-white p-4 md:p-6 animate-fade-up"
//               >
//                 {/* Image */}
//                 <Link
//                   to={`/product/${item.product.id}`}
//                   className="w-24 md:w-32 aspect-[3/4] overflow-hidden bg-ink-100 flex-shrink-0"
//                 >
//                   <img
//                     src={item.product.image}
//                     alt={item.product.name}
//                     className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
//                   />
//                 </Link>

//                 {/* Details */}
//                 <div className="flex-1 flex flex-col">
//                   <div className="flex justify-between items-start gap-2">
//                     <div>
//                       <p className="text-[10px] font-sans font-medium tracking-[0.25em] uppercase text-gold-600 mb-1">
//                         {item.product.brand}
//                       </p>
//                       <Link
//                         to={`/product/${item.product.id}`}
//                         className="font-serif text-lg md:text-xl text-ink-950 hover:text-gold-700 transition-colors"
//                       >
//                         {item.product.name}
//                       </Link>
//                     </div>
//                     <button
//                       onClick={() => removeItem(item.product.id, item.selectedSize, item.selectedColor)}
//                       className="text-ink-400 hover:text-red-600 transition-colors p-1"
//                       aria-label="Remove item"
//                     >
//                       <Trash2 size={18} />
//                     </button>
//                   </div>

//                   <div className="flex flex-wrap gap-4 mt-2 text-xs text-ink-500">
//                     <span>Color: <span className="text-ink-800">{item.selectedColor}</span></span>
//                     <span>Size: <span className="text-ink-800">{item.selectedSize}</span></span>
//                   </div>

//                   <div className="flex items-end justify-between mt-auto pt-4">
//                     {/* Quantity */}
//                     <div className="inline-flex items-center border border-ink-200">
//                       <button
//                         onClick={() =>
//                           updateQuantity(item.product.id, item.selectedSize, item.selectedColor, item.quantity - 1)
//                         }
//                         className="p-2 hover:bg-ink-100 transition-colors"
//                         aria-label="Decrease quantity"
//                       >
//                         <Minus size={14} />
//                       </button>
//                       <span className="w-10 text-center text-sm">{item.quantity}</span>
//                       <button
//                         onClick={() =>
//                           updateQuantity(item.product.id, item.selectedSize, item.selectedColor, item.quantity + 1)
//                         }
//                         className="p-2 hover:bg-ink-100 transition-colors"
//                         aria-label="Increase quantity"
//                       >
//                         <Plus size={14} />
//                       </button>
//                     </div>
//                     <p className="font-sans font-medium text-ink-900">
//                       {formatPrice(item.product.price * item.quantity)}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))}

//             <Link
//               to="/#shop"
//               className="inline-flex items-center gap-2 text-xs font-sans tracking-[0.2em] uppercase text-ink-600 hover:text-ink-950 transition-colors link-underline"
//             >
//               ← Continue Shopping
//             </Link>
//           </div>

//           {/* Order summary */}
//           <div className="lg:col-span-1">
//             <div className="bg-white p-6 md:p-8 sticky top-28">
//               <h2 className="font-serif text-2xl text-ink-950 mb-6">Order Summary</h2>

//               {/* Promo code */}
//               <div className="mb-6">
//                 <label className="text-xs font-sans tracking-[0.2em] uppercase text-ink-700 mb-2 block">
//                   Promo Code
//                 </label>
//                 <div className="flex gap-2">
//                   <div className="flex-1 relative">
//                     <Tag size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-400" />
//                     <input
//                       type="text"
//                       value={promo}
//                       onChange={(e) => setPromo(e.target.value)}
//                       placeholder="WELCOME10"
//                       className="w-full pl-9 pr-3 py-2.5 text-sm border border-ink-200 focus:outline-none focus:border-gold-400"
//                     />
//                   </div>
//                   <button
//                     onClick={handleApplyPromo}
//                     className="px-4 py-2.5 bg-ink-950 text-ink-50 text-xs font-sans tracking-wider uppercase hover:bg-gold-600 transition-colors"
//                   >
//                     Apply
//                   </button>
//                 </div>
//                 {promoError && <p className="text-xs text-red-600 mt-1">{promoError}</p>}
//                 {promoApplied && <p className="text-xs text-green-600 mt-1">10% discount applied!</p>}
//                 <p className="text-[11px] text-ink-400 mt-1">Try code: WELCOME10</p>
//               </div>

//               {/* Summary lines */}
//               <div className="space-y-3 pb-4 border-b border-ink-200">
//                 <div className="flex justify-between text-sm">
//                   <span className="text-ink-600">Subtotal</span>
//                   <span className="text-ink-900 font-medium">{formatPrice(subtotal)}</span>
//                 </div>
//                 {discount > 0 && (
//                   <div className="flex justify-between text-sm">
//                     <span className="text-green-600">Discount (10%)</span>
//                     <span className="text-green-600 font-medium">−{formatPrice(discount)}</span>
//                   </div>
//                 )}
//                 <div className="flex justify-between text-sm">
//                   <span className="text-ink-600">Shipping</span>
//                   <span className="text-ink-900 font-medium">
//                     {shipping === 0 ? 'Free' : formatPrice(shipping)}
//                   </span>
//                 </div>
//                 <div className="flex justify-between text-sm">
//                   <span className="text-ink-600">Tax (5%)</span>
//                   <span className="text-ink-900 font-medium">{formatPrice(tax)}</span>
//                 </div>
//               </div>

//               <div className="flex justify-between items-center py-4 mb-6">
//                 <span className="font-serif text-xl text-ink-950">Total</span>
//                 <span className="font-serif text-2xl text-ink-950">{formatPrice(total)}</span>
//               </div>

//               <button
//                 onClick={() => navigate('/checkout')}
//                 className="btn-primary w-full group"
//               >
//                 Proceed to Checkout
//                 <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
//               </button>

//               {subtotal < 25000 && (
//                 <p className="text-xs text-ink-500 mt-3 text-center">
//                   Add {formatPrice(25000 - subtotal)} more for free shipping
//                 </p>
//               )}

//               <div className="flex items-center justify-center gap-2 mt-6 pt-6 border-t border-ink-100">
//                 <span className="text-[10px] tracking-wider uppercase text-ink-400">Secure Checkout</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import { Link, useNavigate } from 'react-router-dom';
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight, Tag } from 'lucide-react';
import { useState } from 'react';
import { useCart, formatPrice } from '../lib/CartContext';

export default function Cart() {
  const { items, removeItem, updateQuantity, subtotal, totalItems } = useCart();
  const navigate = useNavigate();
  const [promo, setPromo] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoError, setPromoError] = useState('');

  const discount = promoApplied ? Math.round(subtotal * 0.1) : 0;
  const shipping = subtotal > 25000 || subtotal === 0 ? 0 : 499;
  const tax = Math.round((subtotal - discount) * 0.05);
  const total = subtotal - discount + shipping + tax;

  const handleApplyPromo = () => {
    if (promo.trim().toUpperCase() === 'WELCOME10') {
      setPromoApplied(true);
      setPromoError('');
    } else {
      setPromoError('Invalid promo code');
      setPromoApplied(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen pt-32 pb-24 bg-ink-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-6">
          <div className="w-24 h-24 mx-auto mb-6 rounded-full border border-ink-200 flex items-center justify-center">
            <ShoppingBag size={36} className="text-ink-300" />
          </div>
          <h1 className="heading-serif text-4xl text-ink-950 mb-3">Your Cart is Empty</h1>
          <p className="text-ink-500 mb-8">
            Discover our curated collection of timeless luxury pieces and add your favorites to the cart.
          </p>
          <Link to="/#shop" className="btn-gold inline-flex">
            Explore Collection <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-28 pb-24 bg-ink-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-10">
          <p className="section-label mb-2">Shopping Bag</p>
          <h1 className="heading-serif text-4xl md:text-5xl text-ink-950">
            Your Cart <span className="text-ink-400 text-2xl">({totalItems} items)</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Items list */}
          <div className="lg:col-span-2 space-y-6">
            {items.map((item) => (
              <div
                key={`${item.product.id}-${item.selectedSize}-${item.selectedColor}`}
                className="flex gap-4 md:gap-6 bg-white p-4 md:p-6 animate-fade-up"
              >
                {/* Image */}
                <Link
                  to={`/product/${item.product.id}`}
                  className="w-24 md:w-32 aspect-[3/4] overflow-hidden bg-ink-100 flex-shrink-0"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </Link>

                {/* Details */}
                <div className="flex-1 flex flex-col">
                  <div className="flex justify-between items-start gap-2">
                    <div>
                      <p className="text-[10px] font-sans font-medium tracking-[0.25em] uppercase text-gold-600 mb-1">
                        {item.product.brand}
                      </p>
                      <Link
                        to={`/product/${item.product.id}`}
                        className="font-serif text-lg md:text-xl text-ink-950 hover:text-gold-700 transition-colors"
                      >
                        {item.product.name}
                      </Link>
                    </div>
                    <button
                      onClick={() => removeItem(item.product.id, item.selectedSize, item.selectedColor)}
                      className="text-ink-400 hover:text-red-600 transition-colors p-1"
                      aria-label="Remove item"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>

                  <div className="flex flex-wrap gap-4 mt-2 text-xs text-ink-500">
                    <span>Color: <span className="text-ink-800">{item.selectedColor}</span></span>
                    <span>Size: <span className="text-ink-800">{item.selectedSize}</span></span>
                  </div>

                  <div className="flex items-end justify-between mt-auto pt-4">
                    {/* Quantity */}
                    <div className="inline-flex items-center border border-ink-200">
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.selectedSize, item.selectedColor, item.quantity - 1)
                        }
                        className="p-2 hover:bg-ink-100 transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="w-10 text-center text-sm">{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.selectedSize, item.selectedColor, item.quantity + 1)
                        }
                        className="p-2 hover:bg-ink-100 transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                    <p className="font-sans font-medium text-ink-900">
                      {formatPrice(item.product.price * item.quantity)}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            <Link
              to="/#shop"
              className="inline-flex items-center gap-2 text-xs font-sans tracking-[0.2em] uppercase text-ink-600 hover:text-ink-950 transition-colors link-underline"
            >
              ← Continue Shopping
            </Link>
          </div>

          {/* Order summary */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 md:p-8 sticky top-28">
              <h2 className="font-serif text-2xl text-ink-950 mb-6">Order Summary</h2>

              {/* Promo code */}
              <div className="mb-6">
                <label className="text-xs font-sans tracking-[0.2em] uppercase text-ink-700 mb-2 block">
                  Promo Code
                </label>
                <div className="flex gap-2">
                  <div className="flex-1 relative">
                    <Tag size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-400" />
                    <input
                      type="text"
                      value={promo}
                      onChange={(e) => setPromo(e.target.value)}
                      placeholder="WELCOME10"
                      className="w-full pl-9 pr-3 py-2.5 text-sm border border-ink-200 focus:outline-none focus:border-gold-400"
                    />
                  </div>
                  <button
                    onClick={handleApplyPromo}
                    className="px-4 py-2.5 bg-ink-950 text-ink-50 text-xs font-sans tracking-wider uppercase hover:bg-gold-600 transition-colors"
                  >
                    Apply
                  </button>
                </div>
                {promoError && <p className="text-xs text-red-600 mt-1">{promoError}</p>}
                {promoApplied && <p className="text-xs text-green-600 mt-1">10% discount applied!</p>}
                <p className="text-[11px] text-ink-400 mt-1">Try code: WELCOME10</p>
              </div>

              {/* Summary lines */}
              <div className="space-y-3 pb-4 border-b border-ink-200">
                <div className="flex justify-between text-sm">
                  <span className="text-ink-600">Subtotal</span>
                  <span className="text-ink-900 font-medium">{formatPrice(subtotal)}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-green-600">Discount (10%)</span>
                    <span className="text-green-600 font-medium">−{formatPrice(discount)}</span>
                  </div>
                )}
                <div className="flex justify-between text-sm">
                  <span className="text-ink-600">Shipping</span>
                  <span className="text-ink-900 font-medium">
                    {shipping === 0 ? 'Free' : formatPrice(shipping)}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-ink-600">Tax (5%)</span>
                  <span className="text-ink-900 font-medium">{formatPrice(tax)}</span>
                </div>
              </div>

              <div className="flex justify-between items-center py-4 mb-6">
                <span className="font-serif text-xl text-ink-950">Total</span>
                <span className="font-serif text-2xl text-ink-950">{formatPrice(total)}</span>
              </div>

              <button
                onClick={() => navigate('/checkout')}
                className="btn-primary w-full group"
              >
                Proceed to Checkout
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </button>

              {subtotal < 25000 && (
                <p className="text-xs text-ink-500 mt-3 text-center">
                  Add {formatPrice(25000 - subtotal)} more for free shipping
                </p>
              )}

              <div className="flex items-center justify-center gap-2 mt-6 pt-6 border-t border-ink-100">
                <span className="text-[10px] tracking-wider uppercase text-ink-400">Secure Checkout</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


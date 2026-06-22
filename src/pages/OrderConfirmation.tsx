import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { CheckCircle2, Package, Mail, ArrowRight, Truck } from 'lucide-react';
import { formatPrice } from '../lib/CartContext';
import type { CartItem, ShippingInfo } from '../lib/types';

interface OrderData {
  orderId: string;
  total: number;
  items: CartItem[];
  shipping: ShippingInfo;
}

export default function OrderConfirmation() {
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get('orderId') ?? '';
  const [order, setOrder] = useState<OrderData | null>(null);

  useEffect(() => {
    const raw = sessionStorage.getItem('lastOrder');
    if (raw) {
      try {
        setOrder(JSON.parse(raw));
      } catch {
        // ignore
      }
    }
  }, []);

  const expectedDate = new Date();
  expectedDate.setDate(expectedDate.getDate() + 5);

  return (
    <div className="min-h-screen pt-28 pb-24 bg-ink-50">
      <div className="max-w-2xl mx-auto px-6 text-center">
        {/* Success animation */}
        <div className="relative inline-flex mb-8">
          <div className="absolute inset-0 bg-gold-300 rounded-full blur-2xl opacity-40 animate-pulse-soft" />
          <div className="relative w-24 h-24 rounded-full bg-green-50 border-2 border-green-200 flex items-center justify-center animate-scale-in">
            <CheckCircle2 size={48} className="text-green-600" />
          </div>
        </div>

        <p className="section-label mb-3">Order Confirmed</p>
        <h1 className="heading-serif text-4xl md:text-5xl text-ink-950 mb-4">
          Thank You for Your Order
        </h1>
        <p className="text-ink-500 max-w-md mx-auto leading-relaxed mb-8">
          Your order has been placed successfully. We've sent a confirmation email with all the details.
        </p>

        {/* Order ID card */}
        <div className="bg-white p-6 md:p-8 mb-8 text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-xs font-sans tracking-[0.2em] uppercase text-ink-500 mb-1">Order Number</p>
              <p className="font-serif text-2xl text-ink-950">{orderId}</p>
            </div>
            <div>
              <p className="text-xs font-sans tracking-[0.2em] uppercase text-ink-500 mb-1">Estimated Delivery</p>
              <p className="font-serif text-2xl text-ink-950">
                {expectedDate.toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}
              </p>
            </div>
          </div>

          {order && (
            <>
              <div className="border-t border-ink-100 mt-6 pt-6">
                <div className="flex items-center gap-2 mb-4">
                  <Package size={16} className="text-gold-600" />
                  <p className="text-xs font-sans tracking-[0.2em] uppercase text-ink-600">Order Items</p>
                </div>
                <div className="space-y-3">
                  {order.items.map((item) => (
                    <div key={`${item.product.id}-${item.selectedSize}-${item.selectedColor}`} className="flex gap-3 items-center">
                      <div className="w-14 h-16 overflow-hidden bg-ink-100 flex-shrink-0">
                        <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-ink-900">{item.product.name}</p>
                        <p className="text-xs text-ink-500">{item.selectedColor} · {item.selectedSize} · Qty {item.quantity}</p>
                      </div>
                      <p className="text-sm font-medium text-ink-900">{formatPrice(item.product.price * item.quantity)}</p>
                    </div>
                  ))}
                </div>
              </div>

              {order.shipping.fullName && (
                <div className="border-t border-ink-100 mt-6 pt-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Truck size={16} className="text-gold-600" />
                    <p className="text-xs font-sans tracking-[0.2em] uppercase text-ink-600">Shipping To</p>
                  </div>
                  <p className="text-sm text-ink-900">{order.shipping.fullName}</p>
                  <p className="text-sm text-ink-500">{order.shipping.address}</p>
                  <p className="text-sm text-ink-500">{order.shipping.city}, {order.shipping.state} - {order.shipping.pincode}</p>
                </div>
              )}

              <div className="border-t border-ink-100 mt-6 pt-6 flex justify-between items-center">
                <span className="font-serif text-lg text-ink-950">Total Paid</span>
                <span className="font-serif text-xl text-ink-950">{formatPrice(order.total)}</span>
              </div>
            </>
          )}
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
          <Link to="/" className="btn-outline">
            Continue Shopping
          </Link>
          <a href="mailto:orders@maisonluxe.com" className="btn-gold inline-flex">
            <Mail size={16} /> Contact Support <ArrowRight size={14} />
          </a>
        </div>

        <p className="text-xs text-ink-400 max-w-md mx-auto">
          A confirmation has been sent to your email. For any queries, reference your order number {orderId}.
        </p>
      </div>
    </div>
  );
}


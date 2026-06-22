import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  CreditCard,
  Wallet,
  Banknote,
  Check,
  Lock,
  ChevronLeft,
  ShieldCheck,
} from 'lucide-react';
import { useCart, formatPrice } from '../lib/CartContext';

const steps = ['Shipping', 'Payment', 'Review'];

export default function Checkout() {
  const { items, subtotal, clearCart } = useCart();
  const navigate = useNavigate();

  const [step, setStep] = useState(0);
  const [processing, setProcessing] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [shipping, setShipping] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
  });

  const [payment, setPayment] = useState({
    method: 'card',
    cardNumber: '',
    cardName: '',
    expiry: '',
    cvv: '',
  });

  const shippingCost = subtotal > 25000 ? 0 : 499;
  const tax = Math.round(subtotal * 0.05);
  const total = subtotal + shippingCost + tax;

  if (items.length === 0) {
    return (
      <div className="min-h-screen pt-32 pb-24 flex items-center justify-center">
        <div className="text-center">
          <p className="text-ink-500 mb-4">Your cart is empty.</p>
          <button onClick={() => navigate('/#shop')} className="btn-outline">Browse Collection</button>
        </div>
      </div>
    );
  }

  const validateShipping = () => {
    const e: Record<string, string> = {};
    if (!shipping.fullName.trim()) e.fullName = 'Required';
    if (!/^\S+@\S+\.\S+$/.test(shipping.email)) e.email = 'Valid email required';
    if (!/^\d{10}$/.test(shipping.phone.replace(/\D/g, ''))) e.phone = '10-digit number required';
    if (!shipping.address.trim()) e.address = 'Required';
    if (!shipping.city.trim()) e.city = 'Required';
    if (!shipping.state.trim()) e.state = 'Required';
    if (!/^\d{6}$/.test(shipping.pincode)) e.pincode = '6-digit pincode required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const validatePayment = () => {
    if (payment.method !== 'card') return true;
    const e: Record<string, string> = {};
    if (!/^\d{16}$/.test(payment.cardNumber.replace(/\s/g, ''))) e.cardNumber = '16 digits required';
    if (!payment.cardName.trim()) e.cardName = 'Required';
    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(payment.expiry)) e.expiry = 'MM/YY format';
    if (!/^\d{3}$/.test(payment.cvv)) e.cvv = '3 digits required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleNext = () => {
    if (step === 0 && !validateShipping()) return;
    if (step === 1 && !validatePayment()) return;
    setErrors({});
    setStep((s) => Math.min(s + 1, 2));
  };

  const handlePlaceOrder = () => {
    setProcessing(true);
    setTimeout(() => {
      const orderId = 'ML' + Date.now().toString().slice(-8);
      sessionStorage.setItem('lastOrder', JSON.stringify({ orderId, total, items, shipping }));
      clearCart();
      navigate(`/order-confirmation?orderId=${orderId}`);
    }, 2200);
  };

  const formatCardNumber = (val: string) => {
    const digits = val.replace(/\D/g, '').slice(0, 16);
    return digits.replace(/(.{4})/g, '$1 ').trim();
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-3 text-sm bg-ink-50 border ${
      errors[field] ? 'border-red-400' : 'border-ink-200'
    } focus:outline-none focus:border-gold-400 transition-colors`;

  const paymentMethods = [
    { id: 'card', label: 'Credit / Debit Card', icon: CreditCard },
    { id: 'upi', label: 'UPI / Wallet', icon: Wallet },
    { id: 'cod', label: 'Cash on Delivery', icon: Banknote },
  ];

  return (
    <div className="min-h-screen pt-28 pb-24 bg-ink-50">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <button
          onClick={() => navigate('/cart')}
          className="inline-flex items-center gap-2 text-xs font-sans tracking-[0.2em] uppercase text-ink-500 hover:text-ink-900 transition-colors mb-8"
        >
          <ChevronLeft size={14} /> Back to Cart
        </button>

        <h1 className="heading-serif text-4xl md:text-5xl text-ink-950 mb-8">Checkout</h1>

        {/* Stepper */}
        <div className="flex items-center justify-center mb-12">
          {steps.map((label, i) => (
            <div key={label} className="flex items-center">
              <div className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-sans font-medium transition-all duration-300 ${
                    i < step
                      ? 'bg-gold-500 text-ink-950'
                      : i === step
                        ? 'bg-ink-950 text-ink-50'
                        : 'bg-ink-100 text-ink-400'
                  }`}
                >
                  {i < step ? <Check size={16} /> : i + 1}
                </div>
                <span
                  className={`text-[10px] font-sans tracking-[0.15em] uppercase mt-2 ${
                    i <= step ? 'text-ink-900' : 'text-ink-400'
                  }`}
                >
                  {label}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div className={`w-16 md:w-24 h-px mx-3 -mt-6 ${i < step ? 'bg-gold-500' : 'bg-ink-200'}`} />
              )}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form area */}
          <div className="lg:col-span-2">
            <div className="bg-white p-6 md:p-8">
              {/* Step 1: Shipping */}
              {step === 0 && (
                <div className="animate-fade-in">
                  <h2 className="font-serif text-2xl text-ink-950 mb-6">Shipping Details</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <label className="text-xs font-sans tracking-[0.15em] uppercase text-ink-600 mb-2 block">Full Name</label>
                      <input
                        value={shipping.fullName}
                        onChange={(e) => setShipping({ ...shipping, fullName: e.target.value })}
                        className={inputClass('fullName')}
                        placeholder="Aarav Sharma"
                      />
                      {errors.fullName && <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>}
                    </div>
                    <div>
                      <label className="text-xs font-sans tracking-[0.15em] uppercase text-ink-600 mb-2 block">Email</label>
                      <input
                        value={shipping.email}
                        onChange={(e) => setShipping({ ...shipping, email: e.target.value })}
                        className={inputClass('email')}
                        placeholder="you@email.com"
                      />
                      {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                    </div>
                    <div>
                      <label className="text-xs font-sans tracking-[0.15em] uppercase text-ink-600 mb-2 block">Phone</label>
                      <input
                        value={shipping.phone}
                        onChange={(e) => setShipping({ ...shipping, phone: e.target.value })}
                        className={inputClass('phone')}
                        placeholder="9876543210"
                      />
                      {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                    </div>
                    <div className="md:col-span-2">
                      <label className="text-xs font-sans tracking-[0.15em] uppercase text-ink-600 mb-2 block">Address</label>
                      <input
                        value={shipping.address}
                        onChange={(e) => setShipping({ ...shipping, address: e.target.value })}
                        className={inputClass('address')}
                        placeholder="Flat / House No, Street, Area"
                      />
                      {errors.address && <p className="text-xs text-red-500 mt-1">{errors.address}</p>}
                    </div>
                    <div>
                      <label className="text-xs font-sans tracking-[0.15em] uppercase text-ink-600 mb-2 block">City</label>
                      <input
                        value={shipping.city}
                        onChange={(e) => setShipping({ ...shipping, city: e.target.value })}
                        className={inputClass('city')}
                        placeholder="Mumbai"
                      />
                      {errors.city && <p className="text-xs text-red-500 mt-1">{errors.city}</p>}
                    </div>
                    <div>
                      <label className="text-xs font-sans tracking-[0.15em] uppercase text-ink-600 mb-2 block">State</label>
                      <input
                        value={shipping.state}
                        onChange={(e) => setShipping({ ...shipping, state: e.target.value })}
                        className={inputClass('state')}
                        placeholder="Maharashtra"
                      />
                      {errors.state && <p className="text-xs text-red-500 mt-1">{errors.state}</p>}
                    </div>
                    <div>
                      <label className="text-xs font-sans tracking-[0.15em] uppercase text-ink-600 mb-2 block">Pincode</label>
                      <input
                        value={shipping.pincode}
                        onChange={(e) => setShipping({ ...shipping, pincode: e.target.value })}
                        className={inputClass('pincode')}
                        placeholder="400001"
                      />
                      {errors.pincode && <p className="text-xs text-red-500 mt-1">{errors.pincode}</p>}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Payment */}
              {step === 1 && (
                <div className="animate-fade-in">
                  <h2 className="font-serif text-2xl text-ink-950 mb-6">Payment Method</h2>
                  <div className="space-y-3 mb-6">
                    {paymentMethods.map((m) => {
                      const Icon = m.icon;
                      return (
                        <button
                          key={m.id}
                          onClick={() => setPayment({ ...payment, method: m.id })}
                          className={`w-full flex items-center gap-4 p-4 border transition-all ${
                            payment.method === m.id
                              ? 'border-ink-950 bg-ink-50'
                              : 'border-ink-200 hover:border-ink-400'
                          }`}
                        >
                          <Icon size={20} className={payment.method === m.id ? 'text-gold-600' : 'text-ink-400'} />
                          <span className="text-sm font-sans text-ink-900 flex-1 text-left">{m.label}</span>
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                            payment.method === m.id ? 'border-gold-500' : 'border-ink-300'
                          }`}>
                            {payment.method === m.id && <div className="w-2.5 h-2.5 rounded-full bg-gold-500" />}
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {/* Card form */}
                  {payment.method === 'card' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-in">
                      <div className="md:col-span-2">
                        <label className="text-xs font-sans tracking-[0.15em] uppercase text-ink-600 mb-2 block">Card Number</label>
                        <div className="relative">
                          <input
                            value={payment.cardNumber}
                            onChange={(e) => setPayment({ ...payment, cardNumber: formatCardNumber(e.target.value) })}
                            className={inputClass('cardNumber')}
                            placeholder="0000 0000 0000 0000"
                          />
                          <CreditCard size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-400" />
                        </div>
                        {errors.cardNumber && <p className="text-xs text-red-500 mt-1">{errors.cardNumber}</p>}
                      </div>
                      <div className="md:col-span-2">
                        <label className="text-xs font-sans tracking-[0.15em] uppercase text-ink-600 mb-2 block">Name on Card</label>
                        <input
                          value={payment.cardName}
                          onChange={(e) => setPayment({ ...payment, cardName: e.target.value })}
                          className={inputClass('cardName')}
                          placeholder="AARAV SHARMA"
                        />
                        {errors.cardName && <p className="text-xs text-red-500 mt-1">{errors.cardName}</p>}
                      </div>
                      <div>
                        <label className="text-xs font-sans tracking-[0.15em] uppercase text-ink-600 mb-2 block">Expiry</label>
                        <input
                          value={payment.expiry}
                          onChange={(e) => setPayment({ ...payment, expiry: e.target.value })}
                          className={inputClass('expiry')}
                          placeholder="MM/YY"
                          maxLength={5}
                        />
                        {errors.expiry && <p className="text-xs text-red-500 mt-1">{errors.expiry}</p>}
                      </div>
                      <div>
                        <label className="text-xs font-sans tracking-[0.15em] uppercase text-ink-600 mb-2 block">CVV</label>
                        <input
                          type="password"
                          value={payment.cvv}
                          onChange={(e) => setPayment({ ...payment, cvv: e.target.value.replace(/\D/g, '').slice(0, 3) })}
                          className={inputClass('cvv')}
                          placeholder="•••"
                          maxLength={3}
                        />
                        {errors.cvv && <p className="text-xs text-red-500 mt-1">{errors.cvv}</p>}
                      </div>
                    </div>
                  )}
                  {payment.method === 'upi' && (
                    <div className="bg-ink-50 p-6 text-center animate-fade-in">
                      <Wallet size={32} className="mx-auto text-gold-600 mb-3" />
                      <p className="text-sm text-ink-600">
                        You will be redirected to your UPI app to complete the payment securely.
                      </p>
                    </div>
                  )}
                  {payment.method === 'cod' && (
                    <div className="bg-ink-50 p-6 text-center animate-fade-in">
                      <Banknote size={32} className="mx-auto text-gold-600 mb-3" />
                      <p className="text-sm text-ink-600">
                        Pay in cash at the time of delivery. A ₹99 handling fee applies for COD orders.
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Step 3: Review */}
              {step === 2 && (
                <div className="animate-fade-in">
                  <h2 className="font-serif text-2xl text-ink-950 mb-6">Review Your Order</h2>

                  {/* Shipping summary */}
                  <div className="mb-6 p-4 border border-ink-200">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="text-xs font-sans tracking-[0.2em] uppercase text-ink-600">Shipping To</h3>
                      <button onClick={() => setStep(0)} className="text-xs text-gold-600 hover:underline">Edit</button>
                    </div>
                    <p className="text-sm text-ink-900">{shipping.fullName}</p>
                    <p className="text-sm text-ink-500">{shipping.address}</p>
                    <p className="text-sm text-ink-500">{shipping.city}, {shipping.state} - {shipping.pincode}</p>
                    <p className="text-sm text-ink-500">{shipping.phone} · {shipping.email}</p>
                  </div>

                  {/* Payment summary */}
                  <div className="mb-6 p-4 border border-ink-200">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="text-xs font-sans tracking-[0.2em] uppercase text-ink-600">Payment</h3>
                      <button onClick={() => setStep(1)} className="text-xs text-gold-600 hover:underline">Edit</button>
                    </div>
                    <p className="text-sm text-ink-900">
                      {paymentMethods.find((m) => m.id === payment.method)?.label}
                    </p>
                    {payment.method === 'card' && (
                      <p className="text-sm text-ink-500">**** **** **** {payment.cardNumber.replace(/\s/g, '').slice(-4)}</p>
                    )}
                  </div>

                  {/* Items */}
                  <div className="space-y-4">
                    {items.map((item) => (
                      <div key={`${item.product.id}-${item.selectedSize}-${item.selectedColor}`} className="flex gap-4 items-center">
                        <div className="w-16 h-20 overflow-hidden bg-ink-100 flex-shrink-0">
                          <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1">
                          <p className="font-serif text-ink-900">{item.product.name}</p>
                          <p className="text-xs text-ink-500">{item.selectedColor} · {item.selectedSize} · Qty {item.quantity}</p>
                        </div>
                        <p className="text-sm font-medium text-ink-900">{formatPrice(item.product.price * item.quantity)}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Navigation buttons */}
              <div className="flex justify-between mt-8 pt-6 border-t border-ink-100">
                {step > 0 ? (
                  <button
                    onClick={() => setStep((s) => Math.max(0, s - 1))}
                    className="text-xs font-sans tracking-[0.2em] uppercase text-ink-600 hover:text-ink-950 transition-colors"
                  >
                    ← Back
                  </button>
                ) : (
                  <span />
                )}
                {step < 2 ? (
                  <button onClick={handleNext} className="btn-primary">
                    Continue
                  </button>
                ) : (
                  <button
                    onClick={handlePlaceOrder}
                    disabled={processing}
                    className="btn-gold"
                  >
                    {processing ? (
                      <>
                        <span className="w-4 h-4 border-2 border-ink-950 border-t-transparent rounded-full animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <Lock size={16} /> Place Order · {formatPrice(total)}
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Summary sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 sticky top-28">
              <h3 className="font-serif text-xl text-ink-950 mb-4">Summary</h3>
              <div className="space-y-3 mb-4 pb-4 border-b border-ink-200">
                <div className="flex justify-between text-sm">
                  <span className="text-ink-600">Subtotal ({items.length} items)</span>
                  <span className="text-ink-900">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-ink-600">Shipping</span>
                  <span className="text-ink-900">{shippingCost === 0 ? 'Free' : formatPrice(shippingCost)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-ink-600">Tax (5%)</span>
                  <span className="text-ink-900">{formatPrice(tax)}</span>
                </div>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="font-serif text-lg text-ink-950">Total</span>
                <span className="font-serif text-xl text-ink-950">{formatPrice(total)}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-ink-400">
                <ShieldCheck size={14} className="text-gold-600" />
                256-bit SSL encrypted
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

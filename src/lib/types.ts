export interface Product {
  id: number;
  name: string;
  brand: string;
  description: string;
  price: number;
  category: string;
  image: string;
  gallery?: string[];
  rating: number;
  reviews: number;
  colors: string[];
  sizes: string[];
  badge?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize: string;
  selectedColor: string;
}

export interface ShippingInfo {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
}

export interface PaymentInfo {
  method: string;
  cardNumber: string;
  cardName: string;
  expiry: string;
  cvv: string;
}

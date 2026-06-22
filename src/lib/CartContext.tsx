import { createContext, useContext, useEffect, useReducer, type ReactNode } from 'react';
import type { CartItem, Product } from './types';

interface CartState {
  items: CartItem[];
}

type CartAction =
  | { type: 'ADD'; product: Product; size: string; color: string }
  | { type: 'REMOVE'; id: number; size: string; color: string }
  | { type: 'UPDATE_QTY'; id: number; size: string; color: string; quantity: number }
  | { type: 'CLEAR' }
  | { type: 'INIT'; items: CartItem[] };

const STORAGE_KEY = 'maison_luxe_cart';

function reducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'INIT':
      return { items: action.items };
    case 'ADD': {
      const existing = state.items.find(
        (i) =>
          i.product.id === action.product.id &&
          i.selectedSize === action.size &&
          i.selectedColor === action.color,
      );
      if (existing) {
        return {
          items: state.items.map((i) =>
            i === existing ? { ...i, quantity: i.quantity + 1 } : i,
          ),
        };
      }
      return {
        items: [
          ...state.items,
          { product: action.product, quantity: 1, selectedSize: action.size, selectedColor: action.color },
        ],
      };
    }
    case 'REMOVE':
      return {
        items: state.items.filter(
          (i) => !(i.product.id === action.id && i.selectedSize === action.size && i.selectedColor === action.color),
        ),
      };
    case 'UPDATE_QTY':
      return {
        items: state.items
          .map((i) =>
            i.product.id === action.id && i.selectedSize === action.size && i.selectedColor === action.color
              ? { ...i, quantity: action.quantity }
              : i,
          )
          .filter((i) => i.quantity > 0),
      };
    case 'CLEAR':
      return { items: [] };
    default:
      return state;
  }
}

interface CartContextValue extends CartState {
  addItem: (product: Product, size: string, color: string) => void;
  removeItem: (id: number, size: string, color: string) => void;
  updateQuantity: (id: number, size: string, color: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, { items: [] });

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) dispatch({ type: 'INIT', items: JSON.parse(saved) });
    } catch {
      // ignore parse errors
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items));
  }, [state.items]);

  const totalItems = state.items.reduce((sum, i) => sum + i.quantity, 0);
  const subtotal = state.items.reduce((sum, i) => sum + i.product.price * i.quantity, 0);

  const value: CartContextValue = {
    ...state,
    addItem: (product, size, color) => dispatch({ type: 'ADD', product, size, color }),
    removeItem: (id, size, color) => dispatch({ type: 'REMOVE', id, size, color }),
    updateQuantity: (id, size, color, quantity) =>
      dispatch({ type: 'UPDATE_QTY', id, size, color, quantity }),
    clearCart: () => dispatch({ type: 'CLEAR' }),
    totalItems,
    subtotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}

export function formatPrice(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
}

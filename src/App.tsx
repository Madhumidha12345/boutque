import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./lib/CartContext";

import ScrollToTop from "./components/ScrollToTop";

import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/Shop";
import Collections from "./pages/Shop";
import About from "./pages/Shop";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderConfirmation from "./pages/OrderConfirmation";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <CartProvider>
        <div className="min-h-screen flex flex-col bg-ink-50">

          <Navbar />

          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/collections" element={<Shop />} />
              <Route path="/about" element={<Shop />} />
              <Route path="/product/:id" element={<Shop />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/order-confirmation" element={<OrderConfirmation />} />
            </Routes>
          </main>

          <Footer />

        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
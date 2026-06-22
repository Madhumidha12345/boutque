// import { useEffect, useState } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { ShoppingBag, Menu, X, Search } from 'lucide-react';
// import { useCart } from '../lib/CartContext';

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const { totalItems } = useCart();
//   const location = useLocation();
//   const navigate = useNavigate();

// const goToSection = (sectionId: string) => {
//   if (location.pathname !== "/") {
//     navigate("/");

//     setTimeout(() => {
//       const element = document.getElementById(sectionId);
//       if (element) {
//         element.scrollIntoView({
//           behavior: "smooth",
//           block: "start",
//         });
//       }
//     }, 300);
//   } else {
//     const element = document.getElementById(sectionId);

//     if (element) {
//       element.scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//       });
//     }
//   }
// };
//   const isHome = location.pathname === '/';

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 40);
//     window.addEventListener('scroll', onScroll);
//     return () => window.removeEventListener('scroll', onScroll);
//   }, []);

//   useEffect(() => {
//     setMenuOpen(false);
//   }, [location.pathname]);


//     const links = [
//   { label: "Home", action: () => navigate("/") },
//   { label: "Shop", action: () => goToSection("shop") },
//   { label: "Collections", action: () => goToSection("collections") },
//   { label: "About", action: () => goToSection("about") },
// ];
//   const solid = scrolled || !isHome;

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
//         solid
//           ? 'bg-ink-50/95 backdrop-blur-md shadow-sm py-4'
//           : 'bg-transparent py-6'
//       }`}
//     >
//       <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
//         {/* Mobile menu button */}
//         <button
//           className={`lg:hidden ${solid ? 'text-ink-950' : 'text-ink-50'}`}
//           onClick={() => setMenuOpen(!menuOpen)}
//           aria-label="Menu"
//         >
//           {menuOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>

//         {/* Logo */}
//         <Link
//           to="/"
//           className={`font-serif text-2xl tracking-[0.15em] font-light ${
//             solid ? 'text-ink-950' : 'text-ink-50 text-shadow-lux'
//           }`}
//         >
//           MAISON&nbsp;LUXE
//         </Link>

//         {/* Desktop nav */}
//         <div className="hidden lg:flex items-center gap-10">
//           {links.map((link) => (
//             <Link
//               key={link.label}
//               to={link.to}
//               className={`text-xs font-sans font-medium tracking-[0.25em] uppercase link-underline ${
//                 solid ? 'text-ink-700 hover:text-ink-950' : 'text-ink-100 hover:text-white text-shadow-lux'
//               }`}
//             >
//               {link.label}
//             </Link>
//           ))}
//         </div>

//         {/* Right icons */}
//         <div className="flex items-center gap-5">
//           <button
//             className={`transition-colors ${solid ? 'text-ink-700 hover:text-ink-950' : 'text-ink-100 hover:text-white'}`}
//             aria-label="Search"
//           >
//             <Search size={20} />
//           </button>
//           <Link
//             to="/cart"
//             className={`relative transition-colors ${solid ? 'text-ink-700 hover:text-ink-950' : 'text-ink-100 hover:text-white'}`}
//             aria-label="Cart"
//           >
//             <ShoppingBag size={20} />
//             {totalItems > 0 && (
//               <span className="absolute -top-2 -right-2 bg-gold-500 text-ink-950 text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center animate-scale-in">
//                 {totalItems}
//               </span>
//             )}
//           </Link>
//         </div>
//       </nav>

//       {/* Mobile drawer */}
//       {menuOpen && (
//         <div className="lg:hidden absolute top-full left-0 right-0 bg-ink-50 shadow-lg animate-fade-down">
//           <div className="flex flex-col py-4">
//             {links.map((link) => (
//               <Link
//                 key={link.label}
//                 to={link.to}
//                 className="px-8 py-3 text-sm font-sans font-medium tracking-[0.25em] uppercase text-ink-800 hover:bg-ink-100"
//               >
//                 {link.label}
//               </Link>
//             ))}
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }


import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ShoppingBag, Menu, X, Search } from "lucide-react";
import { useCart } from "../lib/CartContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const { totalItems } = useCart();
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === "/";

  const goToSection = (sectionId: string) => {
    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        const element = document.getElementById(sectionId);

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 300);
    } else {
      const element = document.getElementById(sectionId);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const links = [
    { label: "Home", action: () => navigate("/") },
    { label: "Shop", action: () => goToSection("shop") },
    { label: "Collections", action: () => goToSection("collections") },
    { label: "About", action: () => goToSection("about") },
  ];

  const solid = scrolled || !isHome;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        solid
          ? "bg-ink-50/95 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Mobile Menu Button */}
        <button
          className={`lg:hidden ${
            solid ? "text-ink-950" : "text-ink-50"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Logo */}
        <Link
          to="/"
          className={`font-serif text-2xl tracking-[0.15em] font-light ${
            solid
              ? "text-ink-950"
              : "text-ink-50 text-shadow-lux"
          }`}
        >
          MAISON&nbsp;LUXE
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-10">
          {links.map((link) => (
            <button
              key={link.label}
              onClick={link.action}
              className={`text-xs font-sans font-medium tracking-[0.25em] uppercase link-underline ${
                solid
                  ? "text-ink-700 hover:text-ink-950"
                  : "text-ink-100 hover:text-white text-shadow-lux"
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-5">
          <button
            className={`transition-colors ${
              solid
                ? "text-ink-700 hover:text-ink-950"
                : "text-ink-100 hover:text-white"
            }`}
            aria-label="Search"
          >
            <Search size={20} />
          </button>

          <Link
            to="/cart"
            className={`relative transition-colors ${
              solid
                ? "text-ink-700 hover:text-ink-950"
                : "text-ink-100 hover:text-white"
            }`}
            aria-label="Cart"
          >
            <ShoppingBag size={20} />

            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-gold-500 text-ink-950 text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center animate-scale-in">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-ink-50 shadow-lg animate-fade-down">
          <div className="flex flex-col py-4">
            {links.map((link) => (
              <button
                key={link.label}
                onClick={link.action}
                className="px-8 py-3 text-left text-sm font-sans font-medium tracking-[0.25em] uppercase text-ink-800 hover:bg-ink-100"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="about" className="bg-ink-950 text-ink-200 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-ink-800">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-serif text-2xl tracking-[0.15em] text-ink-50 mb-4">MAISON LUXE</h3>
            {/* <p className="text-sm text-white-400 leading-relaxed"> */}
              <p className="text-white hover:text-gold-300 transition-colors">
              A curated atelier of timeless luxury, crafting elegance since 1987. Every piece tells a story of heritage, artistry, and uncompromising quality.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs font-sans font-medium tracking-[0.3em] uppercase text-gold-400 mb-5">Shop</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/#shop" className="text-white-300 hover:text-gold-300 transition-colors">New Arrivals</Link></li>
              <li><Link to="/#shop" className="text-ink-300 hover:text-gold-300 transition-colors">Dresses</Link></li>
              <li><Link to="/#shop" className="text-ink-300 hover:text-gold-300 transition-colors">Outerwear</Link></li>
              <li><Link to="/#shop" className="text-ink-300 hover:text-gold-300 transition-colors">Accessories</Link></li>
            </ul>
          </div>

          {/* Maison */}
          <div>
            <h4 className="text-xs font-sans font-medium tracking-[0.3em] uppercase text-gold-400 mb-5">Maison</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#about" className="text-ink-300 hover:text-gold-300 transition-colors">Our Story</a></li>
              <li><a href="#about" className="text-ink-300 hover:text-gold-300 transition-colors">Craftsmanship</a></li>
              <li><a href="#about" className="text-ink-300 hover:text-gold-300 transition-colors">Sustainability</a></li>
              <li><a href="#about" className="text-ink-300 hover:text-gold-300 transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xs font-sans font-medium tracking-[0.3em] uppercase text-gold-400 mb-5">Newsletter</h4>
            <p className="text-sm text-ink-400 mb-4">Join our private list for early access to collections.</p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 bg-transparent border-b border-ink-700 text-ink-100 text-sm py-2 focus:outline-none focus:border-gold-400 placeholder-ink-500"
              />
              <button className="text-gold-400 hover:text-gold-300 ml-2" aria-label="Subscribe">
                <Mail size={18} />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 gap-4">
          {/* <p className="text-xs text-ink-500 tracking-wider"> */}
          <p className="text-white hover:text-gold-300 transition-colors">
            © 2026 Maison Luxe. All rights reserved.
          </p>
          <div className="flex gap-5">
            <a href="#" className="text-ink-400 hover:text-red-300 transition-colors" aria-label="Instagram"><FaInstagram size={18} /></a>
            <a href="#" className="text-ink-400 hover:text-blue-300 transition-colors" aria-label="Facebook"><FaFacebook size={18} /></a>
            <a href="#" className="text-ink-400 hover:text-purple-300 transition-colors" aria-label="Twitter"><FaTwitter size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}


// import { Link } from "react-router-dom";
// import { Mail } from "lucide-react";
// import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

// export default function Footer() {
//   return (
//     <footer id="about" className="bg-ink-950 text-ink-200 pt-20 pb-8">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-ink-800">
          
//           {/* Brand */}
//           <div className="md:col-span-1">
//             <h3 className="font-serif text-2xl tracking-[0.15em] text-ink-50 mb-4">
//               MAISON LUXE
//             </h3>
//             <p className="text-sm text-ink-400 leading-relaxed">
//               A curated atelier of timeless luxury, crafting elegance since 1987.
//               Every piece tells a story of heritage, artistry, and uncompromising quality.
//             </p>
//           </div>

//           {/* Shop */}
//           <div>
//             <h4 className="text-xs font-sans font-medium tracking-[0.3em] uppercase text-gold-400 mb-5">
//               Shop
//             </h4>
//             <ul className="space-y-3 text-sm">
//               <li><Link to="/#shop">New Arrivals</Link></li>
//               <li><Link to="/#shop">Dresses</Link></li>
//               <li><Link to="/#shop">Outerwear</Link></li>
//               <li><Link to="/#shop">Accessories</Link></li>
//             </ul>
//           </div>

//           {/* Maison */}
//           <div>
//             <h4 className="text-xs font-sans font-medium tracking-[0.3em] uppercase text-gold-400 mb-5">
//               Maison
//             </h4>
//             <ul className="space-y-3 text-sm">
//               <li><a href="#about">Our Story</a></li>
//               <li><a href="#about">Craftsmanship</a></li>
//               <li><a href="#about">Sustainability</a></li>
//               <li><a href="#about">Careers</a></li>
//             </ul>
//           </div>

//           {/* Newsletter */}
//           <div>
//             <h4 className="text-xs font-sans font-medium tracking-[0.3em] uppercase text-gold-400 mb-5">
//               Newsletter
//             </h4>

//             <p className="text-sm text-ink-400 mb-4">
//               Join our private list for early access to collections.
//             </p>

//             <form
//               className="flex"
//               onSubmit={(e) => e.preventDefault()}
//             >
//               <input
//                 type="email"
//                 placeholder="Email address"
//                 className="flex-1 bg-transparent border-b border-ink-700 text-ink-100 text-sm py-2 focus:outline-none focus:border-gold-400 placeholder-ink-500"
//               />

//               <button
//                 className="text-gold-400 hover:text-gold-300 ml-2"
//                 aria-label="Subscribe"
//               >
//                 <Mail size={18} />
//               </button>
//             </form>
//           </div>
//         </div>

//         {/* Bottom bar */}
//         <div className="flex flex-col md:flex-row justify-between items-center pt-8 gap-4">
//           <p className="text-xs text-ink-500 tracking-wider">
//             © 2026 Maison Luxe. All rights reserved.
//           </p>

//           <div className="flex gap-5">
//             <a href="#" aria-label="Instagram">
//               <FaInstagram size={18} />
//             </a>

//             <a href="#" aria-label="Facebook">
//               <FaFacebook size={18} />
//             </a>

//             <a href="#" aria-label="Twitter">
//               <FaTwitter size={18} />
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }
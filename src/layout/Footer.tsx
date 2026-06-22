
// // import { Link } from "react-router-dom";
// // import { Mail } from "lucide-react";
// // import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

// // export default function Footer() {
// //   return (
// //     <footer id="about" className="bg-ink-950 text-ink-200 pt-20 pb-8">
// //       <div className="max-w-7xl mx-auto px-6">

// //         {/* Top Grid */}
// //         <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-ink-800">

// //           {/* Brand */}
// //           <div>
// //             <h3 className="font-serif text-3xl tracking-[0.15em] text-ink-50 mb-4">
// //               MAISON LUXE
// //             </h3>

// //             <p className="text-gold-300 text-base leading-relaxed">
// //               A curated atelier of timeless luxury, crafting elegance since 1987.
// //               Every piece tells a story of heritage, artistry, and uncompromising quality.
// //             </p>
// //           </div>

// //           {/* Shop */}
// //           <div>
// //             <h4 className="text-sm font-medium tracking-[0.3em] uppercase text-white mb-5">
// //               Shop
// //             </h4>

// //             <ul className="space-y-3 text-base">
// //               <li><Link to="/#shop" className="text-gold-300 hover:text-white transition-colors">New Arrivals</Link></li>
// //               <li><Link to="/#shop" className="text-gold-300 hover:text-white transition-colors">Dresses</Link></li>
// //               <li><Link to="/#shop" className="text-gold-300 hover:text-white transition-colors">Outerwear</Link></li>
// //               <li><Link to="/#shop" className="text-gold-300 hover:text-white transition-colors">Accessories</Link></li>
// //             </ul>
// //           </div>

// //           {/* Maison */}
// //           <div>
// //             <h4 className="text-sm font-medium tracking-[0.3em] uppercase text-white mb-5">
// //               Maison
// //             </h4>

// //             <ul className="space-y-3 text-base">
// //               <li><a href="#about" className="text-gold-300 hover:text-white transition-colors">Our Story</a></li>
// //               <li><a href="#about" className="text-gold-300 hover:text-white transition-colors">Craftsmanship</a></li>
// //               <li><a href="#about" className="text-gold-300 hover:text-white transition-colors">Sustainability</a></li>
// //               <li><a href="#about" className="text-gold-300 hover:text-white transition-colors">Careers</a></li>
// //             </ul>
// //           </div>

// //           {/* Newsletter */}
// //           <div>
// //             <h4 className="text-sm font-medium tracking-[0.3em] uppercase text-white mb-5">
// //               Newsletter
// //             </h4>

// //             <p className="text-gold-300 text-base mb-4">
// //               Join our private list for early access to collections.
// //             </p>

// //             <form className="flex" onSubmit={(e) => e.preventDefault()}>
// //               <input
// //                 type="email"
// //                 placeholder="Email address"
// //                 className="flex-1 bg-transparent border-b border-gold-400 text-white text-base py-2 focus:outline-none placeholder:text-gold-200"
// //               />

// //               <button className="text-gold-400 hover:text-white ml-2 transition-colors">
// //                 <Mail size={20} />
// //               </button>
// //             </form>
// //           </div>
// //         </div>

// //         {/* Bottom Bar */}
// //         <div className="flex flex-col md:flex-row justify-between items-center pt-8 gap-4">

// //           <p className="text-gold-300 text-base">
// //             © 2026 Maison Luxe. All rights reserved.
// //           </p>

// //           <div className="flex gap-5 md:ml-auto">

// //             <a href="#" className="text-pink-500 hover:text-pink-400 hover:scale-110 transition-all duration-300">
// //               <FaInstagram size={20} />
// //             </a>

// //             <a href="#" className="text-blue-600 hover:text-blue-500 hover:scale-110 transition-all duration-300">
// //               <FaFacebook size={20} />
// //             </a>

// //             <a href="#" className="text-sky-500 hover:text-sky-400 hover:scale-110 transition-all duration-300">
// //               <FaTwitter size={20} />
// //             </a>

// //           </div>

// //         </div>

// //       </div>
// //     </footer>
// //   );
// // }

// import { Link } from "react-router-dom";
// import { Mail } from "lucide-react";
// import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

// export default function Footer() {
//   return (
//     <footer id="about" className="bg-ink-950 text-ink-200 pt-20 pb-8">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* Top Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-ink-800">

//           {/* Brand */}
//           <div>
//             <h3 className="font-serif text-3xl tracking-[0.15em] text-ink-50 mb-4">
//               MAISON LUXE
//             </h3>

//             <p className="text-gray-400 text-base leading-relaxed">
//               A curated atelier of timeless luxury, crafting elegance since 1987.
//               Every piece tells a story of heritage, artistry, and uncompromising quality.
//             </p>
//           </div>

//           {/* Shop */}
//           <div>
//             <h4 className="text-sm font-medium tracking-[0.3em] uppercase text-white mb-5">
//               Shop
//             </h4>

//             <ul className="space-y-3 text-base">
//               <li>
//                 <Link to="/#shop" className="text-gray-400 hover:text-white transition-colors duration-300">
//                   New Arrivals
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/#shop" className="text-gray-400 hover:text-white transition-colors duration-300">
//                   Dresses
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/#shop" className="text-gray-400 hover:text-white transition-colors duration-300">
//                   Outerwear
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/#shop" className="text-gray-400 hover:text-white transition-colors duration-300">
//                   Accessories
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Maison */}
//           <div>
//             <h4 className="text-sm font-medium tracking-[0.3em] uppercase text-white mb-5">
//               Maison
//             </h4>

//             <ul className="space-y-3 text-base">
//               <li>
//                 <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300">
//                   Our Story
//                 </a>
//               </li>
//               <li>
//                 <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300">
//                   Craftsmanship
//                 </a>
//               </li>
//               <li>
//                 <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300">
//                   Sustainability
//                 </a>
//               </li>
//               <li>
//                 <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300">
//                   Careers
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Newsletter */}
//           <div>
//             <h4 className="text-sm font-medium tracking-[0.3em] uppercase text-white mb-5">
//               Newsletter
//             </h4>

//             <p className="text-gray-400 text-base mb-4">
//               Join our private list for early access to collections.
//             </p>

//             <form className="flex" onSubmit={(e) => e.preventDefault()}>
//               <input
//                 type="email"
//                 placeholder="Email address"
//                 className="flex-1 bg-transparent border-b border-gray-600 text-white text-base py-2 focus:outline-none placeholder:text-gray-500"
//               />

//               <button className="text-gray-400 hover:text-white ml-2 transition-colors duration-300">
//                 <Mail size={20} />
//               </button>
//             </form>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="flex flex-col md:flex-row justify-between items-center pt-8 gap-4">

//           <p className="text-gray-400 text-base">
//             © 2026 Maison Luxe. All rights reserved.
//           </p>

//           {/* Social Icons */}
//           <div className="flex gap-5 md:ml-auto">

//             {/* Instagram */}
//             <a
//               href="#"
//               className="text-pink-500 hover:text-pink-400 hover:scale-110 transition-transform duration-300"
//             >
//               <FaInstagram size={20} />
//             </a>

//             {/* Facebook */}
//             <a
//               href="#"
//               className="text-blue-600 hover:text-blue-500 hover:scale-110 transition-transform duration-300"
//             >
//               <FaFacebook size={20} />
//             </a>

//             {/* Twitter */}
//             <a
//               href="#"
//               className="text-sky-500 hover:text-sky-400 hover:scale-110 transition-transform duration-300"
//             >
//               <FaTwitter size={20} />
//             </a>

//           </div>

//         </div>

//       </div>
//     </footer>
//   );
// }


import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="about" className="bg-ink-950 text-ink-200 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-ink-800">

          {/* Brand */}
          <div>
            <h3 className="font-serif text-3xl tracking-[0.15em] text-gold-400 mb-4">
              MAISON LUXE
            </h3>

            <p className="text-white text-base leading-relaxed">
              A curated atelier of timeless luxury, crafting elegance since 1987.
              Every piece tells a story of heritage, artistry, and uncompromising quality.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-sm font-medium tracking-[0.3em] uppercase text-gold-400 mb-5">
              Shop
            </h4>

            <ul className="space-y-3 text-base">
              <li>
                <Link to="/#shop" className="text-gray-300 hover:text-white transition-colors duration-300">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link to="/#shop" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Dresses
                </Link>
              </li>
              <li>
                <Link to="/#shop" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Outerwear
                </Link>
              </li>
              <li>
                <Link to="/#shop" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Accessories
                </Link>
              </li>
            </ul>
          </div>

          {/* Maison */}
          <div>
            <h4 className="text-sm font-medium tracking-[0.3em] uppercase text-gold-400 mb-5">
              Maison
            </h4>

            <ul className="space-y-3 text-base">
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Craftsmanship
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Sustainability
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-medium tracking-[0.3em] uppercase text-gold-400 mb-5">
              Newsletter
            </h4>

            <p className="text-gray-300 text-base mb-4">
              Join our private list for early access to collections.
            </p>

            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 bg-transparent border-b border-gray-600 text-white text-base py-2 focus:outline-none placeholder:text-gray-500"
              />

              <button className="text-gray-300 hover:text-white ml-2 transition-colors duration-300">
                <Mail size={20} />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 gap-4">

          <p className="text-gray-300 text-base">
            © 2026 Maison Luxe. All rights reserved.
          </p>

          <div className="flex gap-5 md:ml-auto">

            <a
              href="#"
              className="text-pink-500 hover:text-pink-400 hover:scale-110 transition-transform duration-300"
            >
              <FaInstagram size={20} />
            </a>

            <a
              href="#"
              className="text-blue-600 hover:text-blue-500 hover:scale-110 transition-transform duration-300"
            >
              <FaFacebook size={20} />
            </a>

            <a
              href="#"
              className="text-sky-500 hover:text-sky-400 hover:scale-110 transition-transform duration-300"
            >
              <FaTwitter size={20} />
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
}
// // import { useEffect } from 'react';
// // import { useLocation } from 'react-router-dom';

// // // import Hero from '../components/home/Hero';
// // // import AnnouncementBar from '../components/home/AnnouncementBar';
// // // import FeaturedProducts from '../components/home/FeaturedProducts';
// // // import Collections from '../components/home/Collections';
// // // import BrandStory from '../components/home/BrandStory';

// // import Hero from "../components/Hero";
// // import AnnouncementBar from "../components/AnnouncementBar";
// // import FeaturedProducts from "../components/FeaturedProducts";
// // import Collections from "../components/Collections";
// // import BrandStory from "../components/BrandStory";
// // export default function Home() {
// //   const location = useLocation();

// //   useEffect(() => {
// //     const hash = location.hash;

// //     if (!hash) {
// //       window.scrollTo({ top: 0, behavior: 'smooth' });
// //       return;
// //     }

// //     const id = hash.replace('#', '');

// //     setTimeout(() => {
// //       const el = document.getElementById(id);
// //       if (el) {
// //         el.scrollIntoView({ behavior: 'smooth', block: 'start' });
// //       }
// //     }, 200);
// //   }, [location]);

// //   return (
// //     <>
// //       <Hero />
// //       <AnnouncementBar />
// //       <FeaturedProducts />
// //       <Collections />
// //       <BrandStory />
// //     </>
// //   );
// // }


// import { useEffect } from "react";
// import Hero from "../components/Hero";
// import AnnouncementBar from "../components/AnnouncementBar";
// import FeaturedProducts from "../components/FeaturedProducts";
// import Collections from "../components/Collections";
// import BrandStory from "../components/BrandStory";

// export default function Home() {
//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }, []);

//   return (
//     <>
//       <Hero />
//       <AnnouncementBar />

//       <section id="shop">
//         <FeaturedProducts />
//       </section>

//       <section id="collections">
//         <Collections />
//       </section>

//       <section id="about">
//         <BrandStory />
//       </section>
//     </>
//   );
// }


import Hero from "../components/Hero";
import AnnouncementBar from "../components/AnnouncementBar";
import FeaturedProducts from "../components/FeaturedProducts";
import Collections from "../components/Collections";
import BrandStory from "../components/BrandStory";

export default function Home() {
  return (
    <>
      <Hero />
      <AnnouncementBar />

      <section id="shop">
        <FeaturedProducts />
      </section>

      <section id="collections">
        <Collections />
      </section>

      <section id="about">
        <BrandStory />
      </section>
    </>
  );
}
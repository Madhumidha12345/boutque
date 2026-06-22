

import type { Product } from "./types";

export const products: Product[] = [
  { id: 1, name: "Midnight Silk Maxi Dress", brand: "AURÉLIE", description: "Crafted from 100% pure mulberry silk, this flowing maxi dress features a plunging neckline and delicate gold-thread embroidery.", price: 24999, category: "Dresses", image: "/dress.jpg", rating: 4.9, reviews: 127, colors: ["Noir", "Ivory", "Bordeaux"], sizes: ["XS", "S", "M", "L", "XL"], badge: "Bestseller" },
  { id: 2, name: "Embroidered Green Co-ord Set", brand: "AURÉLIE", description: "Intricately embroidered floral patterns on premium fabric, perfect for festive evenings.", price: 18500, category: "Co-ord Sets", image: "/dress1.jpg", rating: 4.8, reviews: 98, colors: ["Emerald"], sizes: ["S", "M", "L"], badge: "New Arrival" },
  { id: 3, name: "Floral Print Pastel Lehenga", brand: "AURÉLIE", description: "A breathtaking pastel lehenga adorned with soft floral motifs and delicate embroidery.", price: 32000, category: "Lehengas", image: "/dress3.jpg", rating: 4.7, reviews: 85, colors: ["Pastel Blue", "Sage"], sizes: ["S", "M"], badge: "" },
  { id: 4, name: "Vintage Bloom Skirt Set", brand: "AURÉLIE", description: "Elegant floral print skirt set with detailed craftsmanship.", price: 21000, category: "Lehengas", image: "/dress4.jpg", rating: 4.6, reviews: 64, colors: ["Multi-floral"], sizes: ["S", "M", "L"], badge: "Trending" },
  { id: 5, name: "Midnight Flora Lehenga", brand: "AURÉLIE", description: "Deep navy hues meet botanical inspiration in this stunning evening lehenga.", price: 28500, category: "Lehengas", image: "/dress5.jpg", rating: 4.9, reviews: 112, colors: ["Navy"], sizes: ["XS", "S", "M", "L"], badge: "Bestseller" },
  { id: 6, name: "Golden Hour Maxi Gown", brand: "AURÉLIE", description: "A sophisticated floor-length gown with botanical gold accents.", price: 26000, category: "Dresses", image: "/dress6.jpg", rating: 4.7, reviews: 75, colors: ["Cream", "Gold"], sizes: ["S", "M", "L"], badge: "" },
  { id: 7, name: "Pleated Heritage Skirt Set", brand: "AURÉLIE", description: "Traditional pleats meet modern silhouettes in this timeless ensemble.", price: 19500, category: "Co-ord Sets", image: "/dress7.jpg", rating: 4.5, reviews: 50, colors: ["Sage Green"], sizes: ["S", "M"], badge: "" },
  { id: 8, name: "Botanical Silk Saree", brand: "AURÉLIE", description: "Premium silk saree featuring a dense, artistic botanical print.", price: 22000, category: "Sarees", image: "/dress8.jpg", rating: 4.8, reviews: 90, colors: ["Forest Green"], sizes: ["One Size"], badge: "New Arrival" },
  { id: 9, name: "Garden Essence Saree", brand: "AURÉLIE", description: "A soft, garden-inspired saree perfect for daytime events.", price: 20500, category: "Sarees", image: "/dress9.jpg", rating: 4.6, reviews: 45, colors: ["Light Green", "Cream"], sizes: ["One Size"], badge: "" },
  { id: 10, name: "Azure Flow Maxi", brand: "AURÉLIE", description: "Capturing the essence of fluid motion with a mesmerizing marble print.", price: 27500, category: "Dresses", image: "/dress10.jpg", rating: 4.9, reviews: 130, colors: ["Azure"], sizes: ["S", "M", "L"], badge: "Editor's Choice" },
  { id: 11, name: "Ethereal Ivory Gown", brand: "AURÉLIE", description: "Classic ivory silhouette with subtle lace detailing.", price: 29500, category: "Gowns", image: "/dress13.jpg", rating: 4.8, reviews: 55, colors: ["Ivory"], sizes: ["S", "M", "L"], badge: "Elegant" },
  { id: 12, name: "Golden Embellished Kurta", brand: "AURÉLIE", description: "Traditional gold embroidery on fine fabric.", price: 15500, category: "Kurtas", image: "/dress14.jpg", rating: 4.7, reviews: 42, colors: ["Gold", "Beige"], sizes: ["S", "M", "L", "XL"], badge: "" },
  { id: 13, name: "Floral Velvet Blazer", brand: "AURÉLIE", description: "Luxurious velvet blazer with intricate floral prints.", price: 12000, category: "Outerwear", image: "/dress15.jpg", rating: 4.6, reviews: 38, colors: ["Deep Green"], sizes: ["M", "L"], badge: "New" },
  // { id: 14, name: "Chiffon Summer Drape", brand: "AURÉLIE", description: "Lightweight chiffon drape for a breezy look.", price: 9500, category: "Dresses", image: "/dress16.jpg", rating: 4.5, reviews: 30, colors: ["Peach"], sizes: ["S", "M"], badge: "" },
  { id: 15, name: "Royal Blue Silk Co-ord", brand: "AURÉLIE", description: "Modern co-ord set with a royal aesthetic.", price: 17500, category: "Co-ord Sets", image: "/dress17.jpg", rating: 4.8, reviews: 62, colors: ["Royal Blue"], sizes: ["S", "M", "L"], badge: "Trending" },
  { id: 16, name: "Bohemian Print Maxi", brand: "AURÉLIE", description: "Vibrant bohemian patterns for a casual chic look.", price: 13500, category: "Dresses", image: "/dress18.jpg", rating: 4.4, reviews: 45, colors: ["Multi"], sizes: ["XS", "S", "M"], badge: "" },
  { id: 17, name: "Classic Beige Trousers", brand: "AURÉLIE", description: "Tailored beige trousers for formal occasions.", price: 8500, category: "Bottoms", image: "/dress19.jpg", rating: 4.6, reviews: 25, colors: ["Beige"], sizes: ["S", "M", "L", "XL"], badge: "" },
  { id: 18, name: "Embroidered Evening Jacket", brand: "AURÉLIE", description: "Detailed embroidery for a sophisticated night out.", price: 14000, category: "Outerwear", image: "/dress20.jpg", rating: 4.7, reviews: 33, colors: ["Black"], sizes: ["S", "M", "L"], badge: "Limited" },
  { id: 19, name: "Silk Blend Festive Saree", brand: "AURÉLIE", description: "Perfect for celebrations with a rich silk blend finish.", price: 23000, category: "Sarees", image: "/dress21.jpg", rating: 4.9, reviews: 70, colors: ["Maroon"], sizes: ["One Size"], badge: "Bestseller" },
  { id: 20, name: "Minimalist Pastel Skirt", brand: "AURÉLIE", description: "Clean lines and soft tones for a minimalist style.", price: 7500, category: "Bottoms", image: "/dress22.jpg", rating: 4.5, reviews: 20, colors: ["Pastel Pink"], sizes: ["S", "M"], badge: "" },


  { id: 14, name: "Chiffon Summer Drape", brand: "AURÉLIE", description: "Lightweight chiffon drape for a breezy look.", price: 9500, category: "Dresses", image: "/dress16.jpg", rating: 4.5, reviews: 30, colors: ["Peach"], sizes: ["S", "M"], badge: "" },
  { id: 21, name: "Classic Leather Tote", brand: "AURÉLIE", description: "Premium leather tote for everyday elegance.", price: 5500, category: "Bags", image: "/bag28.jpg", rating: 4.7, reviews: 40, colors: ["Tan"], sizes: ["One Size"], badge: "Essential" },
  { id: 22, name: "Structured Handbag", brand: "AURÉLIE", description: "Sophisticated structured design for formal meets.", price: 6500, category: "Bags", image: "/bag29.jpg", rating: 4.8, reviews: 35, colors: ["Black"], sizes: ["One Size"], badge: "" },
  { id: 23, name: "Minimalist Clutch", brand: "AURÉLIE", description: "Sleek and slim clutch for evening outings.", price: 3500, category: "Bags", image: "/bag30.jpg", rating: 4.5, reviews: 28, colors: ["Gold"], sizes: ["One Size"], badge: "" },
  { id: 24, name: "Canvas Daily Bag", brand: "AURÉLIE", description: "Durable and stylish canvas bag for casual use.", price: 2500, category: "Bags", image: "/bag31.jpg", rating: 4.4, reviews: 50, colors: ["Off-white"], sizes: ["One Size"], badge: "Bestseller" },
  { id: 25, name: "Gold-Plated Earring Set", brand: "AURÉLIE", description: "Traditional gold-plated jhumkas for ethnic wear.", price: 1800, category: "Accessories", image: "/acc32.jpg", rating: 4.9, reviews: 80, colors: ["Gold"], sizes: ["One Size"], badge: "Trending" },
  { id: 26, name: "Minimalist Pendant Necklace", brand: "AURÉLIE", description: "Simple yet elegant daily wear pendant.", price: 1200, category: "Accessories", image: "/acc33.jpg", rating: 4.6, reviews: 45, colors: ["Silver"], sizes: ["One Size"], badge: "" },
  { id: 27, name: "Stackable Rings Set", brand: "AURÉLIE", description: "Modern rings that can be stacked for a chic look.", price: 1500, category: "Accessories", image: "/acc34.jpg", rating: 4.7, reviews: 60, colors: ["Gold", "Silver"], sizes: ["Adjustable"], badge: "" },
  { id: 28, name: "Silk Scarf Accessory", brand: "AURÉLIE", description: "A soft silk scarf to elevate any outfit.", price: 950, category: "Accessories", image: "/acc35.jpg", rating: 4.5, reviews: 32, colors: ["Multi-floral"], sizes: ["One Size"], badge: "" },
  { id: 29, name: "Classic Wrist Watch", brand: "AURÉLIE", description: "Analog watch with a premium leather strap.", price: 4500, category: "Accessories", image: "/acc36.jpg", rating: 4.8, reviews: 48, colors: ["Brown"], sizes: ["One Size"], badge: "Luxury" },
  { id: 30, name: "Belted Waist Accessory", brand: "AURÉLIE", description: "Stylish belt to cinch your waist and define your look.", price: 1500, category: "Accessories", image: "/acc37.jpg", rating: 4.4, reviews: 25, colors: ["Black"], sizes: ["S", "M", "L"], badge: "" },
// ...

];
 export const collections = [
   {
     title: "The Noir Collection",
     subtitle: "Autumn / Winter 2026",
     description: "Midnight hues meet architectural silhouettes.",
     image: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg",
   },
];
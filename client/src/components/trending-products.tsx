// // // import React, { useState, useEffect } from "react";
// // // import { Star, Heart, ChevronLeft, ChevronRight } from "lucide-react";

// // // interface Product {
// // //   id: number;
// // //   name: string;
// // //   image: string;
// // //   rating: number;
// // //   reviewCount: number;
// // //   originalPrice?: number;
// // //   currentPrice: number;
// // //   discount?: number;
// // //   colors: string[];
// // //   hasCountdown?: boolean;
// // //   countdownEnd?: Date;
// // // }

// // // interface CountdownTime {
// // //   days: number;
// // //   hours: number;
// // //   minutes: number;
// // //   seconds: number;
// // // }

// // // const TrendingProducts: React.FC = () => {
// // //   const [products, setProducts] = useState<Product[]>([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const [countdowns, setCountdowns] = useState<{
// // //     [key: number]: CountdownTime;
// // //   }>({});
// // //   const [currentIndex, setCurrentIndex] = useState(0);

// // //   // Simulate API data fetching
// // //   useEffect(() => {
// // //     const fetchData = async () => {
// // //       setLoading(true);

// // //       // Simulate network delay
// // //       await new Promise((resolve) => setTimeout(resolve, 1000));

// // //       const mockProducts: Product[] = [
// // //         {
// // //           id: 1,
// // //           name: "Cotton jersey top",
// // //           image:
// // //             "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
// // //           rating: 4.5,
// // //           reviewCount: 2,
// // //           originalPrice: 14.0,
// // //           currentPrice: 9.0,
// // //           discount: 36,
// // //           colors: ["#D4B896", "#A8C8EC", "#000000"],
// // //           hasCountdown: true,
// // //           countdownEnd: new Date(
// // //             Date.now() +
// // //               2 * 24 * 60 * 60 * 1000 +
// // //               19 * 60 * 60 * 1000 +
// // //               50 * 60 * 1000 +
// // //               37 * 1000
// // //           ),
// // //         },
// // //         {
// // //           id: 2,
// // //           name: "Ribbed Tank Top",
// // //           image:
// // //             "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
// // //           rating: 5,
// // //           reviewCount: 1,
// // //           currentPrice: 18.0,
// // //           colors: ["#F4C542", "#000000"],
// // //         },
// // //         {
// // //           id: 3,
// // //           name: "Oversized Motif T-shirt",
// // //           image:
// // //             "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
// // //           rating: 4,
// // //           reviewCount: 1,
// // //           originalPrice: 25.0,
// // //           currentPrice: 23.99,
// // //           discount: 4,
// // //           colors: ["#FFFFFF", "#000000"],
// // //           hasCountdown: true,
// // //           countdownEnd: new Date(
// // //             Date.now() +
// // //               2 * 24 * 60 * 60 * 1000 +
// // //               19 * 60 * 60 * 1000 +
// // //               50 * 60 * 1000 +
// // //               37 * 1000
// // //           ),
// // //         },
// // //         {
// // //           id: 4,
// // //           name: "Oversized Printed T-shirt",
// // //           image:
// // //             "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
// // //           rating: 5,
// // //           reviewCount: 1,
// // //           currentPrice: 18.0,
// // //           colors: ["#F8BBD9", "#000000"],
// // //         },
// // //         {
// // //           id: 5,
// // //           name: "Denim Jacket",
// // //           image:
// // //             "https://images.unsplash.com/photo-1544022613-e87ca75a784a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
// // //           rating: 4.5,
// // //           reviewCount: 3,
// // //           originalPrice: 89.0,
// // //           currentPrice: 65.0,
// // //           discount: 27,
// // //           colors: ["#4A90E2", "#2C3E50"],
// // //         },
// // //         {
// // //           id: 6,
// // //           name: "Knit Sweater",
// // //           image:
// // //             "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
// // //           rating: 5,
// // //           reviewCount: 5,
// // //           currentPrice: 45.0,
// // //           colors: ["#E8D5B7", "#8FBC8F", "#2F4F4F"],
// // //         },
// // //       ];

// // //       setProducts(mockProducts);
// // //       setLoading(false);
// // //     };

// // //     fetchData();
// // //   }, []);

// // //   // Countdown timer effect
// // //   useEffect(() => {
// // //     const interval = setInterval(() => {
// // //       const newCountdowns: { [key: number]: CountdownTime } = {};

// // //       products.forEach((product) => {
// // //         if (product.hasCountdown && product.countdownEnd) {
// // //           const now = new Date().getTime();
// // //           const distance = product.countdownEnd.getTime() - now;

// // //           if (distance > 0) {
// // //             const days = Math.floor(distance / (1000 * 60 * 60 * 24));
// // //             const hours = Math.floor(
// // //               (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
// // //             );
// // //             const minutes = Math.floor(
// // //               (distance % (1000 * 60 * 60)) / (1000 * 60)
// // //             );
// // //             const seconds = Math.floor((distance % (1000 * 60)) / 1000);

// // //             newCountdowns[product.id] = { days, hours, minutes, seconds };
// // //           }
// // //         }
// // //       });

// // //       setCountdowns(newCountdowns);
// // //     }, 1000);

// // //     return () => clearInterval(interval);
// // //   }, [products]);

// // //   const nextSlide = () => {
// // //     setCurrentIndex((prev) => (prev + 4 >= products.length ? 0 : prev + 1));
// // //   };

// // //   const prevSlide = () => {
// // //     setCurrentIndex((prev) =>
// // //       prev === 0 ? Math.max(0, products.length - 4) : prev - 1
// // //     );
// // //   };

// // //   const getVisibleProducts = () => {
// // //     const visible = [];
// // //     for (let i = 0; i < 4; i++) {
// // //       const index = (currentIndex + i) % products.length;
// // //       if (products[index]) {
// // //         visible.push(products[index]);
// // //       }
// // //     }
// // //     return visible;
// // //   };

// // //   const renderStars = (rating: number) => {
// // //     return Array.from({ length: 5 }, (_, index) => {
// // //       const filled = index < Math.floor(rating);
// // //       const halfFilled = index === Math.floor(rating) && rating % 1 !== 0;

// // //       return (
// // //         <Star
// // //           key={index}
// // //           className={`w-3 h-3 ${
// // //             filled
// // //               ? "fill-yellow-400 text-yellow-400"
// // //               : halfFilled
// // //               ? "fill-yellow-400/50 text-yellow-400"
// // //               : "text-gray-300"
// // //           }`}
// // //         />
// // //       );
// // //     });
// // //   };

// // //   if (loading) {
// // //     return (
// // //       <div className="w-full max-w-7xl mx-auto px-4 py-8">
// // //         <div className="text-center mb-8">
// // //           <div className="w-48 h-8 bg-gray-200 rounded animate-pulse mx-auto mb-4"></div>
// // //           <div className="w-96 h-5 bg-gray-200 rounded animate-pulse mx-auto"></div>
// // //         </div>

// // //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
// // //           {[1, 2, 3, 4].map((i) => (
// // //             <div key={i} className="space-y-4">
// // //               <div className="aspect-square bg-gray-200 rounded-2xl animate-pulse"></div>
// // //               <div className="space-y-2">
// // //                 <div className="flex gap-1">
// // //                   {[1, 2, 3, 4, 5].map((j) => (
// // //                     <div
// // //                       key={j}
// // //                       className="w-3 h-3 bg-gray-200 rounded animate-pulse"
// // //                     ></div>
// // //                   ))}
// // //                 </div>
// // //                 <div className="w-32 h-4 bg-gray-200 rounded animate-pulse"></div>
// // //                 <div className="w-20 h-5 bg-gray-200 rounded animate-pulse"></div>
// // //                 <div className="flex gap-2">
// // //                   {[1, 2, 3].map((k) => (
// // //                     <div
// // //                       key={k}
// // //                       className="w-4 h-4 bg-gray-200 rounded-full animate-pulse"
// // //                     ></div>
// // //                   ))}
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </div>
// // //     );
// // //   }

// // //   const visibleProducts = getVisibleProducts();

// // //   return (
// // //     <div className="w-full max-w-7xl mx-auto px-4 py-8">
// // //       {/* Header - matches categories style */}
// // //       <div className="text-center mb-8">
// // //         <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
// // //           Best Seller
// // //         </h2>
// // //         <p className="text-gray-600 text-sm max-w-2xl mx-auto">
// // //           Shop the Latest Styles: Stay ahead of the curve with our newest
// // //           arrivals
// // //         </p>
// // //       </div>

// // //       {/* Navigation - same as categories */}
// // //       <div className="flex items-center gap-4 mb-8">
// // //         <button
// // //           onClick={prevSlide}
// // //           className="p-2 rounded-full border border-gray-300 hover:bg-gray-50 transition-colors"
// // //           aria-label="Previous products"
// // //         >
// // //           <ChevronLeft className="w-4 h-4" />
// // //         </button>

// // //         <button
// // //           onClick={nextSlide}
// // //           className="p-2 rounded-full border border-gray-300 hover:bg-gray-50 transition-colors"
// // //           aria-label="Next products"
// // //         >
// // //           <ChevronRight className="w-4 h-4" />
// // //         </button>
// // //       </div>

// // //       {/* Products Grid - matches categories layout */}
// // //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
// // //         {visibleProducts.map((product) => (
// // //           <div
// // //             key={product.id}
// // //             className="group cursor-pointer"
// // //             onClick={() => console.log(`Navigate to ${product.name}`)}
// // //           >
// // //             {/* Product Image - same styling as categories */}
// // //             <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-100 mb-4 group-hover:scale-105 transition-transform duration-300">
// // //               <img
// // //                 src={product.image}
// // //                 alt={product.name}
// // //                 className="w-full h-full object-cover"
// // //                 loading="lazy"
// // //               />

// // //               {/* Overlay on hover - same as categories */}
// // //               <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

// // //               {/* Discount Badge */}
// // //               {product.discount && (
// // //                 <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-medium px-2 py-1 rounded-full">
// // //                   -{product.discount}%
// // //                 </div>
// // //               )}

// // //               {/* Countdown Timer */}
// // //               {product.hasCountdown && countdowns[product.id] && (
// // //                 <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1 rounded text-xs font-medium text-red-600">
// // //                   {countdowns[product.id].days}d :{" "}
// // //                   {countdowns[product.id].hours}h :{" "}
// // //                   {countdowns[product.id].minutes}m :{" "}
// // //                   {countdowns[product.id].seconds}s
// // //                 </div>
// // //               )}

// // //               {/* Wishlist Button */}
// // //               <button className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white">
// // //                 <Heart className="w-4 h-4 text-gray-600 cursor-pointer" />
// // //               </button>
// // //             </div>

// // //             {/* Product Info - consistent typography */}
// // //             <div className="space-y-2">
// // //               {/* Rating */}
// // //               <div className="flex items-center gap-2">
// // //                 <div className="flex gap-0.5">
// // //                   {renderStars(product.rating)}
// // //                 </div>
// // //                 <span className="text-xs text-gray-500">
// // //                   ({product.reviewCount})
// // //                 </span>
// // //               </div>

// // //               {/* Product Name - matches categories font weight */}
// // //               <h3 className="text-lg font-medium text-gray-900 group-hover:text-gray-600 transition-colors">
// // //                 {product.name}
// // //               </h3>

// // //               {/* Price */}
// // //               <div className="flex items-center gap-2">
// // //                 {product.originalPrice ? (
// // //                   <>
// // //                     <span className="text-sm text-gray-400 line-through">
// // //                       ${product.originalPrice.toFixed(2)}
// // //                     </span>
// // //                     <span className="text-sm font-semibold text-red-600">
// // //                       ${product.currentPrice.toFixed(2)}
// // //                     </span>
// // //                   </>
// // //                 ) : (
// // //                   <span className="text-sm font-semibold text-gray-900">
// // //                     ${product.currentPrice.toFixed(2)}
// // //                   </span>
// // //                 )}
// // //               </div>

// // //               {/* Color Options */}
// // //               <div className="flex gap-1.5 pt-1">
// // //                 {product.colors.map((color, index) => (
// // //                   <button
// // //                     key={index}
// // //                     className="w-4 h-4 rounded-full border border-gray-200 hover:scale-110 transition-transform"
// // //                     style={{ backgroundColor: color }}
// // //                     title={`Color option ${index + 1}`}
// // //                   />
// // //                 ))}
// // //               </div>
// // //             </div>
// // //           </div>
// // //         ))}
// // //       </div>

// // //       {/* Mobile Carousel Indicators - same as categories */}
// // //       <div className="flex justify-center mt-8 gap-2 lg:hidden">
// // //         {Array.from({ length: Math.ceil(products.length / 4) }).map((_, i) => (
// // //           <button
// // //             key={i}
// // //             onClick={() => setCurrentIndex(i * 4)}
// // //             className={`w-2 h-2 rounded-full transition-colors ${
// // //               Math.floor(currentIndex / 4) === i ? "bg-gray-900" : "bg-gray-300"
// // //             }`}
// // //             aria-label={`Go to slide ${i + 1}`}
// // //           />
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default TrendingProducts;

// // import React, { useState, useEffect } from "react";
// // import { ChevronLeft, ChevronRight } from "lucide-react";

// // interface Category {
// //   id: number;
// //   name: string;
// //   image: string;
// //   description?: string;
// // }

// // interface DiscoverySection {
// //   title: string;
// //   subtitle: string;
// //   image: string;
// // }

// // const TrendingProducts: React.FC = () => {
// //   const [categories, setCategories] = useState<Category[]>([]);
// //   const [discovery, setDiscovery] = useState<DiscoverySection | null>(null);
// //   const [loading, setLoading] = useState(true);
// //   const [currentIndex, setCurrentIndex] = useState(0);

// //   // Simulate API data fetching
// //   useEffect(() => {
// //     const fetchData = async () => {
// //       setLoading(true);

// //       // Simulate network delay
// //       await new Promise((resolve) => setTimeout(resolve, 1000));

// //       const mockCategories: Category[] = [
// //         {
// //           id: 1,
// //           name: "Clothing",
// //           image:
// //             "https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg",
// //           description: "Fashion & Apparel",
// //         },
// //         {
// //           id: 2,
// //           name: "Sunglasses",
// //           image:
// //             "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
// //           description: "Eyewear & Accessories",
// //         },
// //         {
// //           id: 3,
// //           name: "Heels",
// //           image:
// //             "https://images.pexels.com/photos/1801279/pexels-photo-1801279.jpeg",
// //           description: "Handbags & Totes",
// //         },
// //         {
// //           id: 4,
// //           name: "Shoes",
// //           image:
// //             "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
// //           description: "Footwear Collection",
// //         },
// //         {
// //           id: 5,
// //           name: "Jewelry",
// //           image:
// //             "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
// //           description: "Accessories & More",
// //         },
// //         {
// //           id: 6,
// //           name: "Jewelry",
// //           image:
// //             "https://images.pexels.com/photos/1801279/pexels-photo-1801279.jpeg",
// //           description: "Accessories & More",
// //         },
// //       ];

// //       const mockDiscovery: DiscoverySection = {
// //         title: "Discovery",
// //         subtitle: "all new items",
// //         image:
// //           "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
// //       };

// //       setCategories(mockCategories);
// //       setDiscovery(mockDiscovery);
// //       setLoading(false);
// //     };

// //     fetchData();
// //   }, []);

// //   //   const nextSlide = () => {
// //   //     setCurrentIndex((prev) => (prev + 3 >= categories.length ? 0 : prev + 1));
// //   //   };

// //   //   const prevSlide = () => {
// //   //     setCurrentIndex((prev) =>
// //   //       prev === 0 ? Math.max(0, categories.length - 3) : prev - 1
// //   //     );
// //   //   };

// //   const getVisibleCategories = () => {
// //     const visible = [];
// //     for (let i = 0; i < 3; i++) {
// //       const index = (currentIndex + i) % categories.length;
// //       if (categories[index]) {
// //         visible.push(categories[index]);
// //       }
// //     }
// //     return visible;
// //   };

// //   if (loading) {
// //     return (
// //       <div className="w-full  ml-8 md:ml-16 lg:ml-24 px-4 py-8">
// //         <div className="flex items-center gap-4 mb-8">
// //           <div className="w-6 h-6 bg-gray-200 rounded animate-pulse"></div>
// //           <div className="w-6 h-6 bg-gray-200 rounded animate-pulse"></div>
// //           <div className="w-48 h-6 bg-gray-200 rounded animate-pulse"></div>
// //         </div>

// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
// //           {[1, 2, 3, 4].map((i) => (
// //             <div key={i} className="space-y-4">
// //               <div className="aspect-square bg-gray-200 rounded-2xl animate-pulse"></div>
// //               <div className="w-20 h-4 bg-gray-200 rounded animate-pulse"></div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     );
// //   }

// //   const visibleCategories = getVisibleCategories();

// //   return (
// //     <div className="w-full ml-8 md:ml-16 lg:ml-24  px-4 py-8 ">
// //       {/* Categories Grid */}
// //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 bg-amber-700">
// //         {/* Category Items */}
// //         {visibleCategories.map((category) => (
// //           <div
// //             key={category.id}
// //             className="group cursor-pointer"
// //             onClick={() => console.log(`Navigate to ${category.name}`)}
// //           >
// //             <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-100 mb-4 group-hover:scale-105 transition-transform duration-300">
// //               <img
// //                 src={category.image}
// //                 alt={category.name}
// //                 className="w-full h-full object-cover"
// //                 loading="lazy"
// //               />
// //               <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
// //             </div>
// //           </div>
// //         ))}
// //       </div>

// //       {/* Mobile Carousel Indicators */}
// //       <div className="flex justify-center mt-8 gap-2 lg:hidden">
// //         {Array.from({ length: Math.ceil(categories.length / 3) }).map(
// //           (_, i) => (
// //             <button
// //               key={i}
// //               onClick={() => setCurrentIndex(i * 3)}
// //               className={`w-2 h-2 rounded-full transition-colors ${
// //                 Math.floor(currentIndex / 3) === i
// //                   ? "bg-gray-900"
// //                   : "bg-gray-300"
// //               }`}
// //               aria-label={`Go to slide ${i + 1}`}
// //             />
// //           )
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default TrendingProducts;

// import { Heart } from "lucide-react";
// import React, { useState, useEffect } from "react";

// interface Category {
//   id: number;
//   name: string;
//   image: string;
//   description?: string;
//   productName: string;
// }

// const TrendingProducts: React.FC = () => {
//   const [categories, setCategories] = useState<Category[]>([]);
//   const [loading, setLoading] = useState(true);

//   // Simulate API data fetching
//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);

//       await new Promise((resolve) => setTimeout(resolve, 1000));

//       const mockCategories: Category[] = [
//         {
//           id: 1,
//           name: "Clothing",
//           image:
//             "https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg",
//           description: "Fashion & Apparel",
//           productName: "Cotton jersey top",
//         },
//         {
//           id: 2,
//           name: "Sunglasses",
//           image:
//             "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
//           description: "Eyewear & Accessories",
//           productName: "Cotton jersey top",
//         },
//         {
//           id: 3,
//           name: "Heels",
//           image:
//             "https://images.pexels.com/photos/1801279/pexels-photo-1801279.jpeg",
//           description: "Handbags & Totes",
//           productName: "Cotton jersey top",
//         },
//         {
//           id: 4,
//           name: "Shoes",
//           image:
//             "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
//           description: "Footwear Collection",
//           productName: "Cotton jersey top",
//         },
//         {
//           id: 5,
//           name: "Jewelry",
//           image:
//             "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
//           description: "Accessories & More",
//           productName: "Cotton jersey top",
//         },
//         {
//           id: 6,
//           name: "Bags",
//           image:
//             "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
//           description: "Luxury Bags",
//           productName: "Cotton jersey top",
//         },
//         {
//           id: 5,
//           name: "Jewelry",
//           image:
//             "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
//           description: "Accessories & More",
//           productName: "Cotton jersey top",
//         },
//         {
//           id: 6,
//           name: "Bags",
//           image:
//             "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
//           description: "Luxury Bags",
//           productName: "Cotton jersey top",
//         },
//       ];

//       setCategories(mockCategories);
//       setLoading(false);
//     };

//     fetchData();
//   }, []);

//   if (loading) {
//     return (
//       <div className="w-9xl px-4 py-8">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {[1, 2, 3, 4].map((i) => (
//             <div
//               key={i}
//               className="aspect-square bg-gray-200 rounded-2xl animate-pulse"
//             ></div>
//           ))}
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="ml-10 mr-10 ">
//       {/* Categories Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
//         {categories.map((category) => (
//           <div
//             key={category.id}
//             className="group cursor-pointer"
//             onClick={() => console.log(`Navigate to ${category.name}`)}
//           >
//             <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-100 mb-4 group-hover:scale-105 transition-transform duration-300">
//               <img
//                 src={category.image}
//                 alt={category.name}
//                 className="w-full h-full object-cover"
//                 loading="lazy"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//             </div>
//           </div>
//         ))}
//         {/* Wishlist Button */}
//         <button className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white">
//           <Heart className="w-4 h-4 text-gray-600" />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default TrendingProducts;

"use client";
import React, { useState, useEffect } from "react";
import { Heart, Star } from "lucide-react";

interface Product {
  id: number;
  name: string;
  image: string;
  rating: number;
  reviewCount: number;
  originalPrice?: number;
  currentPrice: number;
}

const TrendingProducts: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const mockProducts: Product[] = [
        {
          id: 1,
          name: "Classic bag",
          image:
            "https://images.pexels.com/photos/1381562/pexels-photo-1381562.jpeg",
          rating: 5,
          reviewCount: 1,
          originalPrice: 14.99,
          currentPrice: 8.99,
        },
        {
          id: 2,
          name: "Ribbed Cotton Tee",
          image:
            "https://images.pexels.com/photos/8100787/pexels-photo-8100787.jpeg",
          rating: 4,
          reviewCount: 3,
          originalPrice: 20,
          currentPrice: 15,
        },
        {
          id: 3,
          name: "Oversized Graphic T-Shirt",
          image:
            "https://images.pexels.com/photos/10605234/pexels-photo-10605234.jpeg",
          rating: 5,
          reviewCount: 2,
          currentPrice: 22,
        },
        {
          id: 4,
          name: "Digital Camera",
          image:
            "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg",
          rating: 4.5,
          reviewCount: 5,
          originalPrice: 80,
          currentPrice: 65,
        },
        {
          id: 5,
          name: "Oversized Graphic T-Shirt",
          image:
            "https://images.pexels.com/photos/7449887/pexels-photo-7449887.jpeg",
          rating: 5,
          reviewCount: 2,
          currentPrice: 22,
        },
        {
          id: 6,
          name: "Digital Camera",
          image:
            "https://images.pexels.com/photos/15569182/pexels-photo-15569182.jpeg",
          rating: 4.5,
          reviewCount: 5,
          originalPrice: 80,
          currentPrice: 65,
        },
      ];

      setProducts(mockProducts);
      setLoading(false);
    };

    fetchData();
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < Math.floor(rating)
            ? "fill-yellow-400 text-yellow-400"
            : "text-gray-300"
        }`}
      />
    ));
  };

  if (loading) {
    return (
      <div className="px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="aspect-square bg-gray-200 rounded-2xl animate-pulse"
            ></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="px-6 py-10">
      {/* <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
        Trending Products
      </h2> */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="group cursor-pointer  rounded-2xl overflow-hidden p-4 hover:shadow-lg transition"
          >
            {/* Image */}
            <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100 mb-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {/* Wishlist */}
              <button className="absolute top-3 right-3 p-2 bg-white/90 rounded-full shadow hover:bg-white">
                <Heart className="w-4 h-4 text-gray-600" />
              </button>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-1">
              <div className="flex">{renderStars(product.rating)}</div>
              <span className="text-xs text-gray-500">
                ({product.reviewCount})
              </span>
            </div>

            {/* Product Name */}
            <h3 className="text-base font-medium text-gray-900 mb-2">
              {product.name}
            </h3>

            {/* Price */}
            <div className="flex items-center gap-2">
              {product.originalPrice && (
                <span className="text-sm text-gray-400 line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
              <span className="text-sm font-semibold text-red-600">
                ${product.currentPrice.toFixed(2)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingProducts;

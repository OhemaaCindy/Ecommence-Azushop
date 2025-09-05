// import {
//   Home,
//   ShoppingBag,
//   ShoppingCart,
//   Heart,
//   LogIn,
//   UserPlus,
// } from "lucide-react";

// interface NavbarProps {
//   cartCount?: number;
//   favouriteCount?: number;
// }

// const Navbar: React.FC<NavbarProps> = ({
//   cartCount = 0,
//   favouriteCount = 0,
// }) => {
//   return (
//     <nav className="bg-white border-b border-gray-200 px-4 py-3">
//       <div className="ml-10 mr-10 flex items-center justify-between">
//         {/* Logo */}
//         <div className="flex-shrink-0">
//           <h1 className="text-xl font-bold text-gray-900">Azushop</h1>
//         </div>

//         {/* Main Navigation */}
//         <div className="hidden md:flex items-center space-x-8">
//           <a
//             href="/"
//             className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
//           >
//             <Home size={20} />
//             <span className="font-medium">Home</span>
//           </a>

//           <a
//             href="/shop"
//             className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
//           >
//             <ShoppingBag size={20} />
//             <span className="font-medium">shop</span>
//           </a>

//           <a
//             href="/cart"
//             className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 relative"
//           >
//             <div className="relative">
//               <ShoppingCart size={20} />
//               {cartCount > 0 && (
//                 <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
//                   {cartCount}
//                 </span>
//               )}
//             </div>
//             <span className="font-medium">Cart</span>
//           </a>

//           <a
//             href="/favourites"
//             className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 relative"
//           >
//             <div className="relative">
//               <Heart size={20} />
//               {favouriteCount > 0 && (
//                 <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
//                   {favouriteCount}
//                 </span>
//               )}
//             </div>
//             <span className="font-medium">Favourite</span>
//           </a>
//         </div>

//         {/* Auth Links */}
//         <div className="hidden md:flex items-center space-x-4">
//           <a
//             href="/login"
//             className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
//           >
//             <LogIn size={20} />
//             <span className="font-medium">Login</span>
//           </a>

//           <a
//             href="/register"
//             className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
//           >
//             <UserPlus size={20} />
//             <span className="font-medium">Register</span>
//           </a>
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden">
//           <button
//             className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
//             aria-label="Open mobile menu"
//           >
//             <svg
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu (you can expand this with state management) */}
//       <div className="md:hidden mt-4 pt-4 border-t border-gray-200">
//         <div className="flex flex-col space-y-3">
//           <a
//             href="/"
//             className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 py-2"
//           >
//             <Home size={20} />
//             <span className="font-medium">Home</span>
//           </a>

//           <a
//             href="/shop"
//             className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 py-2"
//           >
//             <ShoppingBag size={20} />
//             <span className="font-medium">shop</span>
//           </a>

//           <a
//             href="/cart"
//             className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 py-2 relative"
//           >
//             <div className="relative">
//               <ShoppingCart size={20} />
//               {cartCount > 0 && (
//                 <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
//                   {cartCount}
//                 </span>
//               )}
//             </div>
//             <span className="font-medium">Cart</span>
//           </a>

//           <a
//             href="/favourites"
//             className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 py-2 relative"
//           >
//             <div className="relative">
//               <Heart size={20} />
//               {favouriteCount > 0 && (
//                 <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
//                   {favouriteCount}
//                 </span>
//               )}
//             </div>
//             <span className="font-medium">Favourite</span>
//           </a>

//           <div className="pt-3 border-t border-gray-200 flex flex-col space-y-3">
//             <a
//               href="/login"
//               className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 py-2"
//             >
//               <LogIn size={20} />
//               <span className="font-medium">Login</span>
//             </a>

//             <a
//               href="/register"
//               className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 py-2"
//             >
//               <UserPlus size={20} />
//               <span className="font-medium">Register</span>
//             </a>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


"use client";
import React, { useState } from "react";
import { Link } from "react-router";
// import { useSelector } from "react-redux";
import {
  ChevronDown,
  Search,
  User,
  Heart,
  ShoppingCart,
  Menu,
  X,
} from "lucide-react";
// import Cart from "../Cart/Cart";

interface RootState {
  cart: {
    // products: any[];
  };
}

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  // const products = useSelector((state: RootState) => state.cart.products);

  return (
    <div className="w-full shadow-md bg-white fixed top-0 left-0 z-50">
      <div className="flex items-center justify-between px-6 md:px-12 h-20">
        {/* LEFT */}
        <div className="hidden md:flex items-center gap-6 text-lg">
          <div className="flex items-center gap-1 cursor-pointer">
            <img src="/img/en.png" alt="language" className="w-5 h-5" />
            <ChevronDown size={16} />
          </div>
          <div className="flex items-center gap-1 cursor-pointer">
            <span>USD</span>
            <ChevronDown size={16} />
          </div>
          <Link className="hover:text-blue-600 transition" to="/products/1">
            Women
          </Link>
          <Link className="hover:text-blue-600 transition" to="/products/2">
            Men
          </Link>
          <Link className="hover:text-blue-600 transition" to="/products/3">
            Children
          </Link>
        </div>

        {/* CENTER */}
        <div className="text-2xl md:text-3xl font-bold tracking-wider">
          <Link to="/">Azu Shop</Link>
        </div>

        {/* RIGHT */}
        <div className="hidden md:flex items-center gap-6 text-lg">
          <Link className="hover:text-blue-600 transition" to="/">
            Homepage
          </Link>
          <Link className="hover:text-blue-600 transition" to="/">
            About
          </Link>
          <Link className="hover:text-blue-600 transition" to="/">
            Contact
          </Link>
          <Link className="hover:text-blue-600 transition" to="/">
            Stores
          </Link>
          <div className="flex items-center gap-4 text-gray-600 cursor-pointer">
            <Search className="w-5 h-5" />
            <User className="w-5 h-5" />
            <Heart className="w-5 h-5" />
            <div className="relative" onClick={() => setOpen((prev) => !prev)}>
              <ShoppingCart className="w-5 h-5" />
              {/* <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {products.length}
              </span> */}
            </div>
          </div>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <div
          className="md:hidden text-gray-800 cursor-pointer"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          {mobileMenu ? <X size={24} /> : <Menu size={24} />}
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileMenu && (
        <div className="flex flex-col items-center gap-6 py-6 bg-white shadow-md md:hidden">
          <Link
            className="hover:text-blue-600 transition"
            to="/products/1"
            onClick={() => setMobileMenu(false)}
          >
            Women
          </Link>
          <Link
            className="hover:text-blue-600 transition"
            to="/products/2"
            onClick={() => setMobileMenu(false)}
          >
            Men
          </Link>
          <Link
            className="hover:text-blue-600 transition"
            to="/products/3"
            onClick={() => setMobileMenu(false)}
          >
            Children
          </Link>
          <Link
            className="hover:text-blue-600 transition"
            to="/"
            onClick={() => setMobileMenu(false)}
          >
            Homepage
          </Link>
          <Link
            className="hover:text-blue-600 transition"
            to="/"
            onClick={() => setMobileMenu(false)}
          >
            About
          </Link>
          <Link
            className="hover:text-blue-600 transition"
            to="/"
            onClick={() => setMobileMenu(false)}
          >
            Contact
          </Link>
          <Link
            className="hover:text-blue-600 transition"
            to="/"
            onClick={() => setMobileMenu(false)}
          >
            Stores
          </Link>
        </div>
      )}

      {/* CART */}
      {/* {open && <Cart />} */}
    </div>
  );
};

export default Navbar;

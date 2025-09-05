import {
  Home,
  ShoppingBag,
  ShoppingCart,
  Heart,
  LogIn,
  UserPlus,
} from "lucide-react";

interface NavbarProps {
  cartCount?: number;
  favouriteCount?: number;
}

const Navbar: React.FC<NavbarProps> = ({
  cartCount = 0,
  favouriteCount = 0,
}) => {
  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-3">
      <div className="ml-10 mr-10 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <h1 className="text-xl font-bold text-gray-900">Azushop</h1>
        </div>

        {/* Main Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="/"
            className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
          >
            <Home size={20} />
            <span className="font-medium">Home</span>
          </a>

          <a
            href="/shop"
            className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
          >
            <ShoppingBag size={20} />
            <span className="font-medium">shop</span>
          </a>

          <a
            href="/cart"
            className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 relative"
          >
            <div className="relative">
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </div>
            <span className="font-medium">Cart</span>
          </a>

          <a
            href="/favourites"
            className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 relative"
          >
            <div className="relative">
              <Heart size={20} />
              {favouriteCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {favouriteCount}
                </span>
              )}
            </div>
            <span className="font-medium">Favourite</span>
          </a>
        </div>

        {/* Auth Links */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="/login"
            className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
          >
            <LogIn size={20} />
            <span className="font-medium">Login</span>
          </a>

          <a
            href="/register"
            className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
          >
            <UserPlus size={20} />
            <span className="font-medium">Register</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
            aria-label="Open mobile menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (you can expand this with state management) */}
      <div className="md:hidden mt-4 pt-4 border-t border-gray-200">
        <div className="flex flex-col space-y-3">
          <a
            href="/"
            className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 py-2"
          >
            <Home size={20} />
            <span className="font-medium">Home</span>
          </a>

          <a
            href="/shop"
            className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 py-2"
          >
            <ShoppingBag size={20} />
            <span className="font-medium">shop</span>
          </a>

          <a
            href="/cart"
            className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 py-2 relative"
          >
            <div className="relative">
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </div>
            <span className="font-medium">Cart</span>
          </a>

          <a
            href="/favourites"
            className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 py-2 relative"
          >
            <div className="relative">
              <Heart size={20} />
              {favouriteCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {favouriteCount}
                </span>
              )}
            </div>
            <span className="font-medium">Favourite</span>
          </a>

          <div className="pt-3 border-t border-gray-200 flex flex-col space-y-3">
            <a
              href="/login"
              className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 py-2"
            >
              <LogIn size={20} />
              <span className="font-medium">Login</span>
            </a>

            <a
              href="/register"
              className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 py-2"
            >
              <UserPlus size={20} />
              <span className="font-medium">Register</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

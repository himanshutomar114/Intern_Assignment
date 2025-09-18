import { ChevronDown } from "lucide-react";

const Navbar = () => {
  return (
    <header className="flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 lg:px-8 py-4 sm:py-6 bg-gray-50">
      {/* Logo */}
      <div className="text-2xl sm:text-3xl lg:text-4xl font-sfpro font-bold text-black mb-4 sm:mb-0">
        Luca
        <span className="text-sm sm:text-base text-black font-sacramento italic">.com</span>
      </div>

      {/* Nav Links */}
      <nav className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 lg:space-x-10 text-base sm:text-lg">
        <div className="flex items-center space-x-2 cursor-pointer text-black hover:text-gray-700">
          <span className="font-medium">Series</span>
          <ChevronDown className="w-4 h-4" />
        </div>
        <a
          href="#"
          className="text-black hover:text-gray-700 font-medium"
        >
          Author's Website
        </a>
        <a
          href="#"
          className="text-black hover:text-gray-700 font-medium"
        >
          Contact Us
        </a>
      </nav>
    </header>
  );
};

export default Navbar;

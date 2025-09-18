import { ChevronDown } from "lucide-react";

const Navbar = () => {
  return (
    <header className="flex justify-between  items-center px-8 py-6 bg-gray-50">
      <div className="text-4xl font-sfpro font-bold text-black">
        Luca<span className="text-base text-black font-sacramento  italic">.com</span>
      </div>
      <nav className="flex items-center space-x-10 text-lg">
        <div className="flex items-center space-x-2 cursor-pointer text-black hover:text-gray-700">
          <span className="font-medium">Series</span>
          <ChevronDown className="w-4 h-4" />
        </div>
        <a href="#" className="text-black hover:text-gray-700 font-medium">Author's Website</a>
        <a href="#" className="text-black hover:text-gray-700 font-medium">Contact Us</a>
      </nav>
    </header>
  );
};

export default Navbar;
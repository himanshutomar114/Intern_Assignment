export default function BookCTA() {
  return (
    <div className="p-8 bg-gray-200 bg-[url('/Vector.png')] min-h-screen flex items-center justify-center">
      <div className="relative">
        {/* Book illustration */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            {/* Book */}
            <div className="relative w-72 h-96 transform rotate-12 hover:rotate-6 transition-transform duration-500 hover:scale-105">
              {/* Multiple shadow layers for depth */}
              <div className="absolute top-4 left-4 w-full h-full bg-black opacity-40 rounded-lg blur-sm"></div>
              <div className="absolute top-3 left-3 w-full h-full bg-black opacity-30 rounded-lg blur-xs"></div>
              <div className="absolute top-2 left-2 w-full h-full bg-black opacity-60 rounded-lg"></div>
              
              {/* Book cover with gradient */}
              <div className="relative w-full h-full bg-gradient-to-br from-teal-400 via-teal-500 to-teal-700 rounded-lg border-4 border-black overflow-hidden shadow-2xl">
                {/* Subtle texture overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                <div className="absolute inset-0 bg-noise opacity-5"></div>
                
                {/* Content */}
                <div className="relative p-8 text-white h-full flex flex-col">
                  {/* Top section */}
                  <div className="flex-1">
                    <div className="text-sm font-bold tracking-wider opacity-90">THE</div>
                    <div className="text-4xl font-black leading-none  text-shadow-lg">CARE</div>
                    <div className="text-lg font-semibold  tracking-wide opacity-90">AND</div>
                    <div className="text-4xl font-black leading-none  text-shadow-lg">FEEDING</div>
                    <div className="text-sm font-semibold mb-8 tracking-wider opacity-90">OF</div>
                  </div>
                  
                  {/* Red stripe with gradient and shadow */}
                  <div className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 text-white px-4 py-3 -mx-8 mb-14 shadow-lg border-y-2 border-red-800">
                    <div className="text-xs ml-4 font-bold tracking-wider">HIRING • PERFORMING</div>
                    <div className="text-2xl ml-4 font-black tracking-tight">TEAMS</div>
                  </div>
                  
                  {/* Author name */}
                  <div className="text-xl font-semibold opacity-95 tracking-wide">
                    Leslie Martinich
                  </div>
                </div>
                
                {/* Glossy effect */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none rounded-lg"></div>
              </div>
              
              {/* Enhanced book binding with gradient */}
              <div className="absolute left-0 top-0 w-6 h-full bg-gradient-to-b from-gray-800 via-black to-gray-800 rounded-l-lg border-r-2 border-gray-700">
                {/* Binding details */}
                <div className="absolute top-8 left-1 w-4 h-1 bg-gray-600 rounded-full opacity-50"></div>
                <div className="absolute top-16 left-1 w-4 h-1 bg-gray-600 rounded-full opacity-50"></div>
                <div className="absolute bottom-16 left-1 w-4 h-1 bg-gray-600 rounded-full opacity-50"></div>
                <div className="absolute bottom-8 left-1 w-4 h-1 bg-gray-600 rounded-full opacity-50"></div>
              </div>
              
              {/* Page edges */}
              <div className="absolute right-0 top-1 w-1 h-[calc(100%-8px)] bg-gradient-to-b from-gray-100 via-white to-gray-200 rounded-r-sm"></div>
            </div>
            
            {/* Arrow pointing to book */}
            <div className="absolute -top-20 transform ">
             <img src="/pin.png" alt="Decorative arrow" className="w-20 h-20" />
            </div>
             <div className="absolute bottom-1 -right-36 transform ">
             <img src="/arrowbook.png" alt="Decorative arrow" className="w-20 h-20" />
            </div>
          </div>
        </div>

        

        {/* CTA Button */}
        <div className="flex justify-center items-center gap-4">
          {/* Cart icon */}
          <div className="w-12 h-12 mt-10 flex items-center justify-center ">
            <img src="/cart.png" alt="Cart" className="w-12 h-12" />
          </div>
          
          {/* Button */}
          <button className="bg-white mt-10 border-3 border-black rounded-full px-8 py-4 text-xl font-medium text-black hover:bg-gray-50 transition-colors shadow-lg">
            Get the book for deeper stories.
          </button>
        </div>
      </div>
    </div>
  );
}
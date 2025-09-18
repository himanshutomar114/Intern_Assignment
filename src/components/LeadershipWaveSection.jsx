import React from 'react';
import ChatBubble from './MessageCircle';

const LeadershipWaveSection = () => {
  return (
    <div className="min-h-screen bg-[url('/Vector.png')] bg-repeat bg-gray-100 from-gray-100 to-gray-300 flex items-center justify-center p-5">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left Content */}
        <div className="pl-0 lg:pl-10 space-y-8 text-center lg:text-left">
          {/* Leader Badge */}
          <div className="flex justify-center lg:justify-start">
            <ChatBubble />
          </div>
          
          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">
            <span className="text-black">Ride the </span>
            <span className="text-orange-500 bg-[#F2E2D9]">Wave of</span>
            <br />
            <span className="text-orange-500 bg-[#F2E2D9]">Leadership </span>
            <span className="text-black">with </span>
            
            {/* Luca with arrow beside */}
            <span className="inline-flex items-center">
              <span
                className="text-black inline-block bg-[url('/circle.png')] bg-no-repeat bg-center"
                style={{ backgroundSize: 'cover' }}
              >
                Luca.
              </span>
              <img
                src="/arrowright.png"
                alt="wave"
                className="inline-block rotate-12 ml-3 w-10 sm:w-12 lg:w-16 h-10 sm:h-12 lg:h-16"
              />
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-md mx-auto lg:mx-0">
            A fun animated series for IT pros who want to lead with skill (and stoke).
          </p>
          
          {/* CTA Section */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 lg:gap-8">
            {/* Decorative Arrow */}
            <img src="/sidearrow.png" alt="Decorative arrow" className="w-16 sm:w-20 h-6 sm:h-8" />
            
            {/* Play Button */}
            <button className="border-gray-800 p-3 sm:p-4 rounded-full transition-colors duration-300">
              <img src="/playbutton.png" alt="Play Button" className="w-12 sm:w-16 h-12 sm:h-16" />
            </button>
            
            {/* Watch Series Button */}
            <button className="bg-white border-2 border-gray-800 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base font-semibold text-gray-800 hover:bg-gray-50 transition-colors duration-300">
              Watch the Series
            </button>
            
            {/* Decorative Arrow */}
            <img src="/rightsidearrow.png" alt="Decorative arrow" className="w-16 sm:w-20 h-6 sm:h-8" />
          </div>

          {/* Scroll Indicator */}
          <div className="flex flex-col items-center lg:items-start mt-12 lg:mt-20">
            <span className="text-base sm:text-lg font-bold font-sacramento mb-4">Scroll</span>
            <div className="flex flex-col gap-1">
              <img src="/chevrons-down.png" alt="Decorative arrow" className="w-12 sm:w-20 h-6 sm:h-8" />
            </div>
          </div>
        </div>
        
        {/* Right Content - Character Surfing */}
        <div className="relative flex justify-center lg:justify-end">
          <img src="/image 10.png" alt="Decorative" className="w-64 sm:w-80 lg:w-auto h-auto" />
        </div>
      </div>
    </div>
  );
};

export default LeadershipWaveSection;

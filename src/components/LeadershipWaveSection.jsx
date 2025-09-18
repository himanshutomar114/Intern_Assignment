import React from 'react';
import { Play, ChevronDown } from 'lucide-react';
import ChatBubble from './MessageCircle';

const LeadershipWaveSection = () => {
  return (
    <div className="min-h-screen bg-[url('/Vector.png')] bg-repeat bg-gray-100  from-gray-100 to-gray-300 flex items-center justify-center p-5">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        {/* Left Content */}
        <div className="pl-10 space-y-8">
          {/* Leader Badge */}
          <ChatBubble />
          
          {/* Main Title */}
          <h1 className="text-6xl lg:text-5xl font-black leading-tight">
            <span className="text-black">Ride the </span>
            <div className="inline-block ">
            <span className="text-orange-500 bg-[#F2E2D9]">Wave of</span>
            <img src="/arrowright.png" alt="wave" className="inline-block pl-10 w-16 h-16 -mt-4 " />
            </div>
            <br />
            <span className="text-orange-500 bg-[#F2E2D9]">Leadership </span>
            
            <span className="text-black">with </span>
        
            <span
  className="text-black inline-block bg-[url('/circle.png')] bg-no-repeat bg-center"
  style={{ backgroundSize: 'cover' }}
>
  Luca.
</span>


              
          
            
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg text-gray-600 leading-relaxed max-w-md">
            A fun animated series for IT pros who want to lead with skill (and stoke).
          </p>
          
          {/* CTA Section */}
          <div className="flex items-center gap-8">
            {/* Decorative Arrow */}
            <img src="/sidearrow.png" alt="Decorative arrow" className="w-20 h-8" />
            
            {/* Play Button */}
            <button className=" border-gray-800 p-4 rounded-full transition-colors duration-300">
              <img src="/playbutton.png" alt="Play Button" className="w-16 h-16" />
              </button>
            
            {/* Watch Series Button */}
            <button className="bg-white border-2 border-gray-800 px-8 py-4 rounded-full text-base font-semibold text-gray-800 hover:bg-gray-50 transition-colors duration-300">
              Watch the Series
            </button>
            
            {/* Decorative Arrow */}
             <img src="/rightsidearrow.png" alt="Decorative arrow" className="w-20 h-8" />
          </div>

          
          {/* Scroll Indicator */}
          <div className="flex ml-36 flex-col items-center mt-20">
            <span className="text-lg font-bold font-sacramento mb-4">Scroll</span>
            <div className="flex flex-col gap-1">
               <img src="/chevrons-down.png" alt="Decorative arrow" className="w-20 h-8" />
            </div>
          </div>
        </div>
        
        {/* Right Content - Character Surfing */}
        <div className="relative">
          {/* Blue border frame */}
    <img src="/image 10.png" alt="Decorative arrow" className="w-auto h-auto" />

        </div>
      </div>
      
      <style jsx>{`
        @keyframes surf {
          0%, 100% { transform: translateX(-50%) translateY(0px) rotate(-2deg); }
          50% { transform: translateX(-50%) translateY(-8px) rotate(2deg); }
        }
      `}</style>
    </div>
  );
};

export default LeadershipWaveSection;
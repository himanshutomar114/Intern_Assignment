export default function LucasLeadershipMinutes() {
  return (
    <div className="p-8 bg-[url('/Vector.png')] bg-gray-100 min-h-screen">
      {/* Header with bird logo and title */}
      <div className="flex justify-between items-start mb-8">
       
       
          <img src="/Vector-7.png" alt="Decorative arrow" className="w-40 h-16 mt-10" />
     
        {/* Right side - About button and title */}
        <div className="flex flex-col items-end">
          {/* About button */}
          <button className="bg-[url('/BubbleRight.png')] px-4 py-2 text-black font-medium mb-4">
            About the Series
          </button>
          
          {/* Title */}
          <div className="flex items-center gap-2">
            <span className="text-6xl font-bold text-black">Luca's</span>
            <span className="text-6xl text-orange-500 bg-[#F2E2D9]">→</span>
            <span className="text-6xl font-bold text-orange-500 bg-[#F2E2D9]">Leadership Minutes.</span>
          </div>
        </div>
      </div>

      {/* Main episode card */}
      <div className="relative rounded-2xl w-auto border-black border-2 overflow-hidden shadow-xl">
        
       <img src="/beach.png" alt="Beach" className="w-full" />

        {/* Episode info overlay */}
        <div className="absolute bottom-8 left-8 text-white">
          <h2 className="text-5xl font-bold mb-4">Episode 01</h2>
        </div>

        {/* Play button */}
        <div className="absolute bottom-8 right-8 flex items-center gap-4">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
            <img src="/play.png" alt="Play" className="w-6 h-6" />
          </div>
          <button className="bg-white rounded-full px-6 py-3 text-black font-medium flex items-center gap-2">
            <span>Watch Episode</span>
            <span className="text-black">→</span>
            <span>01 Now</span>
          </button>
        </div>
      </div>
    </div>
  );
}
export default function LucaAndHisCrew() {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="flex pl-16 items-start gap-8">
        {/* Left side text */}
        <div className="flex-shrink-0 mr-72">
          <div className="bg-[url('/cloudmeet.png')] px-5 py-2 mb-4 shadow-sm inline-block">
            <span className="text-sm text-gray-600">Meet</span>
          </div>
          <h1 className="text-6xl font-bold leading-tight">
            <span className="text-black">Luca </span>
              <span className="text-orange-500  bg-[#F2E2D9]">&</span>
          <div className="text-6xl font-bold leading-tight ml-9 mb-4 inline-block">
         <img src="/illuarrow.png" alt="Decorative arrow" className="w-20 h-8" />
          </div>
            
          </h1>
          <h2 className="text-6xl font-bold leading-tight mb-4">
            <span className="text-orange-500 bg-[#F2E2D9]">his Crew</span>
            <span className="text-orange-500  bg-[#F2E2D9]">.</span>
          </h2>
        
        </div>

        {/* Character cards */}
 <div className="flex gap-6 overflow-x-auto">
          {/* Luca */}
          <div className="flex-shrink-0">
            <div className="bg-cyan-400 border-4 border-dashed border-cyan-600 rounded-lg p-8 w-48 h-72 flex items-center justify-center">
              <img 
                src="/boy1.png" 
                alt="Luca character" 
                className="rounded-lg"
              />
            </div>
            <div className="mt-4 w-48">
              <h3 className="font-bold text-xl">Luca</h3>
              <p className="text-sm text-gray-600 leading-tight">
                Visionary but flawed leader<br />learning balance.
              </p>
            </div>
          </div>

          {/* Ray */}
          <div className="flex-shrink-0">
            <div className="bg-cyan-400 border-4 border-dashed border-cyan-600 rounded-lg p-8 w-48 h-72 flex items-center justify-center">
              <img 
                src="/boy2.png" 
                alt="Ray character" 
                className="rounded-lg"
              />
            </div>
            <div className="mt-4 w-48">
              <h3 className="font-bold text-xl">Ray</h3>
              <p className="text-sm text-gray-600 leading-tight">
                The wise mentor showing the<br />change curve.
              </p>
            </div>
          </div>

          {/* Vince */}
          <div className="flex-shrink-0">
            <div className="bg-cyan-400 border-4 border-dashed border-cyan-600 rounded-lg p-8 w-48 h-72 flex items-center justify-center">
              <img 
                src="/girl.png" 
                alt="Vince character" 
                className="rounded-lg"
              />
            </div>
            <div className="mt-4 w-48">
              <h3 className="font-bold text-xl">Vince</h3>
              <p className="text-sm text-gray-600 leading-tight">
                The rock-solid architect who<br />challenges authority.
              </p>
            </div>
          </div>

          {/* Fourth character (partially visible) */}
          <div className="flex-shrink-0">
            <div className="bg-cyan-400 border-4 border-dashed border-cyan-600 rounded-lg p-8 w-48 h-72 flex items-center justify-center">
              <img 
                src="/girl.png" 
                alt="Vi character" 
                className="rounded-lg"
              />
            </div>
            <div className="mt-4 w-48">
              <h3 className="font-bold text-xl">Vi</h3>
              <p className="text-sm text-gray-600 leading-tight">
                The change<br />cha...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
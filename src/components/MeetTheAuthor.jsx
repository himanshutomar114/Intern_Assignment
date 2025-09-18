export default function MeetTheAuthor() {
  return (
    <div className="p-8 bg-gray-200  min-h-screen">
      <div className="flex justify-between items-center mb-8 max-w-6xl mx-auto">
  {/* Bubble label */}
  <div className="bg-[url('/bubblemeet.png')] px-4 py-2 shadow-sm inline-block">
    <span className="text-black font-medium">Meet the Author</span>
  </div>

  {/* Author image */}
  <img
    src="/illuauthor.png"
    alt="Author"
    className="w-30 h-20"
  />
</div>

      {/* Main card container */}
      <div className="relative bg-gradient-to-t p-8 max-w-6xl mx-auto">
        
        {/* Decorative cyan elements in top right */}
        <div className="absolute -top-4 -right-4">
          <div className="w-12 h-3 bg-cyan-400 rounded-full transform rotate-12"></div>
          <div className="w-8 h-3 bg-cyan-400 rounded-full transform rotate-45 mt-1 ml-2"></div>
          <div className="w-6 h-3 bg-cyan-400 rounded-full transform -rotate-12 mt-1 ml-4"></div>
        </div>

        {/* Speech bubble at top */}
        <div className="absolute -top-8 left-8">
          
          {/* Speech bubble pointer */}
          <div className="absolute top-full left-6 w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-white"></div>
          <div className="absolute top-full left-6 w-0 h-0 border-l-4 border-r-4 border-t-6 border-l-transparent border-r-transparent border-t-black mt-1"></div>
        </div>

        {/* Content layout */}
        <div className="flex items-start justify-between pt-16 pr-80">
          
          {/* Left side content */}
          <div className="flex-1 max-w-lg">
            {/* Name */}
            <div className="relative mb-8">
              <h1 className="text-6xl font-bold text-orange-500">Leslie.</h1>
            </div>

            {/* Description points */}
            <div className="space-y-6">
              {/* First point */}
              <div className="flex items-start gap-3">
                <div className="text-2xl">🚀</div>
                <div>
                  <span className="text-gray-600">Leadership Coach + Engineer </span>
                  <span className="text-black font-semibold">who has guided</span>
                  <br />
                  <span className="text-black font-semibold">500+ tech teams </span>
                  <span className="text-gray-600">across </span>
                  <span className="text-black font-semibold">03 continents.</span>
                </div>
              </div>

              {/* Second point */}
              <div className="flex items-start gap-3">
                <div className="text-2xl">🎤</div>
                <div>
                  <span className="text-gray-600">Inspiring keynote speaker, </span>
                  <span className="text-black font-semibold">trusted by global giants</span>
                  <br />
                  <span className="text-black font-semibold">like Dell and Emerson.</span>
                </div>
              </div>

              {/* Third point */}
              <div className="flex items-start gap-3">
                <div className="text-2xl">🤝</div>
                <div>
                  <span className="text-black font-semibold">Creator of trust-based leadership models that</span>
                  <br />
                  <span className="text-black font-semibold">make teams thrive.</span>
                </div>
              </div>

              {/* Fourth point */}
              <div className="flex items-start gap-3">
                <div className="text-2xl">📚</div>
                <div>
                  <span className="text-black font-semibold">Author who turned her lessons into Luca's fun,</span>
                  <br />
                  <span className="text-gray-600">animated adventures, </span>
                  <span className="text-black font-semibold">helping IT pros learn to lead</span>
                  <br />
                  <span className="text-gray-600">more humanely. </span>
                  <span className="text-cyan-500 underline font-semibold cursor-pointer">Learn More...</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Author photo (positioned to attach to top right) */}
          <div className="absolute -top-18 -right-12 flex-shrink-0">
            {/* Layer 3 - Bottom shadow layer */}
            <div className="absolute top-4 left-4 w-96 h-96 rounded-3xl bg-black opacity-20"></div>
            {/* Layer 2 - Middle accent layer */}
            <div className="absolute top-2 left-2 w-96 h-96 rounded-3xl bg-orange-300"></div>
            {/* Layer 1 - Main photo container */}
            <div className="relative w-96 h-96 rounded-3xl overflow-hidden bg-gradient-to-br from-orange-400 to-orange-600 p-1 border-4 border-black">
              <div className="w-full h-full rounded-2xl overflow-hidden">
                <img 
                  src="/author.png" 
                  alt="Leslie - Leadership Coach and Engineer" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section with paper airplane */}
        <div className="relative mt-16">
          {/* Paper airplane */}
          <div className="absolute bottom-8 top-1 left-8">
            <img src="/plane.png" alt="Author" className="w-30 h-20" /> 
            <img src="/dotted.png" alt="Author" className="w-30 h-20" /> 
          </div>

          {/* Speech bubble */}
          <div className="absolute bottom-20 right-48">
            <div className="bg-[url('/authorbubble.png')]  px-4 py-2">
              <span className="text-black font-medium">The book that inspired the series.</span>
            </div>
          </div>

          {/* Bottom text */}
          <div className="text-center pt-20">
            <h2 className="text-5xl pt-10 font-bold">
              <span className="text-black">Where </span>
              <span className="text-orange-500 bg-[#F2E2D9]">Luca's story began</span>
              <span className="text-orange-500 bg-[#F2E2D9]">.</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
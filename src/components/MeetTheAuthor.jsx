export default function MeetTheAuthor() {
  return (
    <div className="p-8 bg-gray-200 min-h-screen">
      {/* Top section */}
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        {/* Bubble label */}
        <div className="bg-[url('/bubblemeet.png')] px-4 py-2 shadow-sm inline-block">
          <span className="text-black font-medium">Meet the Author</span>
        </div>

        {/* Author decorative image */}
        <img
          src="/illuauthor.png"
          alt="Author"
          className="w-20 h-14 md:w-30 md:h-20 object-contain relative md:top-4 md:right-4"
        />
      </div>

      {/* Main card container */}
      <div className="relative bg-gradient-to-t p-8 max-w-6xl mx-auto">
      
        {/* Content layout */}
        <div className="flex flex-col md:flex-row items-start justify-between pt-8 md:pt-16 md:pr-80 gap-10">
          {/* Left side content */}
          <div className="flex-1 max-w-lg">
            <div className="relative mb-8">
              <h1 className="text-4xl md:text-6xl font-bold text-orange-500">Leslie.</h1>
            </div>

            {/* Description points */}
            <div className="space-y-6 text-base md:text-lg">
              <div className="flex items-start gap-3">
                <div className="text-xl md:text-2xl">🚀</div>
                <div>
                  <span className="text-gray-600">Leadership Coach + Engineer </span>
                  <span className="text-black font-semibold">who has guided</span>
                  <br />
                  <span className="text-black font-semibold">500+ tech teams </span>
                  <span className="text-gray-600">across </span>
                  <span className="text-black font-semibold">03 continents.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="text-xl md:text-2xl">🎤</div>
                <div>
                  <span className="text-gray-600">Inspiring keynote speaker, </span>
                  <span className="text-black font-semibold">trusted by global giants</span>
                  <br />
                  <span className="text-black font-semibold">like Dell and Emerson.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="text-xl md:text-2xl">🤝</div>
                <div>
                  <span className="text-black font-semibold">Creator of trust-based leadership models that</span>
                  <br />
                  <span className="text-black font-semibold">make teams thrive.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="text-xl md:text-2xl">📚</div>
                <div>
                  <span className="text-black font-semibold">
                    Author who turned her lessons into Luca's fun,
                  </span>
                  <br />
                  <span className="text-gray-600">animated adventures, </span>
                  <span className="text-black font-semibold">helping IT pros learn to lead</span>
                  <br />
                  <span className="text-gray-600">more humanely. </span>
                  <span className="text-cyan-500 underline font-semibold cursor-pointer">
                    Learn More...
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Author photo */}
          <div className="relative md:absolute md:-top-18 md:-right-12 flex-shrink-0">
            {/* Layers */}
            <div className="absolute top-2 left-2 w-64 h-64 md:w-96 md:h-96 rounded-3xl bg-black opacity-20"></div>
            <div className="absolute top-1 left-1 w-64 h-64 md:w-96 md:h-96 rounded-3xl bg-orange-300"></div>

            {/* Main photo */}
            <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-3xl overflow-hidden bg-gradient-to-br from-orange-400 to-orange-600 p-1 border-4 border-black">
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

        {/* Bottom section */}
        <div className="relative mt-16">
          <div className="absolute bottom-28 left-16 hidden md:block">
            <img src="/plane.png" alt="Author" className="w-24 h-16" />
            
          </div>
          <div className="absolute bottom-14 hidden md:block">
            <img src="/dotted.png" alt="Author" className="w-24 h-16" />
          </div>

          <div className="absolute bottom-16 right-48 hidden md:block">
            <div className="bg-[url('/authorbubble.png')] px-4 py-2">
              <span className="text-black font-medium">
                The book that inspired the series.
              </span>
            </div>
          </div>

          <div className="text-center pt-20">
            <h2 className="text-3xl md:text-5xl pt-10 font-bold">
              <span className="text-black">Where </span>
              <span className="text-orange-500 bg-[#F2E2D9]">
                Luca's story began
              </span>
              <span className="text-orange-500 bg-[#F2E2D9]">.</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

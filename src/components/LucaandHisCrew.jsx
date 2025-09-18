export default function LucaAndHisCrew() {
  return (
    <div className="p-4 sm:p-8 bg-gray-100">
      <div className="flex flex-col lg:flex-row lg:pl-16 items-start gap-8">
        {/* Left side text */}
        <div className="flex-shrink-0 lg:mr-72 text-center lg:text-left">
          {/* Meet cloud */}
          <div className="bg-[url('/cloudmeet.png')] bg-contain bg-no-repeat bg-center px-3 sm:px-5 py-1.5 sm:py-2 mb-4 shadow-sm inline-block">
            <span className="text-xs sm:text-sm text-gray-600">Meet</span>
          </div>

          {/* Title + arrow inline */}
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="flex items-center justify-center lg:justify-start text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight gap-2 sm:gap-4">
              <span className="text-black">Luca</span>
              <span className="text-orange-500 bg-[#F2E2D9]">&</span>
              <img
                src="/illuarrow.png"
                alt="Decorative arrow"
                className="w-10 h-4 sm:w-14 sm:h-6 lg:w-20 lg:h-8 inline-block align-middle"
              />
            </h1>

            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight mt-2 lg:mt-4">
              <span className="text-orange-500 bg-[#F2E2D9]">his Crew</span>
              <span className="text-orange-500 bg-[#F2E2D9]">.</span>
            </h2>
          </div>
        </div>

        {/* Character cards */}
        <div className="flex gap-4 sm:gap-6 overflow-x-auto w-full lg:w-auto">
          {/* Luca */}
          <div className="flex-shrink-0">
            <div className="bg-cyan-400 border-4 border-dashed border-cyan-600 rounded-lg p-6 sm:p-8 w-36 sm:w-48 h-56 sm:h-72 flex items-center justify-center">
              <img src="/boy1.png" alt="Luca character" className="rounded-lg" />
            </div>
            <div className="mt-3 sm:mt-4 w-36 sm:w-48">
              <h3 className="font-bold text-lg sm:text-xl">Luca</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-tight">
                Visionary but flawed leader<br />
                learning balance.
              </p>
            </div>
          </div>

          {/* Ray */}
          <div className="flex-shrink-0">
            <div className="bg-cyan-400 border-4 border-dashed border-cyan-600 rounded-lg p-6 sm:p-8 w-36 sm:w-48 h-56 sm:h-72 flex items-center justify-center">
              <img src="/boy2.png" alt="Ray character" className="rounded-lg" />
            </div>
            <div className="mt-3 sm:mt-4 w-36 sm:w-48">
              <h3 className="font-bold text-lg sm:text-xl">Ray</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-tight">
                The wise mentor showing the<br />
                change curve.
              </p>
            </div>
          </div>

          {/* Vince */}
          <div className="flex-shrink-0">
            <div className="bg-cyan-400 border-4 border-dashed border-cyan-600 rounded-lg p-6 sm:p-8 w-36 sm:w-48 h-56 sm:h-72 flex items-center justify-center">
              <img src="/girl.png" alt="Vince character" className="rounded-lg" />
            </div>
            <div className="mt-3 sm:mt-4 w-36 sm:w-48">
              <h3 className="font-bold text-lg sm:text-xl">Vince</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-tight">
                The rock-solid architect who<br />
                challenges authority.
              </p>
            </div>
          </div>

          {/* Vi */}
          <div className="flex-shrink-0">
            <div className="bg-cyan-400 border-4 border-dashed border-cyan-600 rounded-lg p-6 sm:p-8 w-36 sm:w-48 h-56 sm:h-72 flex items-center justify-center">
              <img src="/girl.png" alt="Vi character" className="rounded-lg" />
            </div>
            <div className="mt-3 sm:mt-4 w-36 sm:w-48">
              <h3 className="font-bold text-lg sm:text-xl">Vi</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-tight">
                The change<br />
                cha...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

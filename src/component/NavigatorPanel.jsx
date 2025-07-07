import React, { useState } from "react";
import { RotateCcw, X } from "lucide-react";
import Archismlogo from "./Archismlogo";

const NavigatorPanel = () => {
  const [isOpen, setIsOpen] = useState(true); // state for panel
  const randomBg =
    "https://www.pkrestates.com/wp-content/uploads/2020/05/Little-India-Aerial-View.jpg";

  return (
    <div>
      <div
        className="h-screen w-full bg-cover bg-center relative"
        style={{ backgroundImage: `url(${randomBg})` }}
      >
        {/* Right Fixed Panel */}
        {isOpen && (
          <div
            className="fixed right-2 top-16 sm:top-5 
            w-[50%] xs:w-[42%] sm:w-[260px] 
            max-h-[calc(100vh-140px)]
            bg-black/20 text-white p-4 rounded-xl 
            backdrop-blur-md z-30 
            flex flex-col justify-between overflow-y-auto space-y-4"
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-2">
              <div className="text-lg font-semibold">Navigator</div>
              <button onClick={() => setIsOpen(false)}>
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Content */}
            <div className="space-y-4">
              {/* Bedroom Filter */}
              <div className="bg-black/40 p-4 rounded-lg">
                <div className="text-base sm:text-sm mb-2 font-medium">
                  Bedroom
                </div>
                <div className="flex gap-2 flex-wrap sm:flex-nowrap sm:justify-start">
                  {["4BR", "5BR"].map((br, i) => (
                    <div
                      key={i}
                      className="bg-white/25 px-6 py-3 sm:px-4 sm:py-2 rounded w-full sm:w-auto text-center hover:border-2 hover:border-orange-500 cursor-pointer text-base sm:text-sm"
                    >
                      {br}
                    </div>
                  ))}
                </div>
              </div>

              {/* Area Filter */}
              <div className="bg-black/40 p-3 rounded-lg">
                <div className="text-sm mb-2">Select Area</div>
                <div className="space-y-1">
                  {["220–290", "290–330", "330–390", "390–420"].map(
                    (area, i) => (
                      <div
                        key={i}
                        className="bg-white/25 px-3 py-1.5 rounded hover:border-2 hover:border-orange-500 cursor-pointer text-sm"
                      >
                        {area} sq.m
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Footer Buttons */}
            <div className="flex flex-col sm:flex-row justify-between pt-4 gap-2">
              <button className="w-full sm:w-1/2 border border-white px-3 py-2 rounded-lg text-sm flex items-center justify-center gap-1 bg-white/10 hover:border-orange-500">
                <RotateCcw className="w-4 h-4" />
                Reset
              </button>
              <button className="w-full sm:w-1/2 bg-orange-500 px-3 py-2 rounded-lg text-sm font-semibold hover:bg-orange-600">
                Available: 32
              </button>
            </div>
          </div>
        )}
      </div>
      <Archismlogo />
    </div>
  );
};

export default NavigatorPanel;

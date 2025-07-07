import { useEffect, useState } from "react";
import Sidebar from "./component/Sidebar";
import NavigatorPanel from "./component/NavigatorPanel";
import backgroundImage from "./assets/svg3.jpg";
import { Info } from "lucide-react";
import LocationPanel from "./component/LocationPanel";
import Virtualtour from "./component/Virtualtour";
import VillaDetailsPanel from "./component/VillaDetailsPanel";
import Gallary from "./component/Gallery";
import Archismlogo from "./component/Archismlogo";

function App() {
  const [activeTab, setActiveTab] = useState("Overview");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Detect screen size to set sidebar state initially
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setIsSidebarOpen(false); // mobile = sidebar closed
      } else {
        setIsSidebarOpen(true); // desktop = sidebar open
      }
    };

    handleResize(); // run on first render
    window.addEventListener("resize", handleResize); // update on resize

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <div className="relative h-screen w-screen overflow-hidden">
        {/* Background Image */}
        <img
          src={backgroundImage}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        <div className="relative z-10 flex h-full overflow-hidden">
          {/* Sidebar */}
          <Sidebar
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            isOpen={isSidebarOpen}
            toggleOpen={() => setIsSidebarOpen((prev) => !prev)}
          />

          {/* Main Content */}
          <div className="flex-1 relative">
            {/* Night Mode & Logo shown only on Overview */}
            {activeTab === "Overview" && (
              <>
                {/* Night Mode - Top Right */}
                <div className="absolute top-4 right-4 bg-black/30 backdrop-blur-sm text-white px-4 py-2 flex items-center gap-2 text-sm z-20 shadow-md rounded-lg">
                  <span>Night Mode</span>
                  <label className="inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-10 h-5 bg-gray-400 rounded-full peer peer-checked:bg-green-500 relative transition-colors">
                      <div className="absolute left-1 top-1 bg-white w-3 h-3 rounded-full transition-transform peer-checked:translate-x-5" />
                    </div>
                  </label>
                  <Info className="w-5 h-5 ml-2 text-white/80" />
                </div>
              </>
            )}

            {/* Tab Panels */}
            {activeTab === "Navigator" && <NavigatorPanel />}
            {activeTab === "Location" && <LocationPanel />}
            {activeTab === "Virtual Tour" && <Virtualtour />}
            {activeTab === "Gallery" && <Gallary />}
            {activeTab === "Cinematic Video" && <VillaDetailsPanel />}
          </div>
        </div>
      </div>
      <Archismlogo></Archismlogo>
    </div>
  );
}

export default App;

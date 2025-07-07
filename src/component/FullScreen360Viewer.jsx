import { useEffect, useState, useRef } from "react";

const totalFrames = 150;
const imageList = Array.from(
  { length: totalFrames },
  (_, i) => `/Camera_01/Cliffton_O1.${String(i).padStart(4, "0")}.png`
);

export default function FullScreen360Viewer() {
  const [index, setIndex] = useState(0);
  const isDragging = useRef(false);
  const lastX = useRef(0);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    lastX.current = e.clientX;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    const deltaX = e.clientX - lastX.current;
    if (Math.abs(deltaX) > 5) {
      setIndex(
        (prev) => (prev + (deltaX > 0 ? 1 : -1) + totalFrames) % totalFrames
      );
      lastX.current = e.clientX;
    }
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  useEffect(() => {
    // attach globally
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div
      // just a background layer
      className="absolute inset-0 bg-black flex items-center justify-center select-none cursor-ew-resize z-0"
    >
      <img
        src={imageList[index]}
        alt="360 View"
        className="w-full h-full object-cover"
      />
    </div>
  );
}

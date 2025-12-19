import { useEffect, useState, useRef } from "react";
import { video_link } from "../utils/Video_links";

export default function VideoHome() {
  const [index, setIndex] = useState(0);
  const videoRef = useRef(null);

  // Smooth fade transition whenever video index changes
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.classList.remove("fade-in");

    // Reflow → restart animation
    void video.offsetWidth;

    video.classList.add("fade-in");
  }, [index]);

  // Auto next video
  const handleVideoEnd = () => {
    setIndex((prev) => (prev + 1) % video_link.length);
  };

  return (
    <div className="
      relative 
      w-full 
      h-[60vh] 
      sm:h-[70vh] 
      md:h-[85vh] 
      lg:h-screen 
      overflow-hidden
    ">

      {/* Gorgeous gradient overlay for premium look */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/40 z-[2] pointer-events-none"></div>

      {/* Soft vignette at bottom */}
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-black/60 to-transparent z-[3] pointer-events-none"></div>

      {/* Video */}
      <video
        ref={videoRef}
        src={video_link[index]}
        autoPlay
        muted
        loop={false}
        playsInline
        onEnded={handleVideoEnd}
        className="
          absolute inset-0 
          w-full h-full 
          object-cover 
          fade-video
        "
      />
      
      {/* Animations */}
      <style>{`
        .fade-video {
          opacity: 0;
          transform: scale(1.05);
          transition: opacity 1.2s ease, transform 3s ease;
        }
        .fade-in {
          opacity: 1;
          transform: scale(1);
        }
      `}</style>
    </div>
  );
}

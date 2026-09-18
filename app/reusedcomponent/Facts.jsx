"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Play, X } from "lucide-react";

const facts = [
  {
    number: "9,632",
    title: "Happy Clients",
  },
  {
    number: "78",
    title: "Qualified Workers",
  },
  {
    number: "864",
    title: "Modular Kitchen",
  },
  {
    number: "473",
    title: "Local Partners",
  },
];

export default function Facts() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const videoRef = useRef(null);

  const openVideo = () => {
    setIsVideoOpen(true);
  };

  const closeVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }

    setIsVideoOpen(false);
  };

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeVideo();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <>
      <section className="facts-section">
        <div className="container">
   <div className="facts-container">
          {facts.map((fact, index) => (
            <div className="fact-item" key={index}>
              <h2>{fact.number}</h2>
              <p>{fact.title}</p>
            </div>
          ))}
        </div>

        {/* Video Thumbnail */}
        <div className="facts-video">
          <Image
            src="/images/vediobanner1.jpg"
            alt="Interior design"
            fill
            priority
            className="facts-video-image"
          />

          <button
            className="facts-play-button"
            onClick={openVideo}
            aria-label="Play interior design video"
          >
            <Play size={45} fill="white" />
          </button>
        </div>
        </div>
       
     
      </section>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="video-modal" onClick={closeVideo}>
          <div
            className="video-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="video-close"
              onClick={closeVideo}
              aria-label="Close video"
            >
              <X size={30} />
            </button>

            <video
              ref={videoRef}
              className="modal-video"
              controls
              autoPlay
              playsInline
            >
              <source
                src="/videos/interior-design.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </>
  );
}
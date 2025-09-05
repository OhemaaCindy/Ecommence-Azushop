// import React, { useState, useEffect } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const Slider: React.FC = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const data: string[] = [
//     "/slider-image2.png",
//     "/slider-camera.png",
//     "/slider-image3.png",
//   ];

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev === 0 ? data.length - 1 : prev - 1));
//   };

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1));
//   };

//   // Auto-slide functionality
//   useEffect(() => {
//     const autoSlide = setInterval(() => {
//       setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1));
//     }, 3000); // Change slide every 3 seconds

//     return () => clearInterval(autoSlide);
//   }, [data.length]);

//   // Keyboard navigation
//   useEffect(() => {
//     const handleKeyPress = (e: KeyboardEvent) => {
//       if (e.key === "ArrowLeft") {
//         prevSlide();
//       } else if (e.key === "ArrowRight") {
//         nextSlide();
//       }
//     };

//     window.addEventListener("keydown", handleKeyPress);
//     return () => window.removeEventListener("keydown", handleKeyPress);
//   }, []);

//   return (
//     <div className="relative w-full  min-h-screen overflow-y-scroll">
//       {/* Container */}
//       <div className="w-full">
//         <img
//           src={data[currentSlide]}
//           alt={`slide-${currentSlide}`}
//           className="w-full object-cover"
//         />
//       </div>

//       {/* Navigation Icons */}
//       <div className="absolute bottom-24 left-0 right-0 flex justify-center gap-3">
//         <button
//           onClick={prevSlide}
//           className="w-12 h-12 border border-gray-400 flex items-center justify-center cursor-pointer bg-white/70 hover:bg-white rounded"
//         >
//           <ChevronLeft className="w-6 h-6 text-gray-700" />
//         </button>
//         <button
//           onClick={nextSlide}
//           className="w-12 h-12 border border-gray-400 flex items-center justify-center cursor-pointer bg-white/70 hover:bg-white rounded"
//         >
//           <ChevronRight className="w-6 h-6 text-gray-700" />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Slider;

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Slider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Configurable duration (in milliseconds)
  const SLIDE_DURATION = 4000; // Change this value to adjust auto-slide timing
  const TRANSITION_DURATION = 500; // Animation duration

  const slides = [
    {
      image: "/slider-image2.png",
      title: "Next-Gen Mobility",
      subtitle:
        "Power, performance and style - experience the future of smartphones today.",
      buttonText: "Shop Now",
    },
    {
      image: "/slider-camera.png",
      title: "Capture Every Moment",
      subtitle:
        "Experience exceptional clarity and precision with our new high performance cameras.",
      buttonText: "Shop collection",
    },
    {
      image: "/slider-image3.png",
      title: "Power meets portability",
      subtitle:
        "Unmatched performance and sleek design - built for work and play.",
      buttonText: "Shop collection",
    },
  ];

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setTimeout(() => setIsTransitioning(false), TRANSITION_DURATION);
  };

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsTransitioning(false), TRANSITION_DURATION);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), TRANSITION_DURATION);
  };

  // Auto-slide functionality
  useEffect(() => {
    const autoSlide = setInterval(() => {
      if (!isTransitioning) {
        setIsTransitioning(true);
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        setTimeout(() => setIsTransitioning(false), TRANSITION_DURATION);
      }
    }, SLIDE_DURATION);

    return () => clearInterval(autoSlide);
  }, [slides.length, isTransitioning, SLIDE_DURATION, TRANSITION_DURATION]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        prevSlide();
      } else if (e.key === "ArrowRight") {
        nextSlide();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [isTransitioning]);

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Slides Container */}
      <div
        className="flex transition-transform duration-500 ease-in-out h-screen"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
          transitionDuration: `${TRANSITION_DURATION}ms`,
        }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="relative w-full h-full flex-shrink-0">
            <img
              src={slide.image}
              alt={`slide-${index}`}
              className="w-full h-full object-cover"
            />

            {/* Text Overlay */}
            <div className="absolute inset-0 flex items-center justify-start">
              <div className="ml-8 md:ml-16 lg:ml-24 max-w-lg">
                <h1
                  className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight transition-all duration-700 ${
                    index === currentSlide
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{
                    transitionDelay: index === currentSlide ? "200ms" : "0ms",
                  }}
                >
                  {slide.title}
                </h1>
                <p
                  className={`text-lg md:text-xl text-white/90 mb-8 transition-all duration-700 ${
                    index === currentSlide
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{
                    transitionDelay: index === currentSlide ? "400ms" : "0ms",
                  }}
                >
                  {slide.subtitle}
                </p>
                <button
                  className={`bg-white text-black px-6 py-3 rounded-md hover:bg-gray-100 transition-all duration-300 font-medium flex items-center gap-2 ${
                    index === currentSlide
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{
                    transitionDelay: index === currentSlide ? "600ms" : "0ms",
                  }}
                >
                  {slide.buttonText}
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Icons */}
      <div className="absolute bottom-24 left-0 right-0 flex justify-center gap-3">
        <button
          onClick={prevSlide}
          disabled={isTransitioning}
          className="w-12 h-12 border border-gray-400 flex items-center justify-center cursor-pointer bg-white/70 hover:bg-white rounded transition-all duration-200 disabled:opacity-50"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>
        <button
          onClick={nextSlide}
          disabled={isTransitioning}
          className="w-12 h-12 border border-gray-400 flex items-center justify-center cursor-pointer bg-white/70 hover:bg-white rounded transition-all duration-200 disabled:opacity-50"
        >
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white scale-110"
                : "bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-black/20">
        <div
          className="h-full bg-white transition-all ease-linear"
          style={{
            width: `${((currentSlide + 1) / slides.length) * 100}%`,
            transitionDuration: `${TRANSITION_DURATION}ms`,
          }}
        />
      </div>
    </div>
  );
};

export default Slider;

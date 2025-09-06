import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Slider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(1); // Start at 1 because of the cloned last slide at the start
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const SLIDE_DURATION = 4000; // Auto-slide time
  const TRANSITION_DURATION = 500; // Animation time

  const slides = [
    {
      image:
        "https://images.pexels.com/photos/33259412/pexels-photo-33259412.jpeg",
      title: "Glow & Bold",
      subtitle: "Curated looks for the fearless generation.",
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
      image:
        "https://images.pexels.com/photos/27815884/pexels-photo-27815884.jpeg",
      title: "Power meets portability",
      subtitle:
        "Designed for the Bold, Worn by You. Because Ordinary Isn’t Your Style",
      buttonText: "Shop collection",
    },
  ];

  // Clone first & last for smooth looping
  const extendedSlides = [
    slides[slides.length - 1], // last clone at the beginning
    ...slides,
    slides[0], // first clone at the end
  ];

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => prev - 1);
  };

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => prev + 1);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(index + 1); // offset because of clone
  };

  // Handle transition end (jump from clones back to real slides instantly)
  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    if (currentSlide === 0) {
      setCurrentSlide(slides.length); // Jump to last real slide
      if (containerRef.current) containerRef.current.style.transition = "none";
    } else if (currentSlide === slides.length + 1) {
      setCurrentSlide(1); // Jump to first real slide
      if (containerRef.current) containerRef.current.style.transition = "none";
    }
  };

  // Auto-slide
  useEffect(() => {
    const autoSlide = setInterval(() => {
      nextSlide();
    }, SLIDE_DURATION);
    return () => clearInterval(autoSlide);
  });

  // Reapply transition after resetting position
  useEffect(() => {
    if (containerRef.current) {
      requestAnimationFrame(() => {
        containerRef.current!.style.transition = `transform ${TRANSITION_DURATION}ms ease-in-out`;
      });
    }
  }, [currentSlide]);

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Slides Container */}
      <div
        ref={containerRef}
        className="flex h-screen"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
          transition: isTransitioning
            ? `transform ${TRANSITION_DURATION}ms ease-in-out`
            : "none",
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {extendedSlides.map((slide, index) => (
          <div key={index} className="relative w-full h-full flex-shrink-0">
            <img
              src={slide.image}
              alt={`slide-${index}`}
              className="w-full h-full object-cover"
            />
            {/* Overlay Text */}
            <div className="absolute inset-0 flex items-center justify-start bg-black/30">
              <div className="ml-8 md:ml-16 lg:ml-24 max-w-lg">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl text-white/90 mb-8">
                  {slide.subtitle}
                </p>
                <button className="bg-white text-black px-6 py-3 rounded-md hover:bg-gray-100 transition-all duration-300 font-medium flex items-center gap-2">
                  {slide.buttonText}
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="absolute bottom-24 left-0 right-0 flex justify-center gap-3">
        <button
          onClick={prevSlide}
          className="w-12 h-12 border border-gray-400 flex items-center justify-center cursor-pointer bg-white/70 hover:bg-white rounded"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>
        <button
          onClick={nextSlide}
          className="w-12 h-12 border border-gray-400 flex items-center justify-center cursor-pointer bg-white/70 hover:bg-white rounded"
        >
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index + 1 === currentSlide
                ? "bg-white scale-110"
                : "bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;

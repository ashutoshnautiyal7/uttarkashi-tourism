import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides = [
    {
      image: "/chardham-yatra.webp",
      title: "Explore the Himalayas",
      subtitle: "Most Reliable Trekking Community in India",
      description:
        "Catering 10,000+ Trekkers Every Year!\nCall our Trek Experts on 916396476118",
      buttonText: "Read More",
    },
    {
      image: "/jumbo-bag.webp",
      title: "TSS Jumbo Bag",
      subtitle: "Complete Rental Solution for Trekkers",
      description: "Get all your trekking gear in one comprehensive package",
      buttonText: "Read More",
    },
    {
      image: "/tss-banner.webp",
      title: "Spiritual Tours",
      subtitle: "Uttarakashi Winter Treks Packages.",
      description: "Experience the beauty of the Himalayas with our winter treks packages.",
      buttonText: "Read More",
    },
  ];

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setTimeout(() => setIsAnimating(false), 800);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setTimeout(() => setIsAnimating(false), 800);
    }
  };

  const goToSlide = (index) => {
    if (!isAnimating && index !== currentSlide) {
      setIsAnimating(true);
      setCurrentSlide(index);
      setTimeout(() => setIsAnimating(false), 800);
    }
  };

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[60vh] md:h-[80vh] lg:h-screen overflow-hidden">
      {/* Slide Images Container */}
      <div className="relative w-full h-full">
        <div
          className="flex w-full h-full transition-transform duration-800 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="min-w-full h-full relative">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              {/* Original overlay */}
              <div className="absolute inset-0 bg-black/10 bg-opacity-40"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-white bg-[#2a4b38]/80 hover:bg-[#2a4b38] rounded-full p-2 transition-all duration-300 backdrop-blur-sm cursor-pointer"
        disabled={isAnimating}
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white bg-[#2a4b38]/80 hover:bg-[#2a4b38] rounded-full p-2 transition-all duration-300 backdrop-blur-sm cursor-pointer"
        disabled={isAnimating}
      >
        <ChevronRight size={28} />
      </button>

      {/* Content Overlay */}
      <div className="absolute inset-0 z-10">
        <div
          className="flex w-full h-full transition-transform duration-800 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="min-w-full h-full flex items-center justify-center"
            >
              <div className="text-center text-white px-6 max-w-4xl mx-auto">
                <div className="flex flex-col items-center justify-center">
                  <h1 className="text-lg md:text-xl lg:text-2xl font-semibold mb-4 bg-[#1D3827]/80 px-4 py-2 rounded-full border border-white/30 uppercase tracking-wider">
                    {slide.title}
                  </h1>
                  <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
                    {slide.subtitle}
                  </h2>
                  <p className="text-base md:text-lg lg:text-xl mb-8 leading-relaxed max-w-3xl mx-auto whitespace-pre-line">
                    {slide.description}
                  </p>
                  <button className="bg-[#2a4b38] hover:bg-[#e1ed00] hover:text-[#1D3827] border border-white/50 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300">
                    {slide.buttonText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-[#e1ed00] scale-125"
                : "bg-white/50 hover:bg-white/80"
            }`}
            disabled={isAnimating}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
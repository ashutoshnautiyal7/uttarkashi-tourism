import React, { useEffect, useMemo, useState } from "react";

const reviews = [
  {
    name: "Aarav Sharma",
    trek: "Dayara Bugyal Trek",
    rating: 5,
    quote:
      "The Untamed Routes team made the Dayara Bugyal winter trek unforgettable. Clear communication, safe guides, and mesmerizing views from start to finish.",
  },
  {
    name: "Meera Joshi",
    trek: "Dayara Bugyal Trek",
    rating: 4,
    quote:
      "Loved the snow-covered meadows and the cozy camps. The crew handled the cold weather like pros and kept us comfortable throughout.",
  },
  {
    name: "Rohit Negi",
    trek: "Kyarkoti Trek",
    rating: 5,
    quote:
      "Kyarkoti was magical. Excellent trail planning, delicious food, and the guides knew every inch of the terrain. Already planning my next trek with them.",
  },
  {
    name: "Neha Kapoor",
    trek: "Kyarkoti Trek",
    rating: 4,
    quote:
      "We were a group of first-time trekkers and felt supported every step of the way. The winter vistas were worth every climb!",
  },
  {
    name: "Siddharth Chauhan",
    trek: "Gulabi Kantha Trek",
    rating: 5,
    quote:
      "Gulabi Kantha’s sunrise was breathtaking. Untamed Routes balanced adventure and safety perfectly—highly recommended for winter trekking.",
  },
  {
    name: "Priya Verma",
    trek: "Gulabi Kantha Trek",
    rating: 4,
    quote:
      "Great logistics and friendly guides. The itinerary allowed everyone to acclimatize, making the summit push smooth and enjoyable.",
  },
];

const StarRating = ({ count }) => {
  return (
    <div className="flex items-center gap-1 text-[#e1ed00]" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, index) => (
        <svg
          key={index}
          className={`h-4 w-4 md:h-5 md:w-5 ${
            index < count ? "fill-current" : "fill-transparent stroke-current"
          }`}
          viewBox="0 0 20 20"
          role="presentation"
        >
          <path
            strokeWidth={index < count ? 0 : 1.5}
            d="M10 2.5l2.31 4.68 5.16.75-3.73 3.64.88 5.14L10 14.9l-4.62 2.43.88-5.14-3.73-3.64 5.16-.75L10 2.5z"
          />
        </svg>
      ))}
    </div>
  );
};

const Reviews = () => {
  const [itemsPerSlide, setItemsPerSlide] = useState(1);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const updateItemsPerSlide = () => {
      if (typeof window === "undefined") return;
      const width = window.innerWidth;
      if (width >= 1280) {
        setItemsPerSlide(3);
      } else if (width >= 768) {
        setItemsPerSlide(2);
      } else {
        setItemsPerSlide(1);
      }
    };

    updateItemsPerSlide();
    window.addEventListener("resize", updateItemsPerSlide);
    return () => window.removeEventListener("resize", updateItemsPerSlide);
  }, []);

  useEffect(() => {
    setCurrentSlide(0);
  }, [itemsPerSlide]);

  const slides = useMemo(() => {
    const chunks = [];
    for (let i = 0; i < reviews.length; i += itemsPerSlide) {
      chunks.push(reviews.slice(i, i + itemsPerSlide));
    }
    return chunks;
  }, [itemsPerSlide]);

  const totalSlides = slides.length;

  const goToPrev = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  const goToNext = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, totalSlides - 1));
  };

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white via-white to-[#f5f8f6]">
      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        <div className="flex flex-col items-center text-center mb-10 md:mb-14">
          <span className="text-xs md:text-sm uppercase tracking-[0.3em] text-[#1D3827]/60">
            Trekker Stories
          </span>
          <h3 className="mt-3 text-2xl md:text-3xl lg:text-4xl font-bold text-[#112318] uppercase tracking-wide">
            What Our Trekkers Say
          </h3>
          <div className="mt-4 h-[3px] w-32 bg-[#e1ed00]"></div>
          <p className="mt-5 max-w-3xl text-sm md:text-base text-[#112318]/70">
            Hear from adventurers who joined Untamed Routes on winter expeditions
            across Dayara Bugyal, Kyarkoti, and Gulabi Kantha.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, slideIndex) => (
                <div key={`slide-${slideIndex}`} className="min-w-full px-1">
                  <div
                    className={`grid gap-6 ${
                      itemsPerSlide > 1 ? "md:grid-cols-2" : ""
                    } ${itemsPerSlide > 2 ? "xl:grid-cols-3" : ""}`}
                  >
                    {slide.map(({ name, trek, rating, quote }) => (
                      <article
                        key={`${name}-${trek}`}
                        className="flex h-full flex-col justify-between rounded-2xl border border-[#112318]/15 bg-[#112318] p-6 text-white shadow-lg backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl"
                      >
                        <div>
                          <div className="flex items-center justify-between">
                            <h4 className="text-lg font-semibold">{name}</h4>
                            <StarRating count={rating} />
                          </div>
                          <p className="mt-2 text-xs font-medium uppercase tracking-wide text-[#e1ed00]/90">
                            {trek}
                          </p>
                          <p className="mt-4 text-sm leading-relaxed text-white/90">
                            “{quote}”
                          </p>
                        </div>
                        <div className="mt-6 flex items-center gap-2 text-xs uppercase tracking-widest text-white/50">
                          <span className="h-[1px] w-10 bg-white/30"></span>
                          <span>Verified Trekker</span>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={goToPrev}
            className="absolute left-0 top-1/2 hidden -translate-y-1/2 -translate-x-full rounded-full border border-[#112318]/20 bg-white/90 p-3 text-[#112318] shadow-md transition hover:bg-white hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#e1ed00] md:flex items-center justify-center"
            disabled={currentSlide === 0}
            aria-label="Previous reviews"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          <button
            type="button"
            onClick={goToNext}
            className="absolute right-0 top-1/2 hidden -translate-y-1/2 translate-x-full rounded-full border border-[#112318]/20 bg-white/90 p-3 text-[#112318] shadow-md transition hover:bg-white hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#e1ed00] md:flex items-center justify-center"
            disabled={currentSlide === totalSlides - 1}
            aria-label="Next reviews"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={`dot-${index}`}
              onClick={() => setCurrentSlide(index)}
              className={`h-2.5 w-8 rounded-full transition ${
                currentSlide === index
                  ? "bg-[#e1ed00]"
                  : "bg-[#112318]/20 hover:bg-[#112318]/40"
              }`}
              aria-label={`Go to slide ${index + 1}`}
              aria-pressed={currentSlide === index}
              type="button"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;


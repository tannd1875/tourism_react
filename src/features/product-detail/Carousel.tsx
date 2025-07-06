import { useState, useEffect, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Carousel = ({ images = [] }: { images?: string[] }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [slides, setSlides] = useState<Array<{ id: number; url: string }>>([]);

  useEffect(() => {
    if (images.length > 0) {
      const slidesArr = images.map((url, index) => ({
        id: index + 1,
        url,
      }));
      setSlides(slidesArr);
    } else {
      setSlides([]);
    }
    setCurrentSlide(0);
  }, [images]);

  const totalSlides = slides.length;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) =>
      totalSlides === 0 ? 0 : (prev + 1) % totalSlides
    );
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) =>
      totalSlides === 0 ? 0 : (prev - 1 + totalSlides) % totalSlides
    );
  }, [totalSlides]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(nextSlide, 3000);
      return () => clearInterval(interval);
    }
  }, [isPaused, nextSlide]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) nextSlide();
    if (isRightSwipe) prevSlide();
  };

  return (
    <div className="flex items-center justify-center p-4 w-2/3">
      <div className="w-full max-w-4xl">
        <div
          className="relative overflow-hidden rounded-2xl shadow-2xl"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide) => (
              <div
                key={slide.id}
                className={`min-w-full h-96 flex justify-center items-center`}
              >
                <img src={slide.url} className="object-cover w-full h-full" />
              </div>
            ))}
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-slate/30 backdrop-blur-md rounded-full p-3 text-white transition-all duration-300 hover:scale-110 group"
          >
            <FontAwesomeIcon
              icon={faChevronLeft}
              className="w-6 h-6 transition-transform"
            />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full p-3 text-white transition-all duration-300 hover:scale-110 group"
          >
            <FontAwesomeIcon
              icon={faChevronRight}
              className="w-6 h-6 transition-transform"
            />
          </button>
        </div>

        <div className="flex justify-center t mt-6 space-x-6 overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`h-10 aspect-square overflow-hidden 
                ${
                  index === currentSlide
                    ? "bg-white scale-150 shadow-lg"
                    : "bg-white/40 hover:bg-white/60"
                }`}
              onClick={() => goToSlide(index)}
            >
              <img
                src={slide.url}
                alt="..."
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;

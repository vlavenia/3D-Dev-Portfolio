import { useEffect, useState } from "react";
import { slides } from "../constants";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageOpen, setIsImageOpen] = useState(false);
  const activeSlide = slides[currentSlide];
  const images = activeSlide.images || [activeSlide.img];
  const currentImage = images[currentImageIndex];

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [currentSlide]);

  const prevImage = (e) => {
    e?.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextImage = (e) => {
    e?.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="grid lg:grid-cols-[1.2fr_1.8fr] gap-8 items-start">
      <div className="space-y-4">
        {slides.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <button
              key={slide.id}
              onClick={() => setCurrentSlide(index)}
              className={`w-full text-left rounded-3xl border px-6 py-5 transition-all duration-300 ${
                isActive
                  ? "border-white bg-white/10 shadow-[0_20px_80px_rgba(255,255,255,0.06)]"
                  : "border-slate-700 bg-slate-950/60 hover:border-slate-500"
              }`}
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">
                    Project {index + 1}
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white">
                    {slide.title}
                  </p>
                </div>
                <div
                  className={`w-10 h-10 rounded-full flex-center ${isActive ? "bg-cyan-500" : "bg-slate-800"}`}
                >
                  <span className="text-sm font-semibold text-white">
                    {index + 1}
                  </span>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <div className="rounded-[3rem] border border-white/10 bg-slate-950/80 p-8 shadow-[0_40px_180px_rgba(15,23,42,0.5)]">
        <div className="flex flex-col gap-6">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">
              My project
            </p>
            <h3 className="text-3xl lg:text-4xl font-semibold text-white">
              {activeSlide.title}
            </h3>
            <p className="max-w-2xl text-sm leading-7 text-slate-300">
              {activeSlide.description}
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-1">
            <div className="relative group h-[28rem] overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950 shadow-[0_20px_70px_rgba(0,0,0,0.25)]">
              <button
                type="button"
                onClick={() => setIsImageOpen(true)}
                className="absolute inset-0 z-0"
              />
              <img
                src={currentImage}
                alt={`${activeSlide.title} preview`}
                className="h-full w-full object-cover object-center transition duration-300 group-hover:scale-105"
              />
              <button
                type="button"
                onClick={prevImage}
                className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/20 bg-black/30 px-3 py-2 text-white transition hover:bg-black/50"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={nextImage}
                className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/20 bg-black/30 px-3 py-2 text-white transition hover:bg-black/50"
              >
                ›
              </button>
            </div>
            <div className="flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => setIsImageOpen(true)}
                className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-500/20"
              >
                <span>View Full Image</span>
                <span className="text-base">↗</span>
              </button>
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-slate-400">
                <span>{currentImageIndex + 1}</span>
                <span>/</span>
                <span>{images.length}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isImageOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 py-6"
          onClick={() => setIsImageOpen(false)}
        >
          <div className="relative flex max-h-[85vh] w-full max-w-5xl items-center justify-center rounded-[2rem] border border-white/10 bg-slate-950/90 p-3 shadow-2xl">
            <button
              type="button"
              onClick={() => setIsImageOpen(false)}
              className="absolute right-4 top-4 z-10 rounded-full bg-white/10 px-3 py-2 text-sm font-semibold text-white backdrop-blur hover:bg-white/20"
            >
              Close
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/20 bg-black/30 px-3 py-2 text-white transition hover:bg-black/50"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/20 bg-black/30 px-3 py-2 text-white transition hover:bg-black/50"
            >
              ›
            </button>
            <img
              src={currentImage}
              alt={`${activeSlide.title} full preview`}
              className="max-h-[78vh] w-full rounded-[1.5rem] object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Carousel;

import React, { useState, useEffect, useRef } from "react";


const getResponsiveSize = () => {
  if (typeof window === "undefined") return sizes.xs;
  const width = window.innerWidth;
  if (width < 640) return sizes.xs;
  if (width < 768) return sizes.sm;
  if (width < 1024) return sizes.md;
  if (width < 1280) return sizes.lg;
  return sizes.xl;
};

const sizes = {
  xs: { w: 250, h: 200 },
  sm: { w: 400, h: 400 },
  md: { w: 500, h: 400 },
  lg: { w: 600, h: 450 },
  xl: { w: 700, h: 500 },
};



const ProjectImagesCarousel = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const [size, setSize] = useState(getResponsiveSize());
  const intervalRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setSize(getResponsiveSize());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(intervalRef.current);
  }, [images.length]);

  const next = () => setCurrent((prev) => (prev + 1) % images.length);
  const prev = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);


  return (
    <div className="w-full flex flex-col items-center">
      <div
        className="relative flex items-center justify-center overflow-hidden rounded-xl bg-black/10"
        style={{ width: size.w, height: size.h }}
      >
        {images.map((img, idx) => (
          <img
            key={img + idx}
            src={img}
            alt={`slide-${idx}`}
            className={`absolute top-0 left-0 w-full h-full object-cover rounded-xl transition-all duration-500 ${
              idx === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            style={{ boxShadow: idx === current ? "0 4px 32px 0 rgba(0,0,0,0.18)" : "none" }}
          />
        ))}
        {/* Botones */}
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-primary/80 text-clearIceFullLight rounded-full w-8 h-8 flex items-center justify-center shadow hover:bg-primary/90 transition"
        >
          <span className="text-xl">&#8592;</span>
        </button>
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary/80 text-clearIceFullLight rounded-full w-8 h-8 flex items-center justify-center shadow hover:bg-primary/90 transition"
        >
          <span className="text-xl">&#8594;</span>
        </button>
      </div>
      {/* Indicadores */}
      <div className="flex gap-2 mt-2">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`block w-2 h-2 rounded-full ${idx === current ? "bg-primary" : "bg-gray-300"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectImagesCarousel; 
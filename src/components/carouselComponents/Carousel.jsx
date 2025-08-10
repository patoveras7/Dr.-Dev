"use client";
import React, { useState, useEffect } from "react";
import { images } from "./index";

const Carousel = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="flex w-full h-[250px] lg:h-[600px] xl:h-[750px] items-center">
      
      <div className="flex items-center h-full w-full relative">
        {images.map((image, index) => {
          const isActive = index === currentIndex;
          const isLeft =
            index === (currentIndex - 1 + images.length) % images.length;
          const isRight =
            index === (currentIndex + 1) % images.length;

          return (
            <div
              key={index}
              className={`flex flex-col gap-[20px] ${
                isActive
                  ? "z-10 w-full h-fit shadow-lg shadow-gray900"
                  : isLeft || isRight
                  ? "hidden"
                  : "hidden" 
              }`}
            >
              <img
                  src={image}
                  alt={`Slide ${index}`}
                  className="w-full h-auto max-h-full object-contain aspect-video"
              />

            </div>
          );
        })}
      </div>

      <button
        onClick={nextSlide}
        className="z-20 hidden md:block absolute right-1 xl:right-3 h-fit w-fit"
      >
        <img
          src="https://i.pinimg.com/236x/0e/44/1f/0e441fdbb002d7e7f60a69bd43dd95fe.jpg"
          alt="rightButton"
          className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] rotate-180 rounded-[7px] opacity-[50%] hover:opacity-[100%] hover:border-solid hover:border-black hover:border-[2px]"
        />
      </button>
    </div>
  );
};

export default Carousel;
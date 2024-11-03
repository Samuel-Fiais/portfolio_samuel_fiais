import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { Button } from "./Button";

export const Carousel = ({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}) => {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));

  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval, next]);

  return (
    <div className="overflow-hidden relative w-3/4">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {React.Children.map(slides, (slide) => (
          <div className="flex-shrink-0 w-full flex items-center justify-center p-24">
            {slide}
          </div>
        ))}
      </div>
      <div className="absolute bottom-4 right-0 left-0 flex justify-center">
        <div className="flex items-center justify-between gap-2 w-full md:w-96">
          <Button onClick={prev}>Back</Button>
          <div className="flex gap-2 justify-center items-center">
            {React.Children.map(slides, (_, i) => (
              <div
                key={i}
                onClick={() => setCurr(i)}
                className={`w-3 h-3 rounded-full border-2 border-black cursor-pointer ${
                  curr === i ? "p-2 bg-pink-300" : "bg-yellow-300"
                }`}
              />
            ))}
          </div>
          <Button onClick={next}>Next</Button>
        </div>
      </div>
    </div>
  );
};

Carousel.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  autoSlide: PropTypes.bool,
  autoSlideInterval: PropTypes.number,
};

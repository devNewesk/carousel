import React, { useState } from "react";
import { Data } from "./data";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
function Carousel() {
  const [current, setCurrent] = useState(0);
  const prevSlide = () => {
    current !== 0 ? setCurrent(current - 1) : setCurrent(Data.length - 1);
  };
  const nextSlide = () => {
    current !== Data.length - 1 ? setCurrent(current + 1) : setCurrent(0);
  };
  const gotoSlide = (index) => {
    setCurrent(index);
  };
  return (
    <div className="flex justify-center mx-auto w-[900px] h-[600px] relative">
      {Data.map((image, index) => {
        return (
          <>
            <div>
              {" "}
              <img
                src={image.url}
                key={index}
                className={index === current ? "visible  opacity-85" : "hidden"}
              />{" "}
            </div>
          </>
        );
      })}
      <AiOutlineArrowLeft
        onClick={prevSlide}
        className="absolute top-[50%] left-20 text-3xl font-extrabold cursor-pointer text-gray-400 "
      />
      <AiOutlineArrowRight
        onClick={nextSlide}
        className="absolute top-[50%] right-20 text-3xl font-extrabold cursor-pointer text-gray-400 "
      />
      <div className="flex absolute bottom-5">
        {Data.map((_, index) => {
          return (
            <>
              <p
                onClick={() => gotoSlide(index)}
                className={
                  index === current
                    ? "text-gray-800 text-5xl font-extrabold cursor-pointer"
                    : "text-gray-400 text-5xl font-extrabold cursor-pointer"
                }
              >
                .
              </p>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Carousel;

import React from "react";
import Carousel from "react-multi-carousel";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import model from "../assets/model.avif";
import { Link } from "react-router-dom";

const CommonProductSlider = ({ title }) => {
  return (
    <div className="container m-auto secPadding flex flex-col gap-8 ">
      <h1 className="text-lg font-semibold">{title}</h1>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode
        className=""
        containerClass="container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite={false}
        itemClass="mx-1"
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 5,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 3,
            partialVisibilityGutter: 30,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {[...Array(10)].map((_, i) => (
          <Link to="/product/1">
            <div
              key={i}
              className="rounded-2xl bg-white flex flex-col justify-center items-center gap-1"
            >
              <div className="image p-2 w-full rounded-lg">
                <img
                  src={model}
                  alt="category"
                  className="rounded-lg w-full h-[270px] object-cover"
                />
              </div>
              <span className="truncate w-full text-center text-xs text-gray-500">
                Mens Wear , T-shirt
              </span>
              <span className="truncate w-full text-center text-sm font-semibold">
                Black Men Casual Belt
              </span>
              <div className="flex text-yellow-500">
                {[...Array(5)].map((_, i) => {
                  return 2 > i ? <AiFillStar /> : <AiOutlineStar />;
                })}
              </div>
              <span className="truncate w-full text-center text-base font-bold">
                $ 20.00
              </span>
              <div className="flex flex-wrap gap-1 pt-2 pb-4 px-4 justify-center">
                {[...Array(5)].map((_, i) => {
                  return (
                    <div
                      className="colors w-[26px] h-[26px] rounded-full"
                      style={{ backgroundColor: "red" }}
                    ></div>
                  );
                })}
              </div>
            </div>
          </Link>
        ))}
      </Carousel>
    </div>
  );
};

export default CommonProductSlider;

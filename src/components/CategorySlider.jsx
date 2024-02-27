import React from "react";
import Carousel from "react-multi-carousel";
import cat from "../assets/cat.webp";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

const CategorySlider = () => {
  return (
    <div className="container m-auto secPadding flex flex-col gap-8 ">
      <h1 className="text-lg font-semibold">Explore your target categories</h1>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay
        customLeftArrow={
          <div className="absolute top-1/2 -left-[0px] transform -translate-y-1/2 bg-gray-800/50 p-2 rounded-full flex justify-center items-center">
            <MdArrowBackIosNew className="text-xl text-white cursor-pointer" />
          </div>
        }
        customRightArrow={
          <div className="absolute top-1/2 -right-[0px] transform -translate-y-1/2 bg-gray-800/50 p-2 rounded-full flex justify-center items-center">
            <MdArrowForwardIos className="text-xl text-white cursor-pointer" />
          </div>
        }
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass="px-1 bg-transparent"
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
            items: 6,
            partialVisibilityGutter: 40,
          },
          mobilebig: {
            breakpoint: {
              max: 767,
              min: 465,
            },
            items: 3,
            partialVisibilityGutter: 0,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 768,
            },
            items: 4,
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
          <div
            key={i}
            className="rounded-full flex flex-col justify-center items-center gap-4"
          >
            <div className="image bg-white p-2 w-fit rounded-full">
              <img
                src={cat}
                alt="category"
                className="rounded-full w-[100px] h-[100px]"
              />
            </div>
            <span className="truncate w-full text-center text-sm">
              Mens Wear
            </span>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CategorySlider;

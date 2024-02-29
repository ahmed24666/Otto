import React from "react";
import Carousel from "react-multi-carousel";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import model from "../assets/model.avif";
import { Link } from "react-router-dom";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { IoBagOutline, IoHeartOutline } from "react-icons/io5";

const CommonProductSlider = ({ title }) => {
  return (
    <div className="container m-auto secPadding flex flex-col gap-8 ">
      <h1 className="text-lg font-semibold">{title}</h1>
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
              min: 1440,
            },
            items: 5,
            partialVisibilityGutter: 0,
          },
          mobile: {
            breakpoint: {
              max: 767,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 0,
          },
          mobilebig: {
            breakpoint: {
              max: 767,
              min: 473,
            },
            items: 2,
            partialVisibilityGutter: 0,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 768,
            },
            items: 3,
            partialVisibilityGutter: 0,
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
              className="rounded-2xl bg-white flex flex-col justify-between items-center gap-1 max-md:h-[400px] relative"
            >
              
              <div className="love absolute bg-white shadow-lg rounded-full flex justify-center items-center top-5 right-5 w-8 h-8">
                <button className="">
                  <IoHeartOutline size={18} />
                </button>
              </div>
              <div className="love absolute bg-white shadow-lg rounded-full flex justify-center items-center top-16 right-5 w-8 h-8">
                <button className="">
                  <IoBagOutline size={18} />
                </button>
              </div>
              <div className="love absolute bg-red-600 shadow-lg rounded-lg text-white flex justify-center items-center top-4 left-5 px-2 text-sm p-1">
                -15%
              </div>
              <div className="image p-2 w-full rounded-lg">
                <img
                  src={model}
                  alt="category"
                  className="rounded-lg w-full aspect-[1/1] max-md:h-[242px] object-cover"
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

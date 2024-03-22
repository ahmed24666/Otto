import React, { useEffect } from "react";
import Carousel from "react-multi-carousel";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import model from "../assets/model.avif";
import { Link } from "react-router-dom";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { IoHeartOutline } from "react-icons/io5";

const CommonProductSlider = ({ title, arrayOfProducts=[...Array(10)] }) => {
  
  return (
    <div className="container m-auto secPadding flex flex-col gap-8 ">
      <h1 className="text-lg font-semibold">{title}</h1>
      <Carousel
        additionalTransfrom={0}
        arrows
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
              max: 473,
              min: 0,
            },
            items: 2,
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
        
        {arrayOfProducts?.map((item, i) => (
            <Link to={`/product/${item?.name_du}`}>
              <div
                key={i}
                className="rounded-2xl bg-white flex flex-col justify-between items-center gap-1 max-md:h-[400px] max-[473px]:h-auto relative"
              >
                <div className="love absolute bg-white shadow-lg rounded-full flex justify-center items-center top-5 right-5 w-8 h-8">
                  <button className="">
                    <IoHeartOutline size={18} />
                  </button>
                </div>
                {item?.sale !== 0 && (
                  <div className="love absolute bg-indigo-600 shadow-lg rounded-lg text-white flex justify-center items-center top-4 left-5 px-2 text-sm p-1">
                    -{item?.sale.Value}%
                  </div>
                )}
                <div className="image p-2 w-full rounded-lg">
                  <img
                    src={model}
                    alt="category"
                    className="rounded-lg w-full aspect-[1/1] max-md:h-[242px] object-cover max-[473px]:h-[200px]"
                  />
                </div>
                <span className="truncate w-full text-center text-xs text-gray-500">
                  {item?.category.name_du}
                </span>
                <span className="truncate w-full text-center text-sm font-semibold max-[473px]:px-3">
                  {item?.name_du}
                </span>
                {/* <div className="flex text-yellow-500">
                {[...Array(5)].map((_, i) => {
                  return 2 > i ? <AiFillStar /> : <AiOutlineStar />;
                })}
              </div> */}
                <span className="truncate w-full text-center text-base font-bold flex items-center gap-3 justify-center">
                  {item?.sale && item?.sale !== 0 ? (
                    <>
                      ${" "}
                      {(
                        item?.price -
                        (item?.price * item?.sale.Value) / 100
                      ).toFixed(2)}
                      <span className="line-through text-gray-400 font-semibold">
                        $ {item?.price}
                      </span>
                    </>
                  ) : (
                    <> $ {item?.price}</>
                  )}
                </span>
                {item?.colors && (
                  <div className="flex flex-wrap gap-1 pt-2 pb-4 px-4 justify-center">
                    {item?.colors?.map((color, i) => {
                      return (
                        <div
                          className="colors w-[26px] h-[26px] rounded-full"
                          style={{
                            backgroundColor: color,
                          }}
                        ></div>
                      );
                    })}
                  </div>
                )}
              </div>
            </Link>
          ))}
      </Carousel>
    </div>
  );
};

export default CommonProductSlider;

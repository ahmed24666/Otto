import React from "react";
import Carousel from "react-multi-carousel";

const CategorySlider = () => {
  return (
    <div className="container m-auto secPadding flex flex-col gap-8 ">
      <h1 className="text-lg font-semibold">Explore your target categories</h1>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
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
            items: 7,
            partialVisibilityGutter: 40,
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
              min: 464,
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
                src="https://via.placeholder.com/150"
                alt="category"
                className="rounded-full w-[80px] h-[80px]"
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

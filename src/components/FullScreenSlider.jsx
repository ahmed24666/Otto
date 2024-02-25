import React from "react";
import Carousel from "react-multi-carousel";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import img1 from "../assets/001_2021_17_moeb_rb_beachhouse_style_thementeaser_querformat_139130.avif";
import img2 from "../assets/mpp360_103214_122813.avif";
import img3 from "../assets/mpp360_108168_129492.avif";
const imgs = [img1, img2, img3];

const FullScreenSlider = () => {
    return (
        <div className="container m-auto secPadding">
            <Carousel
                additionalTransfrom={0}
                arrows
                autoPlay
                autoPlaySpeed={5000}
                customLeftArrow={<div className="absolute top-1/2 left-2 transform -translate-y-1/2"><MdArrowBackIosNew className="text-4xl text-white cursor-pointer"/></div>}
                customRightArrow={<div className="absolute top-1/2 right-2 transform -translate-y-1/2"><MdArrowForwardIos className="text-4xl text-white cursor-pointer"/></div>}
                customTransition="all 0.5s linear"
                centerMode={false}
                className="rounded-2xl overflow-hidden"
                containerClass="container"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite={true}
                itemClass=""
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
                        items: 1,
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
                        items: 1,
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
                {imgs.map((_, i) => (
                    <div
                        key={i}
                        className=" bg-white flex flex-col justify-center items-center relative h-[550px] "
                    >
                        <div className="image w-full   h-full">
                            <img
                                src={imgs[i]}
                                alt="product"
                                className="w-full h-full object-cover "
                            />
                        </div>
                        <div className=" w-full h-full flex flex-col justify-center items-start gap-5 p-20 absolute bg-gray-900/20">
                            <span className="text-2xl font-bold text-red-500">Summer Collection</span>
                            <h1 className="text-5xl font-bold text-white">Beach House Style</h1>
                            <p className="text-xl w-1/2 text-white">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                                nec dui at ex fermentum tincidunt. Fusce tincidunt, nunc sit amet
                                aliquam.
                            </p>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default FullScreenSlider;

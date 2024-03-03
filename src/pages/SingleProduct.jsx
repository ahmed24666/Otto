import React, { useEffect, useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsMailboxFlag } from "react-icons/bs";
import { TbMailboxOff } from "react-icons/tb";
import { TbMailbox } from "react-icons/tb";

import ReactImageGallery from "react-image-gallery";
import { IoBagOutline } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";
import sp1 from "../assets/sp1.avif";
import sp2 from "../assets/sp2.avif";
import sp3 from "../assets/sp3.avif";
import sp4 from "../assets/sp4.avif";
import sp5 from "../assets/sp5.avif";
import CommonProductSlider from "../components/CommonProductSlider";
import { Link } from "react-router-dom";

const images = [
  {
    original: sp1,
    thumbnail: sp1,
    originalClass: "h-[600px] max-md:h-[350px] object-contain w-full",
  },
  {
    original: sp2,
    thumbnail: sp2,
    originalClass: "h-[600px] max-md:h-[350px] object-contain w-full",
  },
  {
    original: sp3,
    thumbnail: sp3,
    originalClass: "h-[600px] max-md:h-[350px] object-contain w-full",
  },
  {
    original: sp4,
    thumbnail: sp4,
    originalClass: "h-[600px] max-md:h-[350px] object-contain w-full",
  },
  {
    original: sp5,
    thumbnail: sp5,
    originalClass: "h-[600px] max-md:h-[350px] object-contain w-full",
  },
];
const sizes = [
  "S (44/46)",
  "M (48/50)",
  "L (52/54)",
  "XL (56/58)",
  "XXL (60/62)",
  "3XL (64/66)",
  "4XL (68/70)",
  "5XL (72/74)",
];
const SingleProduct = ({ note }) => {
  const [selectedColor, setselectedColor] = useState(0);
  const [selectedSize, setselectedSize] = useState(0);
  const [selectedRating, setselectedRating] = useState(0);
  useEffect(() => {
    console.log(selectedRating);
  }, [selectedRating]);

  const endDate = `9-25-2024 23:30:00`;

  const [d, setd] = useState(0);
  const [h, seth] = useState(0);
  const [m, setm] = useState(0);
  const [s, sets] = useState(0);
  const [_, setdistance] = useState(0);
  useEffect(() => {
    let x = setInterval(() => {
      let now = new Date(endDate).getTime();
      let countDown = new Date().getTime();
      let distance = now - countDown;
      setdistance(distance);
      let d = Math.floor(distance / (1000 * 60 * 60 * 24));
      let h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let s = Math.floor((distance % (1000 * 60)) / 1000);
      setd(d);
      seth(h);
      setm(m);
      sets(s);
      if (distance < 0) {
        clearInterval(x);
      }
    });

    return () => clearInterval(x);
  }, []);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [window.location.pathname]);

  return (
    <div className="container m-auto">
      <div className="title bg-white p-6 my-1 flex flex-col gap-4">
        <span className="text-gray-600">Mens Wear , T-shirt</span>
        <h1 className="text-2xl font-semibold max-md:text-lg">
          Jack & Jones Langarmshirt mit Printaufdruck
        </h1>
        <div className="flex text-yellow-500 text-2xl max-md:text-lg items-center gap-1">
          {[...Array(5)].map((_, i) => {
            return 2 > i ? <AiFillStar /> : <AiOutlineStar />;
          })}
          (3)
        </div>
      </div>
      <div className="flex gap-1 my-1 max-md:flex-col">
        <div className="flex-[4]  flex flex-col">
          <div className="w-full bg-white p-4">
            <ReactImageGallery
              items={images}
              lazyLoad
              thumbnailPosition={isMobile ? "bottom" : "left"}
              infinite
              showNav={false}
              showFullscreenButton={false}
              showPlayButton={false}
              isRTL={false}
              autoPlay
              slideOnThumbnailOver
            />
          </div>
          <div className="w-full bg-white p-4 max-md:space-y-3 mt-1 space-y-6">
            <h4 className="text-lg text-black font-semibold">Description :</h4>
            {[...Array(3)].map((_, i) => {
              return (
                <p className="text-gray-500 max-lg:text-sm">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Saepe nemo dolorem nesciunt voluptate voluptas nulla, quia
                  laudantium, error iste asperiores quis magnam a in
                  consequuntur enim dolore maxime explicabo tenetur nobis,
                  eveniet natus expedita! Quod amet totam, eaque facilis commodi
                  accusantium voluptas, a fugit nemo, autem cupiditate ipsa
                  ipsum voluptate.
                </p>
              );
            })}
          </div>
          <div className="w-full bg-white p-4 mt-1 space-y-4 max-md:hidden">
            <h4 className="text-lg text-black font-semibold">
              Rate This Product :
            </h4>
            <div className="rating rating-lg rating-half">
              <input type="radio" name="rating-10" className="rating-hidden" />
              {[...Array(5)].map((_, i) => {
                return (
                  <>
                    <input
                      type="radio"
                      name="rating-10"
                      className="bg-yellow-500 mask mask-star-2 mask-half-1 !w-4 !max-sm:w-3"
                      onClick={() => setselectedRating(i + 1 - 0.5)}
                    />
                    <input
                      type="radio"
                      name="rating-10"
                      className="bg-yellow-500 mask mask-star-2 mask-half-2 !w-4 !max-sm:w-3"
                      onClick={() => setselectedRating(i + 1)}
                    />
                  </>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex-[3]">
          <div className="bg-white p-4 space-y-6 max-md:space-y-3">
            <div className="flex flex-col gap-4">
              <p className="font-semibold text-base text-black">Color :</p>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => {
                  return (
                    <div
                      className={`${
                        i === selectedColor ? "border border-black" : ""
                      } rounded-full p-1 flex justify-center items-center`}
                      onClick={() => setselectedColor(i)}
                    >
                      <div
                        className="w-8 h-8 max-md:w-6 max-md:h-6 rounded-full cursor-pointer"
                        style={{ backgroundColor: "gray" }}
                      ></div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-semibold text-base text-black">Sizes :</p>
              <div className="flex gap-1 flex-wrap gap-3">
                {sizes.map((size, i) => {
                  return (
                    <div
                      className={`${
                        i === selectedSize
                          ? "border border-black"
                          : "border border-gray-300"
                      } rounded-lg p-3 flex justify-center items-center cursor-pointer max-md:text-sm max-md:p-2`}
                      onClick={() => setselectedSize(i)}
                    >
                      {size}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <TbMailbox className="text-2xl text-black" />
              <p className="text-red-600 max-md:text-sm">
                Available - in 2-3 working days
              </p>
            </div>
          </div>
          <div className="bg-white p-4 space-y-6 max-md:space-y-3 mt-1">
            <div className="flex flex-col gap-4">
              <p className="font-semibold text-base text-black">Price :</p>
              <div className="flex items-center gap-4">
                <div className="px-2 py-1 rounded-lg bg-red-600 w-fit text-white max-md:text-sm">
                  -15%
                </div>
                <span className=" text-lg text-gray-500 line-through max-md:text-base">
                  $ 21.99
                </span>
              </div>
              <div className="flex flex-col gap-4">
                <span className="text-red-600 text-3xl text-black font-semibold max-md:text-xl">
                  $ 18.99
                </span>
                <span className="text-gray-500 max-md:text-sm">
                  incl. VAT plus shipping costs
                </span>
              </div>
            </div>
          </div>
          {true && (
            <div className="bg-white p-4 mt-1 space-y-6 flex flex-col items-center">
              <h4 className="text-lg text-black font-semibold">CountDown :</h4>
              <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                  <span className="countdown font-mono text-5xl max-md:text-xl text-center">
                    {d}
                  </span>
                  days
                </div>
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                  <span className="countdown font-mono text-5xl max-md:text-xl ">
                    <span style={{ "--value": h, margin: "auto" }}></span>
                  </span>
                  hours
                </div>
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                  <span className="countdown font-mono text-5xl max-md:text-xl ">
                    <span style={{ "--value": m, margin: "auto" }}></span>
                  </span>
                  min
                </div>
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                  <span className="countdown font-mono text-5xl max-md:text-xl ">
                    <span style={{ "--value": s, margin: "auto" }}></span>
                  </span>
                  sec
                </div>
              </div>
            </div>
          )}
          <div className="bg-white p-4 space-y-4 mt-1">
            <Link to="/cart">
              <button className="relative bg-red-600 text-white p-3 w-full flex items-center justify-center rounded-lg">
                Add to Cart
                <span className="absolute top-1/2 left-2 text-2xl translate -translate-y-1/2 text-white rounded-full p-1">
                  <IoBagOutline />
                </span>
              </button>
            </Link>
            <button
              className="relative text-black p-3 w-full flex items-center justify-center rounded-lg"
              style={{ backgroundColor: "rgb(236, 236, 236)" }}
            >
              Bookmark Product
              <span className="absolute top-1/2 left-2 text-2xl translate -translate-y-1/2 text-black rounded-full p-1">
                <IoHeartOutline />
              </span>
            </button>
            <div className="flex gap-4 items-center">
              <TbMailboxOff className="text-2xl text-black" />
              <p className="text-red-600">30 days free returns</p>
            </div>
          </div>
          <div className="bg-white p-4 mt-1 space-y-6 max-md:space-y-3 ">
            <h4 className="text-lg text-black font-semibold">Note :</h4>
            {true && (
              <p className="text-gray-500 max-md:text-sm">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe
                nemo dolorem nesciunt voluptate voluptas nulla, quia laudantium,
                error iste asperiores quis magnam a in consequuntur enim dolore
                maxime explicabo tenetur nobis, eveniet natus expedita! Quod
                amet totam, eaque facilis commodi accusantium voluptas, a fugit
                nemo, autem cupiditate ipsa ipsum voluptate.
              </p>
            )}
          </div>
          <div className="w-full bg-white p-4 mt-1 space-y-4 hidden max-md:block">
            <h4 className="text-lg text-black font-semibold">
              Rate This Product :
            </h4>
            <div className="rating rating-lg rating-half">
              <input type="radio" name="rating-10" className="rating-hidden" />
              {[...Array(5)].map((_, i) => {
                return (
                  <>
                    <input
                      type="radio"
                      name="rating-10"
                      className="bg-yellow-500 mask mask-star-2 mask-half-1 !w-4 !max-sm:w-3"
                      onClick={() => setselectedRating(i + 1 - 0.5)}
                    />
                    <input
                      type="radio"
                      name="rating-10"
                      className="bg-yellow-500 mask mask-star-2 mask-half-2 !w-4 !max-sm:w-3"
                      onClick={() => setselectedRating(i + 1)}
                    />
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <CommonProductSlider title={"Recommendations for you"} />
    </div>
  );
};

export default SingleProduct;

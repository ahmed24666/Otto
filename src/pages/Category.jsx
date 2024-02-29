import React, { useState } from "react";
import { RangeSlider } from "react-double-range-slider";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import model from "../assets/model.avif";
import CategoryBanar from "../assets/CategoryBannar.jpeg";
import { IoBagOutline } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";
import { PiSlidersDuotone } from "react-icons/pi";
import { IoMdClose } from "react-icons/io";

const Category = () => {
  const [selectedSize, setselectedSize] = useState(0);
  const [price, setPrice] = useState({
    minIndex: 0,
    maxIndex: 0,
  });
  const [from, setfrom] = useState(0);
  const [to, setto] = useState(0);
  const [selectedColor, setselectedColor] = useState(0);
  const [selectedRating, setselectedRating] = useState(0);

  const mensCategories = [
    {
      id: 1,
      name: "T-shirt",
      subCategories: [
        {
          id: 1,
          name: "Round Neck",
        },
        {
          id: 2,
          name: "V Neck",
        },
      ],
    },
    {
      id: 2,
      name: "Shirt",
      subCategories: [
        {
          id: 1,
          name: "Formal",
        },
        {
          id: 2,
          name: "Casual",
        },
      ],
    },
    {
      id: 3,
      name: "Pant",
      subCategories: [
        {
          id: 1,
          name: "Formal",
        },
        {
          id: 2,
          name: "Casual",
        },
      ],
    },
    {
      id: 4,
      name: "Shoe",
      subCategories: [
        {
          id: 1,
          name: "Formal",
        },
        {
          id: 2,
          name: "Casual",
        },
      ],
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

  
  const Category = ({mobile}) => {
    return (
      <div className={`${mobile?"":"flex-[2] bg-white rounded-lg max-md:hidden"} p-5 space-y-5 `}>
          <div className="Categories space-y-5">
            <h2 className="font-semibold">Categories</h2>
            <div className="join join-vertical w-full">
              {mensCategories.map((category) => {
                return (
                  <div
                    key={category.id}
                    className="collapse collapse-arrow join-item border border-base-300"
                  >
                    <input
                      type="radio"
                      name="my-accordion-4"
                      className="min-h-0"
                    />
                    <div className="collapse-title font-medium min-h-0 p-[0.8rem]">
                      {category.name}
                    </div>
                    <div className="collapse-content">
                      <ul className="list-none p-0 m-0">
                        {category.subCategories.map((subCategory) => {
                          return (
                            <li key={subCategory.id}>{subCategory.name}</li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="Size space-y-5">
            <h2 className="font-semibold">Size</h2>
            <div className="flex gap-1 flex-wrap gap-3">
              {sizes.map((size, i) => {
                return (
                  <div
                    className={`${
                      i === selectedSize
                        ? "border border-black"
                        : "border border-gray-300"
                    } rounded-lg p-3 flex justify-center items-center cursor-pointer max-lg:text-xs max-lg:p-2`}
                    onClick={() => setselectedSize(i)}
                  >
                    {size}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="price space-y-5">
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="my-accordion-4" className="min-h-0" />
              <div className="collapse-title font-medium min-h-0 p-[0.8rem]">
                Price
              </div>
              <div className="collapse-content">
                <RangeSlider
                  value={{ min: 0, max: 10 }}
                  onChange={(e) => {
                    setPrice({
                      minIndex: e.minIndex,
                      maxIndex: e.maxIndex,
                    });
                  }}
                  tooltipPosition="under"
                  tooltipVisibility="always"
                />
              </div>
            </div>
          </div>
          <div className="color space-y-5">
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="my-accordion-4" className="min-h-0" />
              <div className="collapse-title font-medium min-h-0 p-[0.8rem]">
                Color
              </div>
              <div className="collapse-content">
                <div className="flex items-center gap-[1px] flex-wrap">
                  {["Red", "Blue", "Green", "Yellow", "Black", "White"].map(
                    (color, i) => {
                      return (
                        <div
                          className={`${
                            i === selectedColor ? "border border-black" : ""
                          } rounded-full p-1 flex justify-center items-center cursor-pointer`}
                          onClick={() => setselectedColor(i)}
                        >
                          <div className="rounded-full cursor-pointer bg-gray-200 p-2 flex justify-between items-center gap-1 text-xs">
                            <div
                              className="rounded-full w-5 h-5"
                              style={{ backgroundColor: color }}
                            ></div>
                            <span className="max-lg:hidden">{color}</span>
                          </div>
                        </div>
                      );
                    }
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="stars space-y-5">
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="my-accordion-4" className="min-h-0" />
              <div className="collapse-title font-medium min-h-0 p-[0.8rem]">
                Rating
              </div>
              <div className="collapse-content">
                <div className="rating rating-lg rating-half">
                  <input
                    type="radio"
                    name="rating-10"
                    className="rating-hidden"
                  />
                  {[...Array(5)].map((_, i) => {
                    return (
                      <>
                        <input
                          type="radio"
                          name="rating-10"
                          className="bg-yellow-500 mask mask-star-2 mask-half-1 !w-3 !max-sm:w-2"
                          onClick={() => setselectedRating(i + 1 - 0.5)}
                        />
                        <input
                          type="radio"
                          name="rating-10"
                          className="bg-yellow-500 mask mask-star-2 mask-half-2 !w-3 !max-sm:w-2"
                          onClick={() => setselectedRating(i + 1)}
                        />
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="collapse-title font-medium min-h-0 p-[0.8rem] flex gap-1 items-center w-fit">
              Discounted Items
              <span className="text-gray-300 font-normal text-sm max-lg:hidden">
                (201)
              </span>
            </div>
            <label class="switch">
              <input type="checkbox" />
              <span class="slider"></span>
            </label>
          </div>
        </div>
    )
  }
  
  return (
    <div className="container m-auto">
      <div className="top bg-white my-1 flex max-sm:flex-col max-sm:gap-3 justify-between items-center px-5 py-2 rounded-lg">
        <div>
          <div className="text-sm breadcrumbs">
            <ul className="text-gray-500">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Men's Fashion</a>
              </li>
            </ul>
          </div>
          <h1 className="text-2xl font-bold">Men's Fashion</h1>
        </div>
        <div className="join">
          <button className="join-item btn px-3">«</button>
          <button className="join-item btn px-3">Page 22</button>
          <button className="join-item btn px-3">»</button>
        </div>
      </div>
      <div className="flex gap-1 mb-1">
      <Category />
        <div className="flex-[6] ">
          <div className="banar m-3 rounded-lg overflow-hidden">
            <img
              src={CategoryBanar}
              alt="banar"
              className="w-full h-[250px] object-contain max-md:object-cover"
            />
          </div>
          <div className="mt-1 bg-white rounded-lg p-3">
            <div className="space-y-5">
              <div className="flex items-start justify-between gap-4 max-sm:gap-2">
                <div className="flex items-center gap-2 flex-wrap">
                  {[...Array(7)].map((_, i) => {
                    return (
                      <div className="selected flex gap-2 bg-gray-200 w-fit items-center px-2 py-1 rounded-xl">
                        <span className="text-gray-700 text-xs">Showing</span>
                        <span className="text-gray-900 cursor-pointer font-semibold ">
                          x
                        </span>
                      </div>
                    );
                  })}
                  <div className="selected flex gap-2 bg-red-100 w-fit items-center px-2 py-1 rounded-xl cursor-pointer">
                    <span className="text-gray-700 text-xs">Clear</span>
                  </div>
                </div>
                <select className="select select-bordered max-w-xs">
                  <option disabled selected>
                    Sort By
                  </option>
                  <option>Han Solo</option>
                  <option>Greedo</option>
                </select>
              </div>
              <div className="flex items-center justify-between">
                <div className=" p-1">
                  <span className="text-gray-500">Showing</span>
                  <span className="text-gray-500">1-12 of 1000</span>
                </div>
                <label
                  htmlFor="my-drawer"
                  className="btn drawer-button bg-red-500 hidden max-md:flex"
                >
                  <PiSlidersDuotone size={24} color="white" />
                </label>
              </div>
            </div>
          </div>

          <div className="drawer z-[9]">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-side">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay "
              ></label>
              <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content relative">
                <label htmlFor="my-drawer" className="close absolute top-5 right-5">
                  <IoMdClose size={24} color="black" />
                </label>
                <Category mobile />
                
              </ul>
            </div>
          </div>

          <div className="products flex flex-wrap justify-evenly gap-2 my-3">
            {[...Array(15)].map((_, i) => (
              <Link to="/product/1">
                <div
                  key={i}
                  className="rounded-lg bg-white flex flex-col justify-between items-center gap-1 max-md:h-[400px] w-[340px] max-lg:w-[260px] p-[0px] relative"
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
                  <span className="truncate w-full text-center text-base font-bold flex items-center gap-3 justify-center">
                    $ 20.00{" "}
                    <span className="line-through text-gray-400 font-semibold">
                      $ 24.00{" "}
                    </span>
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
          </div>

          <div className="mt-1 bg-white rounded-lg p-3">
            <div className="space-y-5">
              <div className="flex items-center justify-between gap-4">
                <div className=" p-1">
                  <span className="text-gray-500">Showing</span>
                  <span className="text-gray-500">1-12 of 1000</span>
                </div>
                <div className="join">
                  <button className="join-item btn px-3">«</button>
                  <button className="join-item btn px-3">Page 22</button>
                  <button className="join-item btn px-3">»</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;

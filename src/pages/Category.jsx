import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import model from "../assets/model.avif";
import CategoryBanar from "../assets/CategoryBannar.jpeg";
import { IoBagOutline } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";
import { PiSlidersDuotone } from "react-icons/pi";
import { IoMdClose } from "react-icons/io";
import CategoryComp from "../components/CategoryComp";

const Category = React.memo(() => {
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
      <CategoryComp />
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
                  <div className="selected flex gap-2 bg-indigo-100 w-fit items-center px-2 py-1 rounded-xl cursor-pointer">
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
                  className="btn drawer-button bg-indigo-500 hidden max-md:flex"
                >
                  <PiSlidersDuotone size={24} color="white" />
                </label>
              </div>
            </div>
          </div>

          <div className="drawer z-[999999999]">
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
                <CategoryComp mobile />
                
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
                  <div className="love absolute bg-indigo-600 shadow-lg rounded-lg text-white flex justify-center items-center top-4 left-5 px-2 text-sm p-1">
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
                          className="colors w-[26px] h-[26px] rounded-full bg-indigo-600"
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
});

export default Category;

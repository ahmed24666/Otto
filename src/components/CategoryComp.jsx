import React, { useEffect, useState } from "react";
import { RangeSlider } from "react-double-range-slider";

const CategoryComp = React.memo(({mobile,setPrice,setselectedColor,selectedColor,setselectedRating,setselectedSize,selectedSize ,price}) => {
    // const [selectedSize, setselectedSize] = useState(0);
    // const [price, setPrice] = useState({
    //   minIndex: 0,
    //   maxIndex: 0,
    // });

    // const [selectedColor, setselectedColor] = useState(0);
    // const [selectedRating, setselectedRating] = useState(0);
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
      useEffect(() => {
        console.info(price)
      }, [price])
      
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
                        ? "border border-[#5137ff]"
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
              <input type="checkbox" name="my-accordion-price" className="min-h-0" />
              <div className="collapse-title font-medium min-h-0 p-[0.8rem]">
                Price
              </div>
              <div className="collapse-content">
                
                  <RangeSlider
                    value={{ min: 0, max: 3000 }}
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
              <input type="checkbox" name="my-accordion-color" className="min-h-0" />
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
              <input type="checkbox" name="my-accordion-stars" className="min-h-0" />
              <div className="collapse-title font-medium min-h-0 p-[0.8rem]">
                Rating
              </div>
              <div className="collapse-content">
                <div className="rating rating-lg rating-half">
                  <input
                    type="checkbox"
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
  })
  export default CategoryComp;
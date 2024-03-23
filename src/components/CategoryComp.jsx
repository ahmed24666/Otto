import React, { useCallback, useEffect, useState, useRef } from "react";
import { RangeSlider } from "react-double-range-slider";
import { Link } from "react-router-dom";

const CategoryComp = React.memo(
  ({
    mobile,
    setPrice,
    setselectedColor,
    selectedColor,
    setselectedRating,
    setselectedSize,
    selectedSize,
    price,
    setDiscountProducts,
    discountProducts,
    categories,
    setcategories,
    filters,
  }) => {
    useEffect(() => {
      const requestOptions = {
        method: "GET",
        redirect: "follow",
      };

      fetch("https://siedra-shop.com/api/categories/", requestOptions)
        .then((response) => response.json())
        .then((result) => setcategories(result.data.categories))
        .catch((error) => console.error(error));
    }, []);

    useEffect(() => {
      console.log(filters);
    }, [filters]);

    // slider 
    const [minVal, setMinVal] = useState(0);
    const [maxVal, setMaxVal] = useState(100);
    const minValRef = useRef(filters?.min_price);
    const maxValRef = useRef(filters?.max_price);
    const range = useRef(null);
    useEffect(() => {
      setMaxVal(filters?.max_price)
      setMinVal(filters?.min_price)    
      setPrice({ minIndex: filters?.min_price, maxIndex: filters?.max_price });  
    }, [filters?.min_price ,filters?.max_price])
    
  
    // Convert to percentage
    const getPercent = useCallback(
      (value) => Math.round(((value - filters?.min_price) / (filters?.max_price - filters?.min_price)) * 100),
      [filters?.min_price, filters?.max_price]
    );
  
    // Set width of the range to decrease from the left side
    useEffect(() => {
      if(price.minIndex ===filters?.min_price && price.maxIndex === filters?.max_price){
        if (range.current) {
          range.current.style.left = `0%`;
          range.current.style.width = `100%`;
        }
      }else{
        const minPercent = getPercent(minVal);
        const maxPercent = getPercent(maxValRef.current);
    
        if (range.current) {
          range.current.style.left = `${minPercent}%`;
          range.current.style.width = `${maxPercent - minPercent}%`;
        }
      }
    }, [minVal, getPercent,maxVal]);
  
    // Set width of the range to decrease from the right side
    useEffect(() => {
      if(price.minIndex ===filters?.min_price && price.maxIndex === filters?.max_price){
        if (range.current) {
          range.current.style.right = `0%`;
          range.current.style.width = `100%`;
        }
      }else{
      const minPercent = getPercent(minVal);
      const maxPercent = getPercent(maxValRef.current);
  
      if (range.current) {
        range.current.style.right = `${maxPercent}%`;
        range.current.style.width = `${maxPercent - minPercent}% `;
      }}
    }, [maxVal, getPercent,minVal]);
  
    // Get min and max values when their state changes
    const onChange =({ min, max })=> setPrice({ minIndex: min, maxIndex: max })
    useEffect(() => {
      onChange({ min: minVal, max: maxVal });
    }, [minVal, maxVal]);
    // slider 

    return (
      <div
        className={`${
          mobile ? "" : "flex-[2] bg-white rounded-lg max-md:hidden"
        } p-5 space-y-5 `}
      >
        <div className="Categories space-y-5">
          <h2 className="font-semibold">Categories</h2>
          <div className="join join-vertical w-full">
            {categories.map((category) => {
              return (
                <div
                  key={category.id}
                  className="collapse collapse-arrow join-item border border-base-300"
                >
                  <input
                    type="radio"
                    name="my-accordion-4"
                    className="min-h-0 w-[40%] ml-auto"
                  />
                  {category.subs.length > 0 ? (
                    <div className="collapse-title font-medium min-h-0 p-[0.8rem]">
                      <Link to={`/category/${category.name_du}`}>
                        {category.name_du}
                      </Link>
                    </div>
                  ) : (
                    <div className="collapse-title collapse-title-without-arrow font-medium min-h-0 p-[0.8rem]">
                      <Link to={`/category/${category.name_du}`}>
                        {category.name_du}
                      </Link>
                    </div>
                  )}
                  {category.subs.length > 0 && (
                    <div className="collapse-content bg-gray-100 !p-0">
                      <ul className="list-none p-0 m-0 !px-5 !py-3">
                        {category.subs.map((subCategory) => {
                          return (
                            <Link to={`/sub-category/${subCategory.name_du}`}>
                              <li
                                key={subCategory.id}
                                className="py-1 cursor-pointer whitespace-nowrap"
                              >
                                - {subCategory.name_du}
                              </li>
                            </Link>
                          );
                        })}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        {filters?.sizes?.length > 0 && (
          <div className="Size space-y-5">
            <h2 className="font-semibold">Size</h2>
            <div className="flex gap-1 flex-wrap gap-3">
              {filters?.sizes?.map((size) => {
                return (
                  <div
                    className={`${
                      size === selectedSize
                        ? "border border-[#5137ff]"
                        : "border border-gray-300"
                    } rounded-lg p-3 flex justify-center items-center cursor-pointer max-lg:text-xs max-lg:p-2`}
                    onClick={() => setselectedSize(size)}
                  >
                    {size}
                  </div>
                );
              })}
            </div>
          </div>
        )}
        <div className="price space-y-5">
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input
              type="checkbox"
              name="my-accordion-price"
              className="min-h-0"
            />
            <div className="collapse-title font-medium min-h-0 p-[0.8rem]">
              Price
            </div>
            <div className="collapse-content">
              {filters?.min_price && filters?.max_price && (
                <div className="h-[70px] flex items-center">
                <input
                  type="range"
                  min={filters?.min_price}
                  max={filters?.max_price}
                  value={minVal}
                  onChange={(event) => {
                    const value = Math.min(Number(event.target.value), maxVal - 1);
                    setMinVal(value);
                    minValRef.current = value;
                  }}
                  className="thumb thumb--left"
                  style={{ zIndex: minVal > filters?.max_price - 100 && "5" }}
                />
                <input
                  type="range"
                  min={filters?.min_price}
                  max={filters?.max_price}
                  value={maxVal}
                  onChange={(event) => {
                    const value = Math.max(Number(event.target.value), minVal + 1);
                    setMaxVal(value);
                    maxValRef.current = value;
                  }}
                  className="thumb thumb--right"
                />
          
                <div className="sliderDual">
                  <div className="slider__track" />
                  <div ref={range} className="slider__range" />
                  <div className="slider__left-value">{minVal}</div>
                  <div className="slider__right-value">{maxVal}</div>
                </div>
              </div>
              )}
            </div>
          </div>
        </div>
        {filters?.colors?.length > 0 && (
          <div className="color space-y-5">
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input
                type="checkbox"
                name="my-accordion-color"
                className="min-h-0"
              />
              <div className="collapse-title font-medium min-h-0 p-[0.8rem]">
                Color
              </div>
              <div className="collapse-content">
                <div className="flex items-center gap-[1px] flex-wrap">
                  {filters?.colors?.map((color) => {
                    return (
                      <div
                        className={`${
                          color === selectedColor ? "border border-black" : ""
                        } rounded-full p-1 flex justify-center items-center cursor-pointer`}
                        onClick={() => setselectedColor(color)}
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
                  })}
                </div>
              </div>
            </div>
          </div>
        )}
        {/* <div className="stars space-y-5">
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input
              type="checkbox"
              name="my-accordion-stars"
              className="min-h-0"
            />
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
        </div> */}
        <div className="flex items-center justify-between">
          <div className="collapse-title font-medium min-h-0 p-[0.8rem] flex gap-1 items-center w-fit">
            Discounted Items
          </div>
          <label class="switch">
            <input
              type="checkbox"
              onChange={(e) => setDiscountProducts(e.target.checked)}
            />
            <span class="slider"></span>
          </label>
        </div>
      </div>
    );
  }
);
export default CategoryComp;

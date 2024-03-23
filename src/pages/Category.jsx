import React, { useEffect, useRef, useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Link, useLocation, useParams } from "react-router-dom";
import model from "../assets/model.avif";
import CategoryBanar from "../assets/CategoryBannar.jpeg";
import { IoHeartOutline } from "react-icons/io5";
import { PiSlidersDuotone } from "react-icons/pi";
import { IoMdClose } from "react-icons/io";
import CategoryComp from "../components/CategoryComp";
import _debounce from 'lodash/debounce';

const requestOptions = {
  method: "GET",
  redirect: "follow",
};

const Category = React.memo(
  ({ allProductsPage, categoryPage, subCategoryPage, search }) => {
    const [allProducts, setallProducts] = useState([]);
    const [categories, setcategories] = useState([]);
    const [offset, setOffset] = useState(0);
    const [hideShowMore, sethideShowMore] = useState(false);
    const [coverPhoto, setcoverPhoto] = useState("");
    useEffect(() => {
      console.warn(allProducts)

    }, [allProducts])
    

    const location = useLocation().pathname.split("/").pop();
    //filter
    const [filters, setfilters] = useState({});
    const [selectedSize, setselectedSize] = useState(0);
    const [price, setPrice] = useState({ minIndex: 0, maxIndex: 0 });
    const [selectedColor, setselectedColor] = useState(0);
    const [selectedRating, setselectedRating] = useState(0);
    const [sort, setSort] = useState(null);
    const [discountProducts, setDiscountProducts] = useState(false);
    //filter
    const [searchValue, setSearchValue] = useState(null);

    // GET ALL PRODUCTS FROM API
    function fetchData() {
      if (allProductsPage || searchValue === "") {
        // &min_price=750&max_price=800&color=%23b71f1f&size=Impedit exercitatio&sort=high
        setOffset(0);
        fetch(
          `https://siedra-shop.com/api/products/${
            discountProducts ? "sales" : ""
          }?offset=0&limit=12&min_price=${price.minIndex}${
            price.maxIndex > 0 ? `&max_price=${price.maxIndex}` : ""
          }${sort ? `&sort=${sort}` : ""}${selectedSize?`&size=${selectedSize}`:""}`,
          requestOptions
        )
          .then((response) => response.json())
          .then((result) => {
            setallProducts(result.data.products);
            setfilters(result.data.filters);
            if (result.data.products.length < 12) {
              sethideShowMore(true);
            } else {
              sethideShowMore(false);
            }
          })
          .catch((error) => console.error(error));
      } else if (categoryPage) {
        setOffset(0);
  
        fetch(
          `https://siedra-shop.com/api/products/${
            discountProducts
              ? `sales?category=${location.replace(/%20/g, "-")}`
              : `category/${location.replace(/%20/g, "-")}`
          }?offset=0&limit=12&min_price=${price.minIndex}${
            price.maxIndex > 0 ? `&max_price=${price.maxIndex}` : ""
          }${sort ? `&sort=${sort}` : ""}${selectedSize?`&size=${selectedSize}`:""}`,
          requestOptions
        )
          .then((response) => response.json())
          .then((result) => {
            if (result.status === false) {
              setallProducts([]);
            } else {
              setallProducts(result.data.products);
              setfilters(result.data.filters);
              if (result.data.products.length < 12) {
                sethideShowMore(true);
              } else {
                sethideShowMore(false);
              }
            }
          })
          .catch((error) => console.error(error));
      } else if (subCategoryPage) {
        setOffset(0);
        fetch(
          `https://siedra-shop.com/api/products/${
            discountProducts
              ? `sales?subcategory=${location.replace(/%20/g, "-")}`
              : `subcategory/${location.replace(/%20/g, "-")}`
          }?offset=0&limit=12&min_price=${price.minIndex}${
            price.maxIndex > 0 ? `&max_price=${price.maxIndex}` : ""
          }${sort ? `&sort=${sort}` : ""}${selectedSize?`&size=${selectedSize}`:""}`,
          requestOptions
        )
          .then((response) => response.json())
          .then((result) => {
            if (result.status === false) {
              setallProducts([]);
            } else {
              setallProducts(result.data.products);
              setfilters(result.data.filters);
              if (result.data.products.length < 12) {
                sethideShowMore(true);
              } else {
                sethideShowMore(false);
              }
            }
          })
          .catch((error) => console.error(error));
      } else if (search && searchValue !== null) {
        setOffset(0);
        fetch(
          `https://siedra-shop.com/api/products/search?name=${searchValue}&offset=0&limit=12`,
          requestOptions
        )
          .then((response) => response.json())
          .then((result) => {
            if (result.status === false) {
              setallProducts([]);
            } else {
              setallProducts(result.data.products);
              setfilters(result.data.filters);
              if (result.data.products.length < 12) {
                sethideShowMore(true);
              } else {
                sethideShowMore(false);
              }
            }
          })
          .catch((error) => console.error(error));
      }
    }
    useEffect(() => {
      const debouncedFetch = _debounce(fetchData, 300);
      debouncedFetch();
      return () => {
        debouncedFetch.cancel();
      };
    }, [price, sort, location, searchValue, discountProducts ,selectedColor ,selectedSize]);

    const handleShowMore = () => {
      const changedOffset = offset + 12;
      setOffset(offset + 12);
      if (allProductsPage || searchValue === "") {
        fetch(
          `https://siedra-shop.com/api/products/?offset=${changedOffset}&limit=12&min_price=${
            price.minIndex
          }${price.maxIndex > 0 ? `&max_price=${price.maxIndex}` : ""}${
            sort ? `&sort=${sort}` : ""
          }${selectedSize?`&size=${selectedSize}`:""}`,
          requestOptions
        )
          .then((response) => response.json())
          .then((result) => {
            setallProducts([...allProducts, ...result.data.products]);
            if (result.data.products.length < 12) sethideShowMore(true);
          })
          .catch((error) => console.error(error));
      } else if (categoryPage) {
        fetch(
          `https://siedra-shop.com/api/products/category/${location.replace(
            /%20/g,
            "-"
          )}?offset=${changedOffset}&limit=12&min_price=${price.minIndex}${
            price.maxIndex > 0 ? `&max_price=${price.maxIndex}` : ""
          }${sort ? `&sort=${sort}` : ""}${selectedSize?`&size=${selectedSize}`:""}`,
          requestOptions
        )
          .then((response) => response.json())
          .then((result) => {
            setallProducts([...allProducts, ...result.data.products]);
            if (result.data.products.length < 12) sethideShowMore(true);
          })
          .catch((error) => console.error(error));
      } else if (subCategoryPage) {
        fetch(
          `https://siedra-shop.com/api/products/subcategory/${location.replace(
            /%20/g,
            "-"
          )}?offset=${changedOffset}&limit=12&min_price=${price.minIndex}${
            price.maxIndex > 0 ? `&max_price=${price.maxIndex}` : ""
          }${sort ? `&sort=${sort}` : ""}${selectedSize?`&size=${selectedSize}`:""}`,
          requestOptions
        )
          .then((response) => response.json())
          .then((result) => {
            setallProducts([...allProducts, ...result.data.products]);
            if (result.data.products.length < 12) sethideShowMore(true);
          })
          .catch((error) => console.error(error));
      } else if (search && searchValue !== null) {
        fetch(
          `https://siedra-shop.com/api/products/search?name=${searchValue}&offset=${changedOffset}&limit=12`,
          requestOptions
        )
          .then((response) => response.json())
          .then((result) => {
            setallProducts([...allProducts, ...result.data.products]);
            if (result.data.products.length < 12) sethideShowMore(true);
          })
          .catch((error) => console.error(error));
      }
    };

    // clicking Outside
    const currentElementRef = useRef(null);
    const inputElementRef = useRef(null);

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (
          currentElementRef.current &&
          !currentElementRef.current.contains(event.target) &&
          inputElementRef.current &&
          !inputElementRef.current.contains(event.target)
        ) {
          setSearchValue("");
        }
      };

      document.addEventListener("click", handleClickOutside);

      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
    }, []);
    useEffect(() => {
      if (search) {
        setSearchValue(location);
      }
    }, [location]);

    // clicking Outside
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
      if (categoryPage) {
        setcoverPhoto(
          categories?.find(
            (item) => item.name_du === location.replace(/%20/g, " ")
          )?.Cover_Image_link
        );
      } else if (subCategoryPage) {
        for (let i = 0; i < categories.length; i++) {
          console.log(categories[i].subs);
          for (let j = 0; j < categories[i].subs.length; j++) {
            if (
              categories[i].subs[j].name_du === location.replace(/%20/g, " ")
            ) {
              console.log(categories[i].subs[j].name_du);
              setcoverPhoto(categories[i].subs[j].category.Cover_Image_link);
            }
          }
        }
      } else if (allProductsPage) {
        setcoverPhoto(categories[0]?.Cover_Image_link);
      }
    }, [allProducts]);

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
                  {allProductsPage ? (
                    <a>All Products</a>
                  ) : (
                    <a>{search ? "Search" : location.replace(/%20/g, " ")}</a>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex gap-1 mb-1">
          {!search && (
            <CategoryComp
              setPrice={setPrice}
              setselectedColor={setselectedColor}
              selectedColor={selectedColor}
              setselectedRating={setselectedRating}
              setselectedSize={setselectedSize}
              selectedSize={selectedSize}
              price={price}
              setDiscountProducts={setDiscountProducts}
              discountProducts={discountProducts}
              categories={categories}
              setcategories={setcategories}
              filters={filters}
            />
          )}
          <div className="flex-[6] ">
            <div className="banar m-3 rounded-lg overflow-hidden">
              <img
                src={coverPhoto}
                alt="banar"
                className="w-full h-[250px] object-contain max-md:object-cover"
              />
            </div>

            {window.location.pathname.includes("/search") && (
              <label className="container w-4/5 m-auto flex input input-bordered flex items-center gap-2 rounded-3xl py-0 h-10">
                <input
                  onChange={(e) => setSearchValue(e.target.value)}
                  type="text"
                  className="grow"
                  placeholder="Search"
                  value={searchValue}
                  ref={inputElementRef}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
            )}

            {!search && (
              <>
                <div className="mt-1 bg-white rounded-lg p-3">
                  <div className="space-y-5">
                    <div className="flex items-start justify-between gap-4 max-sm:gap-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        {(price.maxIndex !== filters?.max_price || price.minIndex !== filters?.min_price) && (
                          <div className="selected flex gap-2 bg-gray-200 w-fit items-center px-2 py-1 rounded-xl">
                            <span className="text-gray-700 text-xs">
                              Price from ({price.minIndex} $) to (
                              {price.maxIndex} $)
                            </span>
                            <span
                              className="text-gray-900 cursor-pointer font-semibold "
                              onClick={() =>
                                setPrice({
                                  minIndex: filters?.min_price,
                                  maxIndex: filters?.max_price,
                                })
                              }
                            >
                              x
                            </span>
                          </div>
                        )}
                        {(price.maxIndex !== filters?.max_price || price.minIndex !== filters?.min_price) && (
                          <div className="selected flex gap-2 bg-indigo-100 w-fit items-center px-2 py-1 rounded-xl cursor-pointer" onClick={() =>
                            setPrice({
                              minIndex: filters?.min_price,
                              maxIndex: filters?.max_price,
                            })
                          }>
                            <span
                              className="text-gray-700 text-xs"
                              
                            >
                              Clear
                            </span>
                          </div>
                        )}
                      </div>
                      <select
                        className="select select-bordered max-w-xs"
                        onChange={(e) => setSort(e.target.value)}
                      >
                        <option disabled selected className="">
                          Sort By
                        </option>
                        <option className="text-base" value="low">
                          Sort price from low to high
                        </option>
                        <option className="text-base" value="high">
                          Sort price from high to low
                        </option>
                      </select>
                    </div>
                    <div className="flex items-center justify-between hidden max-md:flex">
                      <div className=""></div>
                      <label
                        htmlFor="my-drawer"
                        className="btn drawer-button bg-indigo-500 "
                      >
                        <PiSlidersDuotone size={24} color="white" />
                      </label>
                    </div>
                  </div>
                </div>

                <div className="drawer z-[999999999]">
                  <input
                    id="my-drawer"
                    type="checkbox"
                    className="drawer-toggle"
                  />
                  <div className="drawer-side">
                    <label
                      htmlFor="my-drawer"
                      aria-label="close sidebar"
                      className="drawer-overlay "
                    ></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content relative">
                      <label
                        htmlFor="my-drawer"
                        className="close absolute top-5 right-5"
                      >
                        <IoMdClose size={24} color="black" />
                      </label>
                      <CategoryComp
                        mobile
                        setPrice={setPrice}
                        setselectedColor={setselectedColor}
                        selectedColor={selectedColor}
                        setselectedRating={setselectedRating}
                        setselectedSize={setselectedSize}
                        selectedSize={selectedSize}
                        price={price}
                        setDiscountProducts={setDiscountProducts}
                        discountProducts={discountProducts}
                        categories={categories}
                        setcategories={setcategories}
                        filters={filters}
                      />
                    </ul>
                  </div>
                </div>
              </>
            )}

            <div className="products flex flex-wrap justify-evenly gap-2 my-3">
              {allProducts && allProducts.map((item, i) => (
                <Link to={`/product/${item.name_du}`}>
                  <div
                    key={i}
                    className="rounded-lg bg-white flex flex-col justify-between items-center gap-1 max-md:h-full w-[340px] max-lg:w-[260px] p-[0px] relative max-md:w-[220px] max-sm:w-auto max-sm:max-w-[160px]"
                  >
                    <div className="love absolute bg-white shadow-lg rounded-full flex justify-center items-center top-5 right-5 w-8 h-8">
                      <button className="">
                        <IoHeartOutline size={18} />
                      </button>
                    </div>
                    {item.sale !== 0 && (
                      <div className="love absolute bg-indigo-600 shadow-lg rounded-lg text-white flex justify-center items-center top-4 left-5 px-2 text-sm p-1">
                        -{item.sale.Value}%
                      </div>
                    )}
                    <div className="image p-2 w-full rounded-lg">
                      <img
                        src={item?.images?.[0]?.link}
                        alt="category"
                        className="rounded-lg w-full aspect-[1/1] max-md:h-[242px] object-cover"
                      />
                    </div>
                    <span className="truncate w-full text-center text-xs text-gray-500">
                      {item.category.name_du}
                    </span>
                    <span className="truncate w-full text-center text-sm font-semibold">
                      {item.name_du}
                    </span>
                    <div className="flex text-yellow-500">
                      {[...Array(5)].map((_, i) => {
                        return item.rating > i ? (
                          <AiFillStar />
                        ) : (
                          <AiOutlineStar />
                        );
                      })}
                    </div>
                    <span className="truncate w-full text-center text-base font-bold flex items-center gap-3 justify-center">
                      {item.sale && item.sale !== 0 ? (
                        <>
                          ${" "}
                          {(
                            item.price -
                            (item.price * item.sale.Value) / 100
                          ).toFixed(2)}
                          <span className="line-through text-gray-400 font-semibold">
                            $ {item.price}
                          </span>
                        </>
                      ) : (
                        <> $ {item.price}</>
                      )}
                    </span>
                    {item.colors && (
                      <div className="flex flex-wrap gap-1 pt-2 pb-4 px-4 justify-center">
                        {item.colors.map((item, i) => {
                          return (
                            <div
                              className="colors w-[26px] h-[26px] rounded-full"
                              style={{
                                backgroundColor: item,
                              }}
                            ></div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </Link>
              ))}
              {allProducts.length === 0 && (
                <div className="w-full text-center text-xl max-sm:text-base font-semibold py-10">
                  No Products Found
                </div>
              )}
            </div>

            {!hideShowMore && (
              <div className="mt-1 bg-white rounded-lg p-3">
                <div className="space-y-5">
                  <div className="flex items-center justify-between gap-4">
                    <button
                      className="btn btn-outline btn-error hover:!text-white mx-auto"
                      onClick={() => handleShowMore()}
                    >
                      Show More Products
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
);

export default Category;

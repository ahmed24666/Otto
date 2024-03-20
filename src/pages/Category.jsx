import React, { useEffect, useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Link, useLocation, useParams } from "react-router-dom";
import model from "../assets/model.avif";
import CategoryBanar from "../assets/CategoryBannar.jpeg";
import { IoHeartOutline } from "react-icons/io5";
import { PiSlidersDuotone } from "react-icons/pi";
import { IoMdClose } from "react-icons/io";
import CategoryComp from "../components/CategoryComp";
import CategorySlider from "../components/CategorySlider";

const requestOptions = {
  method: "GET",
  redirect: "follow",
};

const Category = React.memo(
  ({ allProductsPage, categoryPage, subCategoryPage, search }) => {
    const [allProducts, setallProducts] = useState([]);
    const [offset, setOffset] = useState(0);
    const [hideShowMore, sethideShowMore] = useState(false);

    const location = useLocation().pathname.split("/").pop();
    //filter
    const [searchWord, setsearchWord] = useState(location.replace(/%20/g,"-"))
    const [selectedSize, setselectedSize] = useState(0);
    const [price, setPrice] = useState({
      minIndex: 0,
      maxIndex: 0,
    });

    const [selectedColor, setselectedColor] = useState(0);
    const [selectedRating, setselectedRating] = useState(0);
    const [sort, setSort] = useState(null);
    //filter

    // GET ALL PRODUCTS FROM API

    useEffect(() => {
      if (allProductsPage) {
        // &min_price=750&max_price=800&color=%23b71f1f&size=Impedit exercitatio&sort=high
        setOffset(0);
        fetch(
          `https://siedra-shop.com/api/products/?offset=0&limit=12&min_price=${
            price.minIndex
          }${price.maxIndex > 0 ? `&max_price=${price.maxIndex}` : ""}${
            sort ? `&sort=${sort}` : ""
          }`,
          requestOptions
        )
          .then((response) => response.json())
          .then((result) => {
            setallProducts(result.data.products);
            if (result.data.products.length < 12) {
              sethideShowMore(true);
            } else {
              sethideShowMore(false);
            }
          })
          .catch((error) => console.error(error));
      }
      if (categoryPage) {
        setOffset(0);

        fetch(
          `https://siedra-shop.com/api/products/category/${location.replace(
            /%20/g,
            "-"
          )}?offset=0&limit=12&min_price=${price.minIndex}${
            price.maxIndex > 0 ? `&max_price=${price.maxIndex}` : ""
          }${sort ? `&sort=${sort}` : ""}`,
          requestOptions
        )
          .then((response) => response.json())
          .then((result) => {
            if (result.status === false) {
              setallProducts([]);
            } else {
              setallProducts(result.data.products);
              if (result.data.products.length < 12) {
                sethideShowMore(true);
              } else {
                sethideShowMore(false);
              }
            }
          })
          .catch((error) => console.error(error));
      }
      if (subCategoryPage) {
        setOffset(0);
        fetch(
          `https://siedra-shop.com/api/products/subcategory/${location.replace(
            /%20/g,
            "-"
          )}?offset=0&limit=12&min_price=${price.minIndex}${
            price.maxIndex > 0 ? `&max_price=${price.maxIndex}` : ""
          }${sort ? `&sort=${sort}` : ""}`,
          requestOptions
        )
          .then((response) => response.json())
          .then((result) => {
            if (result.status === false) {
              setallProducts([]);
            } else {
              setallProducts(result.data.products);
              if (result.data.products.length < 12) {
                sethideShowMore(true);
              } else {
                sethideShowMore(false);
              }
            }
          })
          .catch((error) => console.error(error));
      }
      if (search) {
        setOffset(0);
        fetch(
          `https://siedra-shop.com/api/products/search?name=${location.replace(/%20/g,"-")}?offset=0&limit=12`,
          requestOptions
        )
          .then((response) => response.json())
          .then((result) => {
            if (result.status === false) {
              setallProducts([]);
            } else {
              setallProducts(result.data.products);
              if (result.data.products.length < 12) {
                sethideShowMore(true);
              } else {
                sethideShowMore(false);
              }
            }
          })
          .catch((error) => console.error(error));
      }
    }, [price, sort, location]);

    const handleShowMore = () => {
      const changedOffset = offset + 12;
      setOffset(offset + 12);
      if (allProductsPage) {
        fetch(
          `https://siedra-shop.com/api/products/?offset=${changedOffset}&limit=12&min_price=${
            price.minIndex
          }${price.maxIndex > 0 ? `&max_price=${price.maxIndex}` : ""}${
            sort ? `&sort=${sort}` : ""
          }`,
          requestOptions
        )
          .then((response) => response.json())
          .then((result) => {
            setallProducts([...allProducts, ...result.data.products]);
            if (result.data.products.length < 12) sethideShowMore(true);
          })
          .catch((error) => console.error(error));
      }
      if (categoryPage) {
        fetch(
          `https://siedra-shop.com/api/products/category/${location.replace(
            /%20/g,
            "-"
          )}?offset=${changedOffset}&limit=12&min_price=${price.minIndex}${
            price.maxIndex > 0 ? `&max_price=${price.maxIndex}` : ""
          }${sort ? `&sort=${sort}` : ""}`,
          requestOptions
        )
          .then((response) => response.json())
          .then((result) => {
            setallProducts([...allProducts, ...result.data.products]);
            if (result.data.products.length < 12) sethideShowMore(true);
          })
          .catch((error) => console.error(error));
      }
      if (subCategoryPage) {
        fetch(
          `https://siedra-shop.com/api/products/subcategory/${location.replace(
            /%20/g,
            "-"
          )}?offset=${changedOffset}&limit=12&min_price=${price.minIndex}${
            price.maxIndex > 0 ? `&max_price=${price.maxIndex}` : ""
          }${sort ? `&sort=${sort}` : ""}`,
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
                    <a>{search?"Search":location.replace(/%20/g, " ")}</a>
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
            />
          )}
          <div className="flex-[6] ">
            <div className="banar m-3 rounded-lg overflow-hidden">
              <img
                src={CategoryBanar}
                alt="banar"
                className="w-full h-[250px] object-contain max-md:object-cover"
              />
            </div>
            {!search && (
              <>
                <div className="mt-1 bg-white rounded-lg p-3">
                  <div className="space-y-5">
                    <div className="flex items-start justify-between gap-4 max-sm:gap-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        {(price.maxIndex !== 0 || price.minIndex !== 0) && (
                          <div className="selected flex gap-2 bg-gray-200 w-fit items-center px-2 py-1 rounded-xl">
                            <span className="text-gray-700 text-xs">
                              Price from ({price.minIndex} $) to (
                              {price.maxIndex} $)
                            </span>
                            <span
                              className="text-gray-900 cursor-pointer font-semibold "
                              onClick={() =>
                                setPrice({
                                  minIndex: 0,
                                  maxIndex: 0,
                                })
                              }
                            >
                              x
                            </span>
                          </div>
                        )}
                        {(price.maxIndex !== 0 || price.minIndex !== 0) && (
                          <div className="selected flex gap-2 bg-indigo-100 w-fit items-center px-2 py-1 rounded-xl cursor-pointer">
                            <span
                              className="text-gray-700 text-xs"
                              onClick={() =>
                                setPrice({
                                  minIndex: 0,
                                  maxIndex: 0,
                                })
                              }
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
                      />
                    </ul>
                  </div>
                </div>
              </>
            )}

            <div className="products flex flex-wrap justify-evenly gap-2 my-3">
              {allProducts.map((item, i) => (
                <Link to={`/product/${item.name_du}`}>
                  <div
                    key={i}
                    className="rounded-lg bg-white flex flex-col justify-between items-center gap-1 max-md:h-[400px] w-[340px] max-lg:w-[260px] p-[0px] relative"
                  >
                    <div className="love absolute bg-white shadow-lg rounded-full flex justify-center items-center top-5 right-5 w-8 h-8">
                      <button className="">
                        <IoHeartOutline size={18} />
                      </button>
                    </div>
                    {item.sale > 0 && (
                      <div className="love absolute bg-indigo-600 shadow-lg rounded-lg text-white flex justify-center items-center top-4 left-5 px-2 text-sm p-1">
                        {item.sale}%
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
                    <div className="flex flex-wrap gap-1 pt-2 pb-4 px-4 justify-center">
                      {item.colors &&
                        item.colors.map((_, i) => {
                          return (
                            <div
                              className="colors w-[26px] h-[26px] rounded-full"
                              style={{
                                backgroundColor: item.colors[i].color_code,
                              }}
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
                  {!hideShowMore && (
                    <button
                      className="btn btn-outline btn-error hover:!text-white mx-auto"
                      onClick={() => handleShowMore()}
                    >
                      Show More Products
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default Category;

import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/logo.png";
import { IoChatboxEllipsesOutline, IoHomeOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";
import { IoBagOutline } from "react-icons/io5";
import { IoGlobeOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import { IoEnterOutline } from "react-icons/io5";
import { IoExitOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { GoArrowUpLeft } from "react-icons/go";

const Navbar = () => {
  const [openNav, setopenNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [searchedProd, setSearchedProd] = useState([]);
  const [hideSearchBar, setHideSearchBar] = useState(false);
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;

      if (currentPosition > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const currentElementRef = useRef(null);
  const inputElementRef = useRef(null);
  const inputElementRef2 = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        currentElementRef.current &&
        !currentElementRef.current.contains(event.target) &&
        inputElementRef.current &&
        !inputElementRef.current.contains(event.target) &&
        inputElementRef2.current &&
        !inputElementRef2.current.contains(event.target)
      ) {
        setSearch("");
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (search.length < 1) return;
    fetch(
      `https://siedra-shop.com/api/products/search?name=${search}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setSearchedProd(result.data.products))
      .catch((error) => console.error(error));
  }, [search]);
  const location = useLocation().pathname;
  useEffect(() => {
    setSearch("");
    if (location.includes("/search")) {
      setHideSearchBar(true);
    } else {
      setHideSearchBar(false);
    }
  }, [location]);

  return (
    <div className="relative">
      <div
        className={`navbar mx-auto bg-base-100 justify-evenly bg-white ${
          scrolled ? "shadow-xl fixed" : ""
        }  z-[99999] top-0 `}
        style={{ transition: "0.5s" }}
      >
        <div className="navbar-start gap-5 max-md:gap-2 max-sm:gap-5 w-fit max-sm:w-full max-sm:justify-evenly">
          <div className="hidden max-md:flex items-center gap-3">
            <details className="dropdown ">
              <summary className="m-1 btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </summary>

              <ul className="menu menu-lg dropdown-content mt-3 z-[1] p-2 shadow-xl bg-base-100 rounded-box min-w-[280px] max-md:w-[400px] max-sm:w-auto">
                <li className="pt-2">
                  <a
                    className="item cursor-pointer text-gray-500 flex gap-1 items-center"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <IoHomeOutline className="text-lg" />
                    <span className="text-sm">Home</span>
                  </a>
                </li>
                <li className="pt-2">
                  <a
                    className="item cursor-pointer text-gray-500 flex gap-1 items-center"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <IoCartOutline className="text-lg" />
                    <span className="text-sm">Shop</span>
                  </a>
                </li>
                <li className="pt-2">
                  <a
                    className="item cursor-pointer text-gray-500 flex gap-1 items-center"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <IoPersonOutline className="text-lg" />
                    <span className="text-sm">Account</span>
                  </a>
                </li>
                {isOpen && (
                  <>
                    <Link to="/login">
                      <li className="pt-2 pl-6 !mt-[-10px]">
                        <a className="item cursor-pointer text-gray-500 flex gap-1 items-center">
                          <IoEnterOutline className="text-lg" />
                          <span className="text-xs">Login</span>
                        </a>
                      </li>
                    </Link>
                    <Link to="/signup">
                      <li className="pt-2 pl-6 mt-[-10px]">
                        <a className="item cursor-pointer text-gray-500 flex gap-1 items-center">
                          <IoEnterOutline className="text-lg" />
                          <span className="text-xs">SignUp</span>
                        </a>
                      </li>
                    </Link>
                  </>
                )}
                <Link to="/wishlist">
                  <li className="pt-2">
                    <a className="item cursor-pointer text-gray-500 flex gap-1 items-center">
                      <IoHeartOutline className="text-lg" />
                      <span className="text-sm">Wishlist</span>
                    </a>
                  </li>
                </Link>
                <li className="pt-2">
                  <a className="item cursor-pointer text-gray-500 flex gap-1 items-center">
                    <IoGlobeOutline className="text-lg" />
                    <span className="text-sm">Language</span>
                  </a>
                </li>
              </ul>
            </details>
            <Link to="/cart">
              <div>
                <IoBagOutline className="text-lg" />
              </div>
            </Link>
          </div>
          <Link to="/">
            <a className="text-xl">
              <img
                src={logo}
                alt="Logo"
                className=" h-[50px] min-w-[108px] object-contain"
              />
            </a>
          </Link>
          {!hideSearchBar && (
            <div className="navbar-center flex">
              <ul className="menu menu-horizontal px-1 max-sm:hidden">
                <label className="input input-bordered flex items-center gap-2 rounded-3xl py-0 h-10">
                  <input
                    onChange={(e) => setSearch(e.target.value)}
                    type="text"
                    className="grow"
                    placeholder="Search"
                    value={search}
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
              </ul>
            </div>
          )}
        </div>
        <div className="navbar-end flex gap-4 max-md:hidden">
          {/* <div className="item text-center cursor-pointer text-gray-500 flex flex-col gap-1 items-center justify-center">
            <IoChatboxEllipsesOutline className="text-lg" />
            <span className="text-sm">Service</span>
          </div> */}
          <Link to="/">
            <div className="item text-center cursor-pointer text-gray-500 flex flex-col gap-1 items-center justify-center">
              <IoHomeOutline className="text-lg" />
              <span className="text-sm">Home</span>
            </div>
          </Link>
          <Link to="/products">
            <div className="item text-center cursor-pointer text-gray-500 flex flex-col gap-1 items-center justify-center">
              <IoCartOutline className="text-lg" />
              <span className="text-sm">Shop</span>
            </div>
          </Link>
          <details className="dropdown">
            <summary className="m-1 btn !p-0 !bg-transparent !border-0 !shadow-none">
              <div className="item text-center cursor-pointer text-gray-500 flex flex-col gap-1 items-center justify-center">
                <IoPersonOutline className="text-lg" />
                <span className="text-sm !font-normal">Account</span>
              </div>
            </summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
              <Link to="/login">
                <li className="pt-2">
                  <a className="item cursor-pointer text-gray-500 flex gap-1 items-center">
                    <IoEnterOutline className="text-lg" />
                    <span className="text-xs">Login</span>
                  </a>
                </li>
              </Link>
              <Link to="/signup">
                <li className="pt-2">
                  <a className="item cursor-pointer text-gray-500 flex gap-1 items-center">
                    <IoEnterOutline className="text-lg" />
                    <span className="text-xs">SignUp</span>
                  </a>
                </li>
              </Link>
            </ul>
          </details>

          <Link to="/wishlist">
            <div className="item text-center cursor-pointer text-gray-500 flex flex-col gap-1 items-center justify-center">
              <IoHeartOutline className="text-lg" />
              <span className="text-sm">Wishlist</span>
            </div>
          </Link>
          <Link to="/cart">
            <div className="item text-center cursor-pointer text-gray-500 flex flex-col gap-1 items-center justify-center">
              <IoBagOutline className="text-lg" />
              <span className="text-sm">Cart</span>
            </div>
          </Link>
          <div className="item text-center cursor-pointer text-gray-500 flex flex-col gap-1 items-center justify-center">
            <IoGlobeOutline className="text-lg" />
            <span className="text-sm">Language</span>
          </div>
        </div>
      </div>
      {!hideSearchBar && (
        <label className="container w-4/5 m-auto hidden max-sm:flex input input-bordered flex items-center gap-2 rounded-3xl py-0 h-10">
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            className="grow"
            placeholder="Search"
            value={search}
            ref={inputElementRef2}
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
      {search.length > 1 && (
        <div
          className="w-[35%] max-xl:w-[45%] max-lg:w-3/4 max-md:w-[90%] bg-white rounded-2xl absolute z-[99999] md:ml-[10%] max-md:mx-[5%] mt-1 px-3 py-2 shadow-xl"
          ref={currentElementRef}
        >
          {searchedProd.length > 0 ? (
            <>
              {searchedProd.slice(0, 4).map((item, i) => {
                return (
                  <Link to={`/product/${item.name_du}`} key={item.id}>
                    <div className="item bg-gray-100 p-2 rounded-lg my-1 flex items-center justify-between gap-5">
                      <div className="flex items-center gap-5">
                        <img
                          src={item.images?.[0] ? item.images[0].link : ""}
                          alt=""
                          className="w-14 h-14 rounded-lg object-cover"
                        />
                        <div className="flex flex-col gap-1">
                          <span className="text-sm truncate">
                            {item.name_du}
                          </span>
                          <span className="text-xs text-gray-500 truncate">
                            {item.category.name_du}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-5">
                        <span className="truncate w-full text-sm font-bold flex gap-1 flex-col justify-center max-sm:hidden">
                          {item.sale && item.sale !== 0 ? (
                            <>
                              {(
                                item.price -
                                (item.price * item.sale.Value) / 100
                              ).toFixed(2)}
                              <span className="line-through text-gray-400 font-semibold">
                                $ {item.price}
                              </span>
                            </>
                          ) : (
                            <>$ {item.price}</>
                          )}
                        </span>
                        <span className="text-lg px-3 text-[#5137ff]">
                          <GoArrowUpLeft />
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </>
          ) : (
            <div className="justify-center item bg-gray-100 p-2 rounded-lg my-1 flex items-center gap-5">
              No Products Found
            </div>
          )}
          {searchedProd.length > 4 && (
            <Link to={`/search/${search}`}>
              <button className="btn btn-outline btn-error hover:!text-white w-full">
                Show All Products
              </button>
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;

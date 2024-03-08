import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";
import { IoBagOutline } from "react-icons/io5";
import { IoGlobeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { IoEnterOutline } from "react-icons/io5";
import { IoExitOutline } from "react-icons/io5";

const Navbar = () => {
  const [openNav, setopenNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
  return (
    <>
      <div
        className={`navbar mx-auto bg-base-100 justify-evenly bg-white ${
          scrolled ? "shadow-xl fixed" : ""
        }  z-[99999] top-0 `}
        style={{ transition: "0.5s" }}
      >
        <div className="navbar-start gap-5 w-fit max-sm:w-full max-sm:justify-evenly">
          <div className={`dropdown `}>
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost md:hidden"
              onClick={() => setopenNav(!openNav)}
            >
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-lg dropdown-content mt-3 z-[1] p-2 shadow-xl bg-base-100 rounded-box min-w-[280px] max-md:w-[400px] max-sm:w-auto"
            >
              {/* <li className="pt-2">
                <a className="item cursor-pointer text-gray-500 flex gap-1 items-center">
                  <IoChatboxEllipsesOutline className="text-lg" />
                  <span className="text-sm">Service</span>
                </a>
              </li> */}
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
              <Link to="/cart">
                <li className="pt-2">
                  <a className="item cursor-pointer text-gray-500 flex gap-1 items-center">
                    <IoBagOutline className="text-lg" />
                    <span className="text-sm">Cart</span>
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
          </div>
          <Link to="/">
            <a className="text-xl">
              <img src={logo} alt="Logo" className=" h-[50px] min-w-[108px] " />
            </a>
          </Link>
          <div className="navbar-center flex">
            <ul className="menu menu-horizontal px-1 max-sm:hidden">
              <label className="input input-bordered flex items-center gap-2 rounded-3xl py-0 h-10">
                <input type="text" className="grow" placeholder="Search" />
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
        </div>
        <div className="navbar-end flex gap-4 max-md:hidden">
          {/* <div className="item text-center cursor-pointer text-gray-500 flex flex-col gap-1 items-center justify-center">
            <IoChatboxEllipsesOutline className="text-lg" />
            <span className="text-sm">Service</span>
          </div> */}
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
      <label className="container w-4/5 m-auto hidden max-sm:flex input input-bordered flex items-center gap-2 rounded-3xl py-0 h-10">
        <input type="text" className="grow" placeholder="Search" />
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

      {/* <div className="drawer">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Open drawer</label>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
      
    </ul>
  </div>
</div> */}
    </>
  );
};

export default Navbar;

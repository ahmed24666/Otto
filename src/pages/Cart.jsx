import React, { useEffect, useState } from "react";
import ProductImage from "../assets/model.avif";
import { MdClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  removeOneItemFromCart,
} from "../Slice/cartSlice";
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

const Cart = ({ wish }) => {
  const dispatch = useDispatch();

  const CartItems = useSelector((state) => state.cart);
  const [endDate, setendDate] = useState("9-25-2024 23:30:00");
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
  }, [endDate]);

  return (
    <div className="container m-auto">
      {!wish && (
        <div className="top my-1 bg-white rounded-lg p-3 flex justify-center items-center">
          <ul className="steps w-1/2 max-lg:w-full">
            <li className="step step-error max-sm:text-sm" data-content="">
              My Shopping Cart
            </li>
            <li className="step max-sm:text-sm" data-content="">
              Checkout
            </li>
            <li className="step max-sm:text-sm" data-content="">
              Thank You !
            </li>
          </ul>
        </div>
      )}
      <div className="center my-1 bg-white rounded-lg p-3 flex">
        <div className="overflow-x-auto  w-full">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Image</th>
                <th>Product</th>
                {!wish && <th>Number</th>}
                <th>Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {CartItems?.items?.map((item, i) => {
                return (
                  <tr key={i}>
                    <td>
                      <img
                        src={item?.images?.[0]?.link}
                        className="w-24 h-24 object-contain"
                        alt=""
                      />
                    </td>
                    <td className="space-y-3">
                      <h4 className="w-[400px] font-bold">{item?.name_du}</h4>
                      <p>S | 120 cm, berry</p>
                      <div className="bg-white mt-1 space-y-6 flex flex-col">
                        <div className="grid grid-flow-col gap-1 text-center auto-cols-max">
                          <div className="flex flex-col p-2 bg-indigo-600 rounded-box text-neutral-content text-xs">
                            <span className="countdown font-mono text-sm max-md:text-xl text-center">
                              {d}
                            </span>
                            days
                          </div>
                          <div className="flex flex-col p-2 bg-indigo-600 rounded-box text-neutral-content text-xs">
                            <span className="countdown font-mono text-sm max-md:text-xl ">
                              <span
                                style={{ "--value": h, margin: "auto" }}
                              ></span>
                            </span>
                            hours
                          </div>
                          <div className="flex flex-col p-2 bg-indigo-600 rounded-box text-neutral-content text-xs">
                            <span className="countdown font-mono text-sm max-md:text-xl ">
                              <span
                                style={{ "--value": m, margin: "auto" }}
                              ></span>
                            </span>
                            min
                          </div>
                          <div className="flex flex-col p-2 bg-indigo-600 rounded-box text-neutral-content text-xs">
                            <span className="countdown font-mono text-sm max-md:text-xl ">
                              <span
                                style={{ "--value": s, margin: "auto" }}
                              ></span>
                            </span>
                            sec
                          </div>
                        </div>
                      </div>
                    </td>
                    {!wish && (
                      <td>
                        <div className="flex items-center">
                          <button
                            className="btn btn-outline btn-error text-xl hover:!text-white"
                            onClick={() =>
                              dispatch(removeOneItemFromCart(item?.id))
                            }
                          >
                            -
                          </button>
                          <span className="mx-1 p-3">{item?.quantity}</span>
                          <button
                            className="btn btn-outline btn-error text-xl hover:!text-white"
                            style={{
                              outlineColor: "#5137ff !important",
                              color: "#5137ff !important",
                            }}
                            onClick={() => dispatch(addToCart(item))}
                          >
                            +
                          </button>
                        </div>
                      </td>
                    )}
                    <td>
                      {item?.sale !== 0 && (
                        <p className="line-through">€ {item.price}</p>
                      )}
                      {item?.sale !== 0 ? (
                        <p className="text-red-600 font-semibold text-lg">
                          €{" "}
                          {(
                            item?.price -
                            (item?.price * item?.sale.Value) / 100
                          ).toFixed(2)}
                        </p>
                      ) : (
                        <p className="text-red-600 font-semibold text-lg">
                          € {item.price}
                        </p>
                      )}
                    </td>
                    <td>
                      <button
                        className="text-indigo-600 text-lg"
                        onClick={() => dispatch(removeFromCart(item?.id))}
                      >
                        <AiOutlineDelete size={22} className="text-red-500" />
                      </button>
                    </td>
                  </tr>
                );
              })}
              {CartItems?.items?.length < 1 && (
                <tr>
                  <td colSpan="5">
                    <h3 className="text-center text-gray-500 text-lg">
                      No items in cart
                    </h3>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      {!wish && (
        <div className="flex md:gap-1 max-md:flex-col">
          <div className="mb-1 bg-white rounded-lg p-3 px-6 flex justify-between flex-1 items-center min-w-[270px]">
            <div className="space-y-5 max-md:w-full">
              <div className="flex justify-between items-center gap-5">
                <h3 className="font-bold text-xl max-sm:text-lg">Subtotal :</h3>
                <h3 className="text-xl max-sm:text-lg">
                  €{" "}
                  {CartItems?.items
                    ?.reduce((prev, current) => {
                      const itemTotal =
                        current.sale !== 0
                          ? (current.price -
                              (current.price * current.sale.Value) / 100) *
                            current.quantity
                          : current.price * current.quantity;
                      return prev + itemTotal;
                    }, 0)
                    .toFixed(2)}
                </h3>
              </div>
              <div className="flex justify-between items-center gap-5">
                <h3 className="font-bold text-xl max-sm:text-lg">Shipping :</h3>
                <h3 className="text-xl max-sm:text-lg">
                  €{" "}
                  {CartItems?.items
                    ?.reduce((prev, current) => {
                      return prev + current?.shippingPrice;
                    }, 0)
                    .toFixed(2)}
                </h3>
              </div>
            </div>
          </div>
          <div className="mb-1 bg-white rounded-lg p-3 px-6 flex justify-between flex-[3]">
            <div className="space-y-5 flex items-center justify-between w-full max-sm:flex-col max-sm:gap-5 max-sm:py-4">
              <div className="flex justify-between items-center gap-5">
                <h3 className="font-bold text-xl max-sm:text-lg">Total :</h3>
                <h3 className="text-xl max-sm:text-lg">
                  €{" "}
                  {CartItems?.items
                    ?.reduce((prev, current) => {
                      const itemTotal =
                        current.sale !== 0
                          ? (current.price -
                              (current.price * current.sale.Value) / 100) *
                              current.quantity +
                            current?.shippingPrice
                          : current.price * current.quantity +
                            current?.shippingPrice;
                      return prev + itemTotal;
                    }, 0)
                    .toFixed(2)}
                </h3>
              </div>
              <div className="flex flex-col gap-5 !mt-0">
                {
                  <Link to="/products">
                    <button className="btn btn-outline btn-error hover:!text-white">
                      Continue Shopping
                    </button>
                  </Link>
                }
                <button className="btn btn-error Checkout !text-white">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

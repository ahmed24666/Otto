import React, { useEffect } from "react";
import ProductImage from "../assets/model.avif";
import { MdClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, removeOneItemFromCart } from "../Slice/cartSlice";
import { AiOutlineDelete } from "react-icons/ai";

const Cart = ({ wish }) => {
  const dispatch = useDispatch();

 const CartItems= useSelector((state) => state.cart)
 useEffect(() => {
   console.warn(CartItems?.items)
 }, [CartItems?.items])
 
  return (
    <div className="container m-auto">
      {!wish && (
        <div className="top my-1 bg-white rounded-lg p-3 flex justify-center items-center">
          <ul className="steps w-1/2 max-lg:w-full">
            <li className="step step-error max-sm:text-sm" data-content="">
              My Shopping Cart
            </li>
            <li className="step step-error max-sm:text-sm" data-content="">
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
                        src={item?.images[0].link}
                        className="w-24 h-24 object-contain"
                        alt=""
                      />
                    </td>
                    <td className="space-y-3">
                      <h4 className="w-[400px] font-bold">
                        {item?.name_du}
                      </h4>
                      <p>S | 120 cm, berry</p>
                      <p className="text-gray-500">(€ 23,99)</p>
                      <p className="text-gray-500">
                        available - in 2-3 working days
                      </p>
                    </td>
                    {!wish && (
                      <td>
                        <div className="flex items-center">
                          <button className="btn btn-outline btn-error text-xl hover:!text-white" onClick={()=>dispatch(removeOneItemFromCart(item?.id))}>
                            -
                          </button>
                          <span className="mx-1 p-3">{item?.quantity}</span>
                          <button className="btn btn-outline btn-error text-xl hover:!text-white" style={{outlineColor:"#5137ff !important" ,color:"#5137ff !important"}} onClick={()=>dispatch(addToCart(item))}>
                            +
                          </button>
                        </div>
                      </td>
                    )}
                    <td>
                      <p className="line-through">€ 23,99</p>
                      <p className="text-indigo-600 font-semibold text-lg">
                        € 23,99
                      </p>
                    </td>
                    <td>
                      <button className="text-indigo-600 text-lg" onClick={()=>dispatch(removeFromCart(item?.id))}>
                        <AiOutlineDelete size={22} className="text-red-500" />
                      </button>
                    </td>
                  </tr>
                );
              })}
               {CartItems?.items?.length < 1 && (
                <tr>
                  <td colSpan="5">
                    <h3 className="text-center text-gray-500 text-lg">No items in cart</h3>
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
                <h3 className="text-xl max-sm:text-lg">€ 23,99</h3>
              </div>
              <div className="flex justify-between items-center gap-5">
                <h3 className="font-bold text-xl max-sm:text-lg">Shipping :</h3>
                <h3 className="text-xl max-sm:text-lg">€ 23,99</h3>
              </div>
            </div>
          </div>
          <div className="mb-1 bg-white rounded-lg p-3 px-6 flex justify-between flex-[3]">
            <div className="space-y-5 flex items-center justify-between w-full max-sm:flex-col max-sm:gap-5 max-sm:py-4">
              <div className="flex justify-between items-center gap-5">
                <h3 className="font-bold text-xl max-sm:text-lg">Total :</h3>
                <h3 className="text-xl max-sm:text-lg">€ 23,99</h3>
              </div>
              <div className="flex flex-col gap-5 !mt-0">
                <button className="btn btn-outline btn-error hover:!text-white">
                  Continue Shopping
                </button>
                <button className="btn btn-error Checkout !text-white">Checkout</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

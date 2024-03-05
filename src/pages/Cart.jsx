import React from "react";
import ProductImage from "../assets/model.avif";
import { MdClose } from "react-icons/md";

const Cart = ({ wish }) => {
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
              {[...Array(5)].map((_, i) => {
                return (
                  <tr key={i}>
                    <td>
                      <img
                        src={ProductImage}
                        className="w-24 h-24 object-contain"
                        alt=""
                      />
                    </td>
                    <td className="space-y-3">
                      <h4 className="w-[400px] font-bold">
                        My home Unisex Bathrobe Vanessa, Long Form, Cotton,
                        Kimono Collar, Belt, Pockets, Women & Men, Waffle Piqué,
                        Light Quality, S-3XL
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
                          <button className="btn btn-outline btn-error text-xl hover:!text-white">
                            -
                          </button>
                          <span className="mx-1 p-3">1</span>
                          <button className="btn btn-outline btn-error text-xl hover:!text-white">
                            +
                          </button>
                        </div>
                      </td>
                    )}
                    <td>
                      <p className="line-through">€ 23,99</p>
                      <p className="text-red-600 font-semibold text-lg">
                        € 23,99
                      </p>
                    </td>
                    <td>
                      <button className="text-red-600 text-lg">
                        <MdClose />
                      </button>
                    </td>
                  </tr>
                );
              })}
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
                <button className="btn btn-error !text-white">Checkout</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

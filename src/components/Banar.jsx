import React from "react";
import img from "../assets/001_2021_17_moeb_rb_beachhouse_style_thementeaser_querformat_139130.avif";
const Banar = () => {
  return (
    <div className="container m-auto rounded-2xl overflow-hidden bg-white">
      <div className="p-6 space-y-2">
        <p className="max-sm:text-sm">Discount 50%</p>
        <h2 className="font-semibold text-xl max-sm:text-lg">Beach House Style</h2>
      </div>
      <div className="w-full h-[300px] max-sm:h-[230px] bg-gray-300">
        <img
          src={img}
          alt="banar"
          className="w-full h-full object-cover object-center"
        />
      </div>
    </div>
  );
};

export default Banar;

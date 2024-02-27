import React from "react";

const Category = () => {
  return (
    <div className="container m-auto">
      <div className="top bg-white my-1 flex justify-between items-center px-5 py-2">
        <div>
          <div className="text-sm breadcrumbs">
            <ul className="text-gray-500">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Men's Fashion</a>
              </li>
            </ul>
          </div>
          <h1 className="text-2xl">Men's Fashion</h1>
        </div>
        <div className="join">
          <button className="join-item btn px-3">«</button>
          <button className="join-item btn px-3">Page 22</button>
          <button className="join-item btn px-3">»</button>
        </div>
      </div>
      <div className="flex gap-1">
        <div className="flex-[2] bg-white">gfdfgddf</div>
        <div className="flex-[6] bg-white">sdffgdsfdssdf</div>
      </div>
    </div>
  );
};

export default Category;

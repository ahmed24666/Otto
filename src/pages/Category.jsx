import React, { useState } from "react";

const Category = () => {
  const [selectedSize, setselectedSize] = useState(0);

  const mensCategories = [
    {
      id: 1,
      name: "T-shirt",
      subCategories: [
        {
          id: 1,
          name: "Round Neck",
        },
        {
          id: 2,
          name: "V Neck",
        },
      ],
    },
    {
      id: 2,
      name: "Shirt",
      subCategories: [
        {
          id: 1,
          name: "Formal",
        },
        {
          id: 2,
          name: "Casual",
        },
      ],
    },
    {
      id: 3,
      name: "Pant",
      subCategories: [
        {
          id: 1,
          name: "Formal",
        },
        {
          id: 2,
          name: "Casual",
        },
      ],
    },
    {
      id: 4,
      name: "Shoe",
      subCategories: [
        {
          id: 1,
          name: "Formal",
        },
        {
          id: 2,
          name: "Casual",
        },
      ],
    },
  ];
  const sizes = [
    "S (44/46)",
    "M (48/50)",
    "L (52/54)",
    "XL (56/58)",
    "XXL (60/62)",
    "3XL (64/66)",
    "4XL (68/70)",
    "5XL (72/74)",
  ];
  return (
    <div className="container m-auto">
      <div className="top bg-white my-1 flex justify-between items-center px-5 py-2 rounded-lg">
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
          <h1 className="text-2xl font-bold">Men's Fashion</h1>
        </div>
        <div className="join">
          <button className="join-item btn px-3">«</button>
          <button className="join-item btn px-3">Page 22</button>
          <button className="join-item btn px-3">»</button>
        </div>
      </div>
      <div className="flex gap-1 mb-1">
        <div className="flex-[2] bg-white rounded-lg p-5 space-y-5">
          <div className="Categories space-y-5">
            <h2 className="font-semibold">Categories</h2>
            <div className="join join-vertical w-full">
              {mensCategories.map((category) => {
                return (
                  <div
                    key={category.id}
                    className="collapse collapse-arrow join-item border border-base-300"
                  >
                    <input
                      type="radio"
                      name="my-accordion-4"
                      className="min-h-0"
                    />
                    <div className="collapse-title font-medium min-h-0 p-[0.8rem]">
                      {category.name}
                    </div>
                    <div className="collapse-content">
                      <ul className="list-none p-0 m-0">
                        {category.subCategories.map((subCategory) => {
                          return (
                            <li key={subCategory.id}>{subCategory.name}</li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="Size space-y-5">
            <h2 className="font-semibold">Size</h2>
            <div className="flex gap-1 flex-wrap gap-3">
              {sizes.map((size, i) => {
                return (
                  <div
                    className={`${
                      i === selectedSize
                        ? "border border-black"
                        : "border border-gray-300"
                    } rounded-lg p-3 flex justify-center items-center cursor-pointer max-md:text-sm max-md:p-2`}
                    onClick={() => setselectedSize(i)}
                  >
                    {size}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="Size space-y-5">
            <h2 className="font-semibold">Price</h2>
            <div className="flex gap-1 flex-wrap gap-3">
              
            </div>
          </div>
        </div>
        <div className="flex-[6] ">
          <div className="banar m-3 rounded-lg overflow-hidden">
            <img
              src="https://via.placeholder.com/800x200"
              alt="banar"
              className="w-full h-[250px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;

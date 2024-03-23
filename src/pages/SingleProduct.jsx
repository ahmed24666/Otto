import React, { useEffect, useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsMailboxFlag } from "react-icons/bs";
import { TbMailboxOff } from "react-icons/tb";
import { TbMailbox } from "react-icons/tb";

import ReactImageGallery from "react-image-gallery";
import { IoBagOutline } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";
import sp1 from "../assets/sp1.avif";
import sp2 from "../assets/sp2.avif";
import sp3 from "../assets/sp3.avif";
import sp4 from "../assets/sp4.avif";
import sp5 from "../assets/sp5.avif";
import CommonProductSlider from "../components/CommonProductSlider";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Slice/cartSlice";

const images2 = [
  {
    original:
      "https://siedra-shop.com/admin/uploads/images/items-images/6338_Azzrk.jpg",
    thumbnail:
      "https://siedra-shop.com/admin/uploads/images/items-images/6338_Azzrk.jpg",
    originalClass: "h-[600px] max-md:h-[350px] object-contain w-full",
  },
  {
    original:
      "https://siedra-shop.com/admin/uploads/images/items-images/4171_profile Logo.jpg",
    thumbnail:
      "https://siedra-shop.com/admin/uploads/images/items-images/4171_profile Logo.jpg",
    originalClass: "h-[600px] max-md:h-[350px] object-contain w-full",
  },
  {
    original:
      "https://siedra-shop.com/admin/uploads/images/items-images/1179_profile.jpg",
    thumbnail:
      "https://siedra-shop.com/admin/uploads/images/items-images/1179_profile.jpg",
    originalClass: "h-[600px] max-md:h-[350px] object-contain w-full",
  },
  {
    original:
      "https://siedra-shop.com/admin/uploads/images/items-images/4876_128262500.jpeg",
    thumbnail:
      "https://siedra-shop.com/admin/uploads/images/items-images/4876_128262500.jpeg",
    originalClass: "h-[600px] max-md:h-[350px] object-contain w-full",
  },
  {
    original:
      "https://siedra-shop.com/admin/uploads/images/items-images/1161_Azzrk.jpg",
    thumbnail:
      "https://siedra-shop.com/admin/uploads/images/items-images/1161_Azzrk.jpg",
    originalClass: "h-[600px] max-md:h-[350px] object-contain w-full",
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
const SingleProduct = ({ note }) => {
  const dispatch = useDispatch();
  const [product, setProduct] = useState({});
  const [productRecomendations, setProductRecomendations] = useState([])
  const [images, setImages] = useState([...Array(10)]);
  const [renderPhotos, setrenderPhotos] = useState(false);
  const [selectedColor, setselectedColor] = useState(0);
  const [selectedSize, setselectedSize] = useState(0);
  const [selectedRating, setselectedRating] = useState(0);
  const CartItems= useSelector((state) => state.cart)
  useEffect(() => {
    console.warn(CartItems?.items)
  }, [CartItems?.items])

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

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [window.location.pathname]);

  // GET DATA FROM API
  const params = useParams().id.replaceAll(" ", "-");

  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  useEffect(() => {

    fetch(
      `https://siedra-shop.com/api/products/product/${params}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setProduct(result.data.product))
      .catch((error) => console.error(error));
    fetch(
      "https://siedra-shop.com/api/products/recommendation",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setProductRecomendations(result.data.products))
      .catch((error) => console.error(error));
  }, []);
  useEffect(() => {
    if (product?.sale?.End_Date) {
      setendDate(product?.sale?.End_Date);
    }
    let images = [];
    product?.images?.map((img) => {
      images.push({
        original: img.link,
        thumbnail: img.link,
        originalClass: "h-[600px] max-md:h-[350px] object-contain w-full",
      });
      console.log(images);
    });
    setImages(images);
    setrenderPhotos(true);
  }, [product]);

  return (
    <div className="container m-auto">
      <div className="title bg-white p-6 my-1 flex flex-col gap-4">
        <span className="text-gray-600">{product?.category?.name_du}</span>
        <h1 className="text-2xl font-semibold max-md:text-lg">
          {product?.name_du}
        </h1>
        <div className="flex text-yellow-500 text-2xl max-md:text-lg items-center gap-1">
          {[...Array(5)].map((_, i) => {
            return product?.rating > i ? <AiFillStar /> : <AiOutlineStar />;
          })}
          ({product?.ratingCount})
        </div>
      </div>
      <div className="flex gap-1 my-1 max-md:flex-col">
        <div className="flex-[4] flex flex-col">
          <div className="w-full bg-white p-4">
            {product?.images && images && renderPhotos && (
              <ReactImageGallery
                items={images}
                lazyLoad
                thumbnailPosition="bottom"
                infinite
                showNav={false}
                showFullscreenButton={false}
                showPlayButton={false}
                isRTL={false}
                autoPlay
                slideOnThumbnailOver
              />
            )}
          </div>
          {product?.description_du && (
            <div className="w-full bg-white p-4 max-md:space-y-3 mt-1 space-y-6">
              <h4 className="text-lg text-black font-semibold">
                Description :
              </h4>

              <p className="text-gray-500 max-lg:text-sm">
                {product?.description_du}
              </p>
            </div>
          )}
          <div className="w-full bg-white p-4 mt-1 space-y-4 max-md:hidden">
            <h4 className="text-lg text-black font-semibold">
              Rate This Product :
            </h4>
            <div className="rating rating-lg rating-half">
              <input type="radio" name="rating-10" className="rating-hidden" />
              {[...Array(5)].map((_, i) => {
                return (
                  <>
                    <input
                      type="radio"
                      name="rating-10"
                      className="bg-yellow-500 mask mask-star-2 mask-half-1 !w-4 !max-sm:w-3"
                      onClick={() => setselectedRating(i + 1 - 0.5)}
                    />
                    <input
                      type="radio"
                      name="rating-10"
                      className="bg-yellow-500 mask mask-star-2 mask-half-2 !w-4 !max-sm:w-3"
                      onClick={() => setselectedRating(i + 1)}
                    />
                  </>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex-[3]">
          <div className="bg-white p-4 space-y-6 max-md:space-y-3">
            {product?.colors && product?.colors.length > 0 && (
              <div className="flex flex-col gap-4">
                <p className="font-semibold text-base text-black">Color :</p>
                <div className="flex gap-1">
                  {product?.colors?.map((item, i) => {
                    return (
                      <div
                        className={`${
                          i === selectedColor ? "border border-black" : ""
                        } rounded-full p-1 flex justify-center items-center`}
                        onClick={() => setselectedColor(i)}
                      >
                        <div
                          className="w-8 h-8 max-md:w-6 max-md:h-6 rounded-full cursor-pointer"
                          style={{ backgroundColor: item }}
                        ></div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
            {product?.sizes && product?.sizes.length > 0 && (
              <div className="flex flex-col gap-4">
                <p className="font-semibold text-base text-black">Sizes :</p>
                <div className="flex gap-1 flex-wrap gap-3">
                  {product?.sizes?.map((size, i) => {
                    return (
                      <div
                        className={`${
                          i === selectedSize
                            ? "border border-[#5137ff]"
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
            )}
            <div className="flex gap-4 items-center">
              <TbMailbox className="text-2xl text-black" />
              <p className="text-indigo-600 max-md:text-sm">
                Available - in 2-3 working days
              </p>
            </div>
          </div>
          <div className="bg-white p-4 space-y-6 max-md:space-y-3 mt-1">
            <div className="flex flex-col gap-4">
              <p className="font-semibold text-base text-black">Price :</p>
              {product?.sale && product?.sale !== 0 ? (
              <div className="flex items-center gap-4">
                <div className="px-2 py-1 rounded-lg bg-indigo-600 w-fit text-white max-md:text-sm">
                  -{product?.sale?.Value}%
                </div>
                {product?.sale && product?.sale !== 0 && (
                  <span className=" text-lg text-gray-500 line-through max-md:text-base">
                    $ {product?.price}
                  </span>
                )}
              </div>
              ):""}
              <div className="flex flex-col gap-4">
                {product?.sale && product?.sale !== 0 ? (
                  <span className="text-indigo-600 text-3xl text-black font-semibold max-md:text-xl">
                    $
                    {(
                      product?.price -
                      (product?.price * product?.sale.Value) / 100
                    ).toFixed(2)}
                  </span>
                ) : (
                  <span className="text-indigo-600 text-3xl text-black font-semibold max-md:text-xl">
                    $ {product?.price}
                  </span>
                )}
                <span className="text-gray-500 max-md:text-sm">
                  Plus $ {product?.shippingPrice} shipping costs
                </span>
              </div>
            </div>
          </div>
          {product?.sale && product?.sale !== 0 && (
            <div className="bg-white p-4 mt-1 space-y-6 flex flex-col items-center">
              <h4 className="text-lg text-black font-semibold">CountDown :</h4>
              <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                  <span className="countdown font-mono text-5xl max-md:text-xl text-center">
                    {d}
                  </span>
                  days
                </div>
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                  <span className="countdown font-mono text-5xl max-md:text-xl ">
                    <span style={{ "--value": h, margin: "auto" }}></span>
                  </span>
                  hours
                </div>
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                  <span className="countdown font-mono text-5xl max-md:text-xl ">
                    <span style={{ "--value": m, margin: "auto" }}></span>
                  </span>
                  min
                </div>
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                  <span className="countdown font-mono text-5xl max-md:text-xl ">
                    <span style={{ "--value": s, margin: "auto" }}></span>
                  </span>
                  sec
                </div>
              </div>
            </div>
          )}
          <div className="bg-white p-4 space-y-4 mt-1">
              <button className="relative bg-indigo-600 text-white p-3 w-full flex items-center justify-center rounded-lg" onClick={()=>dispatch(addToCart(product))}>
                Add to Cart
                <span className="absolute top-1/2 left-2 text-2xl translate -translate-y-1/2 text-white rounded-full p-1">
                  <IoBagOutline />
                </span>
              </button>
            <button
              className="relative text-black p-3 w-full flex items-center justify-center rounded-lg"
              style={{ backgroundColor: "rgb(236, 236, 236)" }}
            >
              Bookmark Product
              <span className="absolute top-1/2 left-2 text-2xl translate -translate-y-1/2 text-black rounded-full p-1">
                <IoHeartOutline />
              </span>
            </button>
            <div className="flex gap-4 items-center">
              <TbMailboxOff className="text-2xl text-black" />
              <p className="text-indigo-600">30 days free returns</p>
            </div>
          </div>
          {product?.notes_du && (
            <div className="bg-white p-4 mt-1 space-y-6 max-md:space-y-3 ">
              <h4 className="text-lg text-black font-semibold">Note :</h4>
              <p className="text-gray-500 max-md:text-sm">
                {product?.notes_du}
              </p>
            </div>
          )}
          <div className="w-full bg-white p-4 mt-1 space-y-4 hidden max-md:block">
            <h4 className="text-lg text-black font-semibold">
              Rate This Product :
            </h4>
            <div className="rating rating-lg rating-half">
              <input type="radio" name="rating-10" className="rating-hidden" />
              {[...Array(5)].map((_, i) => {
                return (
                  <>
                    <input
                      type="radio"
                      name="rating-10"
                      className="bg-yellow-500 mask mask-star-2 mask-half-1 !w-4 !max-sm:w-3"
                      onClick={() => setselectedRating(i + 1 - 0.5)}
                    />
                    <input
                      type="radio"
                      name="rating-10"
                      className="bg-yellow-500 mask mask-star-2 mask-half-2 !w-4 !max-sm:w-3"
                      onClick={() => setselectedRating(i + 1)}
                    />
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <CommonProductSlider title={"Recommendations for you"} arrayOfProducts={productRecomendations} />
    </div>
  );
};

export default SingleProduct;

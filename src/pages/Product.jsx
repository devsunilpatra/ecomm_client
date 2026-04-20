import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

// import ProductGaller from "../components/pages/products/ProductGaller";
import RelatedProducts from "../components/pages/products/RelatedProducts";
import NewsletterBox from "../components/common/NewsletterBox";
import DescriptionTab from "../components/pages/products/DescriptionTab";
import { assets } from "../assets/assets";

const Product = () => {
  const { productId } = useParams();
  const { products, currency } = useContext(ShopContext);
  const dispatch = useDispatch();
  const [productData, setProductData] = useState({});
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");
  const fetchProductData = async () => {
    products?.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item?.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId]);

  //  console.log([productData.image[0]], "products")
  console.log(productData, "productData");
 
  const cartItems = useSelector((state)=>state.cart)

  console.log(cartItems, "cartItems")

  return productData ? (
    <main className="border-t border-gray-400 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* Product Data */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* ---------Product Images------------ */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-between sm:w-[17.8%]">
            {productData?.image?.map((img) => {
              return (
                <img
                  src={img}
                  key={img}
                  onClick={() => setImage(img)}
                  className="w-[24%] h-30 sm:w-full shrink-0 cursor-pointer object-cover "
                />
              );
            })}
          </div>

          <div className="w-full sm:w-[80%] bg-[grey]">
            <img src={image} alt="" className="w-full h-full " />
          </div>
        </div>

        {/* -----------Product info-------------- */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData?.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets?.star_icon} alt="" className="w-3 5" />
            <img src={assets?.star_icon} alt="" className="w-3 5" />
            <img src={assets?.star_icon} alt="" className="w-3 5" />
            <img src={assets?.star_icon} alt="" className="w-3 5" />
            <img src={assets?.star_dull_icon} alt="" className="w-3 5" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productData?.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData?.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>

            <div className="flex gap-3 flex-wrap">
              {productData?.sizes?.map((sz, index) => {
                const isSelected = size === sz;

                return (
                  <button
                    key={index}
                    onClick={() => setSize(sz)}
                    className={`
            px-4 bg-gray-100 py-2 border cursor-pointer text-sm font-medium
            transition-all duration-200
            ${
              isSelected
                ? "border border-gray-500 scale-105"
                : " hover:bg-gray-200 border-gray-300"
            }
          `}
                  >
                    {sz}
                  </button>
                );
              })}
            </div>
          </div>

          <button
            onClick={() =>
              dispatch(
                addToCart({
                  _id: productData?._id,
                  price: productData.price,
                  title: productData.name,
                  size:size,
                }),
              )
            }
            className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700 cursor-pointer"
          >
            ADD TO CART
          </button>

          <hr className="mt-8 sm:w-4/5  " />
          <div className="text-sm text-gray-500 mt-5 flex-col gap-1">
            <p>100% Original product</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>

      {/* Description Section */}

      {/* Related Products */}
      <div className="mt-20 ">
        <DescriptionTab />
      </div>
      <div className="mt-20">
        <RelatedProducts />
      </div>

      <NewsletterBox />
    </main>
  ) : (
    <main className="opacity-0"></main>
  );
};

export default Product;

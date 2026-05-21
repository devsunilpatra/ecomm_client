import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../../../context/ShopContext";

const ProductGaller = () => {
  const { productId } = useParams();
  const { products } = useContext(ShopContext);
  const [productData, setProductData] = useState([]);
  const [image, setImage] = useState([]);

  const fetchProductData = () => {
    products.map((item) => {
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

  return (
    <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
      <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-between sm:w-[17.8%]">
        {productData?.image?.map((img) => {
          return (
            <img
              src={img}
              key={img}
              onClick={() => setImage(img)}
              className="w-[24%] sm:w-full  shrink-0 cursor-pointer  "
            />
          );
        })}
      </div>

      <div className="w-full sm:w-[80%]">
        <img src={image} alt="" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default ProductGaller;

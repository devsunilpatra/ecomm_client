import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

const ProductCard = ({ item }) => {
  const { currency } = useContext(ShopContext);

  const { _id, name, price, image } = item;

  return (
    <Link to={`/product/${_id}`} className="text-gray-700  cursor-pointer">
      <div className="overflow-hidden">
        <img src={image[0]} alt={name} className="w-full object-cover" />

        <p className="pt-3 text-sm">{name}</p>
        <p className="text-sm font-semibold">
          {currency} {price}
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;

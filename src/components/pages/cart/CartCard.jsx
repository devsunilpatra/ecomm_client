import { assets } from "../../../assets/assets";
import { useDispatch } from "react-redux";
import { updateQuantity, removeCart } from "../../../features/cart/cartSlice";

const CartCard = ({ prod, currency, size, quantity }) => {
  const { _id, name, price, image } = prod;

  const dispatch = useDispatch();

  const truncate = (str, maxLength) => {
    if (str.length <= maxLength) return str;

    return str.slice(0, maxLength) + "...";
  };

  const handleChange = (e) => {
    const value = Number(e.target.value);

    if (value < 1) return;

    dispatch(
      updateQuantity({
        _id: _id,
        size,
        quantity: value,
      }),
    );
  };

  const handleRemove = () => {
    dispatch(
      removeCart({
        _id: _id,
        size,
      }),
    );
  };

  return (
    <div className="py-4 border-t border-gray-300 text-gray-700 flex flex-row justify-between items-center gap-4">
      {/* order details */}
      <div className="flex items-start gap-4 text-sm">
        <img src={image[0]} alt={prod?.name} className="w-20 sm:w-20" />

        <div className="flex flex-col justify-between max-w-44 ">
          <p className="sm:text-base font-medium">{truncate(name, 70)}</p>
          <div className="flex items-center gap-4 mt-2 text-base text-gray-700">
            <p className="text:lg">
              {currency} {price}
            </p>
            <p>
              Size:{" "}
              <select name="" id="" className="border border-gray-500">
                <option value="">{size}</option>
              </select>{" "}
            </p>
          </div>
        </div>
      </div>

      {/* order status */}

      {/* Quantity Input */}
      <input
        type="number"
        min="1"
        value={quantity}
        onChange={handleChange} 
        className="px-2 w-16 text-center border border-gray-400"
      />

      {/* button track order */}

      <div onClick={handleRemove} className="cursor-pointer">
        <img src={assets?.bin_icon} alt="bin icon" className="w-5 " />
      </div>
    </div>
  );
};

export default CartCard;

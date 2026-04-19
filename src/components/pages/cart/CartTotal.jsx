import { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ShopContext } from "../../../context/ShopContext";
import Title from "../../ui/Title";
import { Button } from "../../ui/Button";

const CartTotal = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location, "location");
  const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);

  console.log(getCartAmount, "getCartAmount");

  return (
    <section className="w-xl">
      <div className="text-2xl">
        <Title normal_txt="CART" bold_txt="TOTALS" />
      </div>

      <div className="flex flex-col gap-2 mt-2 text-sm">
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>
            {currency}
            {getCartAmount()}.00
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <p>Shipping Fee</p>
          <p>
            {currency}
            {delivery_fee}
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <b>Total</b>
          <b>
            {currency}
            {getCartAmount() === 0 ? 0 : getCartAmount() + Number(delivery_fee)}
          </b>
        </div>
      </div>

      {location?.pathname === "/place-order" ? null : (
        <div className="mt-8 float-right">
          <Button onClick={() => navigate("/place-order")} variant="solid">
            PROCEED TO CHECKOUT
          </Button>
        </div>
      )}
    </section>
  );
};

export default CartTotal;

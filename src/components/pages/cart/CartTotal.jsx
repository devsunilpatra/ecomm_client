import { useContext } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { ShopContext } from "../../../context/ShopContext";
import Title from "../../ui/Title";
import { Button } from "../../ui/Button";
import { selectCartTotal } from "../../../features/cart/cartSelectors";

const CartTotal = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const cartTotal = useSelector(selectCartTotal);

  const { currency, delivery_fee } = useContext(ShopContext);

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
            {cartTotal}.00
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
            {cartTotal === 0 ? 0 : cartTotal + Number(delivery_fee)}
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

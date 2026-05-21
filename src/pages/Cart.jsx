import { useContext } from "react";
import { useSelector } from "react-redux";
import { ShopContext } from "../context/ShopContext";
import CartCard from "../components/pages/cart/CartCard";
import Title from "../components/ui/Title";
import CartTotal from "../components/pages/cart/CartTotal";
import NewsletterBox from "../components/common/NewsletterBox";

const Cart = () => {
  const { currency } = useContext(ShopContext);
  const { products } = useSelector((state) => state.products);
  const { cartItems } = useSelector((state) => state.cart);

  console.log(products, "products");

  return (
    <main className="pt-16 border-t border-gray-400">
      <div className="text-2xl">
        <Title normal_txt="YOUR" bold_txt="CART" />
      </div>

      <section className="border-b border-gray-300">
        {cartItems?.map((item) => {
          const productsData = products.find((prod) => {
            return prod._id === item._id;
          });

          if (!productsData) return null;
          return (
            <CartCard
              key={`${item.id}-${item.size}`}
              prod={productsData}
              quantity={item?.quantity}
              size={item.size}
              currency={currency}
            />
          );
        })}
      </section>

      <section className="my-20 flex justify-end">
        <CartTotal />
      </section>

      <NewsletterBox />
    </main>
  );
};

export default Cart;

import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import CartCard from "../components/pages/cart/CartCard";
import Title from "../components/ui/Title";


const Cart = () => {
  const { products, currency } = useContext(ShopContext);

  return (
    <main className="pt-16 border-t border-gray-400">
      <div className="text-2xl">
        <Title normal_txt="YOUR" bold_txt="CART" />
      </div>

      <section className="border-b border-gray-300">
        {products?.slice(1, 5).map((prod) => {
          return <CartCard key={prod?._id} prod={prod} currency={currency} />;
        })}
      </section>
    </main>
  );
};

export default Cart;

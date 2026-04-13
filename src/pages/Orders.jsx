import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/ui/Title";
import MyOrdersCard from "../components/pages/myorders/MyOrdersCard";
import NewsletterBox from "../components/common/NewsletterBox";

const Orders = () => {
  const { products, currency } = useContext(ShopContext);

  return (
    <main className="pt-16 border-t border-gray-400">
      <div className="text-2xl ">
        <Title normal_txt="MY" bold_txt="ORDERS" />
      </div>

      <section className="border-b border-gray-300 mt-4">
        {products?.slice(1, 4)?.map((prod) => {
          return <MyOrdersCard key={prod._id} prod={prod} currency={currency} />;
        })}
      </section>
      <div className="pt-12">
        <NewsletterBox />
      </div>
    </main>
  );
};

export default Orders;

import { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import CartCard from "../components/pages/cart/CartCard";
import Title from "../components/ui/Title";
import CartTotal from "../components/pages/cart/CartTotal";
import NewsletterBox from "../components/common/NewsletterBox";

const Cart = () => {
  const { products, currency, cartItems, updateQuantity } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  console.log(products, "products");

  useEffect(() => {
    const tempData = [];

    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  console.log(cartData, "cartData")

  return (
    <main className="pt-16 border-t border-gray-400">
      <div className="text-2xl">
        <Title normal_txt="YOUR" bold_txt="CART" />
      </div>

      <section className="border-b border-gray-300">
        {cartData?.map((item, indx)=>{
                
            const productData = products.find((prod)=>{

              return prod?._id === item?._id
            })
            console.log(productData, "productData_cart")
           return <CartCard key={indx} prod={productData} quantity={item?.quantity} size={item?.size} currency={currency} updateQuantity={updateQuantity} />;
        })}
        {/* {products?.slice(1, 5).map((prod) => {
          return <CartCard key={prod?._id} prod={prod} currency={currency} />;
        })} */}
      </section>

      <section className="my-20 flex justify-end">
      <CartTotal/>
      </section>

      <NewsletterBox/>
    </main>
  );
};

export default Cart;

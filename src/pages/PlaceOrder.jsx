import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { zodResolver } from "@hookform/resolvers/zod";
import { createOrder, clearOrderState } from "../features/orders/orderSlice";
import { clearCart } from "../features/cart/cartSlice";
import { selectCartTotal } from "../features/cart/cartSelectors";
import { orderSchema } from "../features/orders/orderSchema";
import Title from "../components/ui/Title";
import { Button } from "../components/ui/Button";
import CartTotal from "../components/pages/cart/CartTotal";
import NewsletterBox from "../components/common/NewsletterBox";
import InputField from "../components/formElements/InputField";
import { assets } from "../assets/assets";
// import { toast } from "react-toastify";


const delivery_methods = [
  { id: 1, title: "Stripe", value: "stripe", img: assets?.stripe_logo },
  { id: 2, title: "Razorpay", value: "razorpay", img: assets?.razorpay_logo },
  { id: 3, title: "CASH ON DELIVERY", value: "cod" },
];

const PlaceOrder = () => {

  const dispatch = useDispatch();
 const { loading, error, success } = useSelector((state) => state.order);
  const navigate = useNavigate();
  const {cartItems} = useSelector(state=>state.cart)
  const cartTotal = useSelector(selectCartTotal)
  const [methods, setMethods] = useState("cod");

  const method = useForm({
    resolver: zodResolver(orderSchema),
    mode: "onChange",
  });

  const {handleSubmit, reset, register, formState: {errors}} = method;

  const onSubmit = (data) =>{


console.log("Submitting...")
  const orderPayload = {
    address: data,
    items:cartItems,
    amount: cartTotal,
    paymentMethod: methods
   }

   console.log(orderPayload, "orderPayload")
   dispatch(createOrder(orderPayload))

  //  reset()
  //  navigate("/orders")
  }

   //  Success Handling
  useEffect(() => {
    if (success) {
      reset();
      dispatch(clearCart())
      navigate("/orders");
      dispatch(clearOrderState());
    }
  }, [success, navigate, reset, dispatch]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col sm:flex-row justify-between gap-14 pt-5 sm:pt-12 min-h-[80vh] border-t border-gray-300">
      {/* left side */}
      <div  className="flex flex-col gap-4 w-full sm:max-w-120 ">
        <div className="text-xl sm:text-2xl my-3 ">
          <Title normal_txt="DELIVERY" bold_txt="INFORMATION" />
        </div>

        <div className="flex gap-3">
          <InputField
            // className="border border-gray-300 py-1.5 px-3.5 w-full"
            className="border border-gray-500"
            {...register("firstName")}
            type="text"
            name="firstName"
            error={errors.firstName?.message}
            
            id=""
            placeholder="First name"
          />
          <InputField
            // className="border border-gray-300 py-1.5 px-3.5 w-full"
            className="border border-gray-500"
            {...register("lastName")}
            type="text"
            name="lastName"
            id=""
             error={errors.lastName?.message}
            placeholder="Last name"
          />
        </div>
        <InputField
          // className="border border-gray-300 py-1.5 px-3.5 w-full"
          className="border border-gray-500"
          {...register("email")}
          type="email"
          name="email"
           error={errors.email?.message}
          id=""
          placeholder="Email"
        />

        <InputField
          // className="border border-gray-300 py-1.5 px-3.5 w-full"
          className="border border-gray-500"
          {...register("subject")}
          type="text"
          name="subject"
           error={errors.subject?.message}
          id=""
          placeholder="Subject"
        />

        <div className="flex gap-3">
          <InputField
            // className="border border-gray-300 py-1.5 px-3.5 w-full"
            className="border border-gray-500"
            {...register("city")}
            type="text"
            name="city"
             error={errors.city?.message}
            id=""
            placeholder="City"
          />
          <InputField
            // className="border border-gray-300 py-1.5 px-3.5 w-full"
            className="border border-gray-500"
            {...register("state")}
            type="text"
            name="state"
             error={errors.state?.message}
            id=""
            placeholder="State"
          />
        </div>

        <div className="flex gap-3">
          <InputField
            // className="border border-gray-300 py-1.5 px-3.5 w-full"
            className="border border-gray-500"
            {...register("zipcode")}
            type="text"
            name="zipcode"
             error={errors.zipcode?.message}
            id=""
            placeholder="Zipcode"
          />
          <InputField
            // className="border border-gray-300 py-1.5 px-3.5 w-full"
            className="border border-gray-500"
            {...register("country")}
            type="text"
            name="country"
             error={errors.country?.message}
            id=""
            placeholder="Country"
          />
        </div>
        <InputField
          className="border border-gray-500"
          // className="border border-gray-300 py-1.5 px-3.5 w-full"
          {...register("pincode")}
          type="string"
          name="pincode"
           error={errors.pincode?.message}
          id=""
          placeholder="Pincode"
        />
      </div>

      {/* right side */}

      <div className="">
        <div className="mt-10 min-w-80"></div>

        <CartTotal />

        <div className="mt-12 ">
          <Title normal_txt="PAYMENT" bold_txt="METHOD" />

          {/* Payment Method Slection */}
          <div className="flex gap-3 flex-col lg:flex-row justify-between">
            {delivery_methods.length
              ? delivery_methods?.map((mtds, indx) => {
                  return (
                    <div
                      key={indx}
                      onClick={() => setMethods(mtds?.value)}
                      className="flex items-center gap-3 border border-gray-400 p-2 px-4 cursor-pointer "
                    >
                      <p
                        className={`min-w-3.5 h-3.5 border border-gray-400 rounded-full ${methods == mtds?.value ? `bg-green-400` : ""}`}
                      ></p>
                      {mtds?.img ? (
                        <img src={mtds?.img} alt="" className="h-5 mx-4" />
                      ) : (
                        <p className="text-gray-500 text-sm font-medium mx-4 ">
                          {mtds?.title}
                        </p>
                      )}
                    </div>
                  );
                })
              : "No Methods Found"}
          </div>
        </div>
        <div className="mt-8 float-right">
           {error && <p className="text-red-500 mt-2">{error}</p>}
          <Button type="submit" variant="solid"  disabled={loading}>
             {loading ? "PLACE ORDER..." : "PLACE ORDER"}
        
          </Button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;

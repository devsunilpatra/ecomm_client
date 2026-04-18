import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Title from "../components/ui/Title";
import { Button } from "../components/ui/Button";
import { assets } from "../assets/assets";

const delivery_methods = [
  { id: 1, title: "Stripe", value: "stripe", img: assets?.stripe_logo },
  { id: 2, title: "Razorpay", value: "razorpay", img: assets?.razorpay_logo },
  { id: 3, title: "CASH ON DELIVERY", value: "cod" },
];

const PlaceOrder = () => {
  const navigate = useNavigate()
  const [methods, setMethods] = useState("cod");

  return (
    <main className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-12 min-h-[80vh] border-t border-gray-300">
      {/* left side */}
      <div className="flex flex-col gap-4 w-full sm:max-w-120 ">
        <div className="text-xl sm:text-2xl my-3 ">
          <Title normal_txt="DELIVERY" bold_txt="INFORMATION" />
        </div>

        <div className="flex gap-3">
          <input
            className="border border-gray-300 py-1.5 px-3.5 w-full"
            type="text"
            name=""
            id=""
            placeholder="First name"
          />
          <input
            className="border border-gray-300 py-1.5 px-3.5 w-full"
            type="text"
            name=""
            id=""
            placeholder="Last name"
          />
        </div>
        <input
          className="border border-gray-300 py-1.5 px-3.5 w-full"
          type="email"
          name=""
          id=""
          placeholder="Email"
        />

        <input
          className="border border-gray-300 py-1.5 px-3.5 w-full"
          type="text"
          name=""
          id=""
          placeholder="Subject"
        />

        <div className="flex gap-3">
          <input
            className="border border-gray-300 py-1.5 px-3.5 w-full"
            type="text"
            name=""
            id=""
            placeholder="City"
          />
          <input
            className="border border-gray-300 py-1.5 px-3.5 w-full"
            type="text"
            name=""
            id=""
            placeholder="State"
          />
        </div>

        <div className="flex gap-3">
          <input
            className="border border-gray-300 py-1.5 px-3.5 w-full"
            type="number"
            name=""
            id=""
            placeholder="Zipcode"
          />
          <input
            className="border border-gray-300 py-1.5 px-3.5 w-full"
            type="text"
            name=""
            id=""
            placeholder="Country"
          />
        </div>
        <input
          className="border border-gray-300 py-1.5 px-3.5 w-full"
          type="number"
          name=""
          id=""
          placeholder="Pincode"
        />
      </div>

      {/* right side */}

      <div className="">
        <div className="mt-8 min-w-80"></div>

        <div className="mt-12 ">
          <Title normal_txt="PAYMENT" bold_txt="METHOD" />

          {/* Payment Method Slection */}
          <div className="flex gap-3 flex-col lg:flex-row">
            {delivery_methods.length
              ? delivery_methods?.map((mtds, indx) => {
                  return (
                    <div
                      key={indx}
                      onClick={() => setMethods(mtds?.value)}
                      className="flex items-center gap-3 border border-gray-400 p-2 px-3 cursor-pointer "
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
          <Button onClick={()=> navigate("/orders")} variant="solid">PLACE ORDER</Button>
        </div>
      </div>
    </main>
  );
};

export default PlaceOrder;

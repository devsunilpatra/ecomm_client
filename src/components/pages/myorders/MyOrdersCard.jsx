import { Button } from "../../ui/Button";

const MyOrdersCard = ({ prod, currency }) => {
  const { name, price, image } = prod;

  return (
    <div className="py-4 border-t border-gray-300 flex flex-col text-gray-700 md:flex-row md:justify-between md:items-center gap-4">
      {/* order details */}
      <div className="flex items-start gap-4 text-sm">
        <img src={image[0]} alt={prod?.name} className="w-20 sm:w-20" />

        <div className="flex flex-col justify-between">
          <p className="sm:text-base font-medium">{name}</p>
          <div className="flex items-center gap-4 mt-2 text-base text-gray-700">
            <p className="text:lg">
              {currency} {price}
            </p>
            <p>Quantity: 1</p> <p>Size: M</p>
          </div>

          <p className="mt-4">
            Date: <span className="text-gray-400">{`25 May 2024`}</span>{" "}
          </p>
        </div>
      </div>

      {/* order status */}
      <div className="flex items-center gap-2 text-sm">
        <div className="bg-green-600 w-2 h-2 rounded-full"></div> Ready to ship
      </div>

      {/* button track order */}

      <Button>Track Order</Button>
    </div>
  );
};

export default MyOrdersCard;

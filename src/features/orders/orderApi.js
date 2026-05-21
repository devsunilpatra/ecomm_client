import api from "../../services/api";

export const createOrderApi = async (orderData) => {
  return api.post("/order", orderData);
};


export const getOrdersApi = async ()=>{

return api.get("/order")

}
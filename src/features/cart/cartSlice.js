import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const saveCartToStorage = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

const loadCartFromStorage = () => {
  try {
    const data = localStorage.getItem("cart");
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

const initialState = {
  cartItems: loadCartFromStorage(),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      if (!item.size) {
        toast.error("Select Product Size");
        return;
      }
      const existing = state.cartItems.find(
        (i) => i._id === item._id && i.size === item.size,
      );
      if (existing) {
        existing.quantity += 1;
      } else {
        state.cartItems.push({ ...item, quantity: 1 });
      }
      saveCartToStorage(state.cartItems);
    },
    removeCart: (state, action) => {
      const { _id, size } = action.payload;
      state.cartItems = state.cartItems.filter(
        (item) => !(item._id === _id && item.size === size),
      );

      saveCartToStorage(state.cartItems);
    },
    updateQuantity: (state, action) => {
      const { _id, size, quantity } = action.payload;
      const item = state.cartItems.find(
        (i) => i._id === _id && i.size === size,
      );
      if (item) item.quantity = quantity;
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const { addToCart, removeCart, updateQuantity, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;

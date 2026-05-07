import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";

export const fetchProducts = createAsyncThunk(
  "products/fetchedProducts",
  async (_, thunkAPI) => {
    try {
      const res = await api.get("/products");
      return res.data.products;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue("Failed to fetch");
    }
  },
);
const initialState = {
  products: [],
  loading: false,
  error: null,
  filters: {
    category: [],
    subCategory: [],
    sortType: "relevant",
    search: "",
    showSearch: false,
  },
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    toggleCategory: (state, action) => {
      const value = action.payload;
      // const value = action.payload;
      state.filters.category = state.filters.category.includes(value)
        ? state.filters.category.filter((item) => {
            item !== value;
          })
        : [...state.filters.category, value];

      // if (state.filters.category.includes(value)) {
      //   state.filters.category = state.filters.category.filter(
      //     (item) => item !== value,
      //   );
      // } else {
      //   state.filters.category.push(value);
      // }
    },
    toggleSubCategory: (state, action) => {
      const value = action.payload;

      if (state.filters.subCategory.includes(value)) {
        state.filters.subCategory = state.filters.subCategory.filter(
          (item) => item !== value,
        );
      } else {
        state.filters.subCategory.push(value);
      }
    },
    setSortType: (state, action) => {
      state.filters.sortType = action.payload;
    },
    setSearch: (state, action) => {
      state.filters.search = action.payload;
    },
    setShowSearch: (state, action) => {
      state.filters.showSearch = action.payload;
    },
    clearFilters: (state) => {
      state.filters = {
        category: [],
        subCategory: [],
        sortType: "relevant",
        search: "",
        showSearch: false,
      };
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })

      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const {
  setProducts,
  toggleCategory,
  toggleSubCategory,
  setSortType,
  setSearch,
  setShowSearch,
} = productSlice.actions;

export default productSlice.reducer;

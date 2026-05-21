
import { createSelector } from "@reduxjs/toolkit";


// Get products safely
export const selectProducts = (state) => state.products?.products || [];

export const selectFilters = (state) =>
 state.products?.filters || {
    category: [],
    subCategory: [],
    sortType: "relevant",
    search: "",
    showSearch: false,
  };

export const selectFilteredProducts = createSelector(
  [selectProducts, selectFilters],
  (products = [], filters) => {
    let result = [...products];

    if (filters.showSearch && filters.search) {
      result = result.filter((p) =>
        p.name.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    if (filters.category?.length) {
      result = result.filter((p) =>
        filters.category.includes(p.category)
      );
    }

    if (filters.subCategory?.length) {
      result = result.filter((p) =>
        filters.subCategory.includes(p.subCategory)
      );
    }

    if (filters.sortType === "low-high") {
      result.sort((a, b) => a.price - b.price);
    } else if (filters.sortType === "high-low") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }
);








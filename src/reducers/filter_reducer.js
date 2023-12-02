import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../actions";

const filter_reducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS) {
    let maxPrice = action.payload.map((product) => product.price);
    maxPrice = Math.max(...maxPrice);
    return {
      ...state,
      all_products: [...action.payload],
      filtered_products: [...action.payload],
      filters: { ...state.filters, max_price: maxPrice, price: maxPrice },
    };
  }
  if (action.type === SET_GRIDVIEW) {
    return { ...state, grid_view: true };
  }
  if (action.type === SET_LISTVIEW) {
    return { ...state, grid_view: false };
  }
  if (action.type === UPDATE_SORT) {
    return { ...state, sort: action.payload };
  }
  if (action.type === SORT_PRODUCTS) {
    const { sort, filtered_products: filtered } = state;
    let tempProduct = [...filtered];
    if (sort === "price-lowest") {
      tempProduct = tempProduct.sort((a, b) => a.price - b.price);
    }
    if (sort === "price-highest") {
      tempProduct = tempProduct.sort((a, b) => b.price - a.price);
    }
    if (sort === "name-a") {
      tempProduct = tempProduct.sort((a, b) => {
        return a.title.localeCompare(b.name);
      });
    }
    if (sort === "name-z") {
      tempProduct = tempProduct.sort((a, b) => {
        return b.title.localeCompare(a.name);
      });
    }
    return { ...state, filtered_products: tempProduct };
  }
  if (action.type === UPDATE_FILTERS) {
    const { name, value } = action.payload;
    return { ...state, filters: { ...state.filters, [name]: value } };
  }
  if (action.type === FILTER_PRODUCTS) {
    const { all_products } = state;
    const { text, category, brand, price } = state.filters;
    let tempProducts = [...all_products];

    if (text) {
      tempProducts = tempProducts.filter((product) => {
        return product.title.toLowerCase().startsWith(text);
      });
    }
    if (category !== "all") {
      tempProducts = tempProducts.filter((product) => {
        return product && product.tags[0] === category;
      });
    }
    if (brand !== "all") {
      tempProducts = tempProducts.filter((product) => {
        return product.brand === brand;
      });
    }

    tempProducts = tempProducts.filter((product) => {
      return product.price <= price;
    });
    return { ...state, filtered_products: tempProducts };
  }

  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      filters: {
        ...state.filters,
        text: "",
        brand: "all",
        category: "all",
        price: state.filters.max_price,
      },
    };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;

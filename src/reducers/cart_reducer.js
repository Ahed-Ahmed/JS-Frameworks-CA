import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from "../actions";
import CartItem from "../components/CartItem";

const cart_reducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
    const { id, amount, product } = action.payload;
    const tempItem = state.cart.find((i) => i.id === id);
    if (tempItem) {
      const tempCart = state.cart.map((items) => {
        if (items.id === id) {
          let newAmount = items.amount + amount;
          if (newAmount > items.max) {
            newAmount = items.max;
          }
          return { ...items, amount: newAmount };
        } else {
          return items;
        }
      });
    } else {
      const newItem = {
        id: product.id,
        name: product.title,
        amount,
        image: product.imageUrl,
        price: product.price,
        // max: product.countInStock,
      };
      return { ...state, cart: [...state.cart, newItem] };
    }
  }
  if (action.type === REMOVE_CART_ITEM) {
    const tempRemove = state.cart.filter((item) => item.id !== action.payload);
    return { ...state, cart: tempRemove };
  }
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }

  if (action.type === TOGGLE_CART_ITEM_AMOUNT) {
    const { id, value } = action.payload;
    const tempCart = state.cart.map((item) => {
      if (item.id == id) {
        if (value === "inc") {
          let newAmount = item.amount + 1;
          if (newAmount > item.max) {
            newAmount = item.max;
          }
          return { ...item, amount: newAmount };
        }
        if (value === "dec") {
          let newAmount = item.amount - 1;
          if (newAmount < 1) {
            newAmount = 1;
          }
          return { ...item, amount: newAmount };
        }
      } else {
        return item;
      }
    });
    return { ...state, cart: tempCart };
  }
  if (action.type === COUNT_CART_TOTALS) {
    // const amountItems = state.cart.reduce((total, cartItem) => {
    //   total = total + cartItem.amount;
    //   return total;
    // }, 0);
    // const totalAmount = state.cart.reduce((total, cartItem) => {
    //   const { amount, price } = cartItem;
    //   total = total + amount * price;
    //   return total;
    // }, 0);
    const { total_items, total_amount } = state.cart.reduce(
      (total, item) => {
        const { amount, price } = item;
        total.total_items += amount;
        total.total_amount += amount * price;
        return total;
      },
      { total_items: 0, total_amount: 0 }
    );
    return { ...state, total_items, total_amount };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default cart_reducer;

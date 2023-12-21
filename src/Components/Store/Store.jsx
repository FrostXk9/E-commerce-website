import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import CheckoutSlice from "./CheckoutSlice";

const Store = configureStore({
    reducer:{
        cart: CartSlice,
        favs: CheckoutSlice
    }
});

export default Store;

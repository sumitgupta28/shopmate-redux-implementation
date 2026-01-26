import { configureStore } from "@reduxjs/toolkit";
import { cartSliceReducer } from "./cartReducers";
import { clickSliceReducer } from "./clickReducer";
export const store = configureStore({
    reducer: {
        // Add your reducers here
        cartState: cartSliceReducer,
        clickState: clickSliceReducer,
    },
});

export default store;
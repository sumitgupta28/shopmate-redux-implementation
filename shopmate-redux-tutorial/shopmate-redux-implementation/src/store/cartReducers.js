import { createSlice } from '@reduxjs/toolkit';

interface CartState {
    cartList: any[];
    total: number;
}

const initialState: CartState = {
    cartList: [],
    total: 0,
};


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            console.log("Adding to cart:", action.payload);
            const updatedCardList = [...state.cartList, action.payload];
            const updatedTotal = state.total + action.payload.price;
            return { ...state, cartList: updatedCardList, total: updatedTotal };
        },
        removeFromCart(state, action) {
            console.log("Removing from cart:", action.payload);
            const updatedCardList = state.cartList.filter(product => product.id !== action.payload.id);
            const updatedTotal = state.total - action.payload.price;
            return { ...state, cartList: updatedCardList, total: updatedTotal };
        },
        clearCart(state) {
            console.log("Clearing cart");
            return { ...state, cartList: [], total: 0 };
        }

    },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export const cartSliceReducer = cartSlice.reducer;
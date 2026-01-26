import { createSlice } from '@reduxjs/toolkit';

interface ClickState {
    clickCount: number;
}

const initialState: ClickState = {
    clickCount: 0,
};

const clickSlice = createSlice({
    name: 'click',
    initialState,
    reducers: {
        incrementClick(state) {
            console.log("Incrementing click count");
            return { ...state, clickCount: state.clickCount + 1 };
        },
        decrementClick(state) {
            console.log("Decrementing click count");
            return { ...state, clickCount: state.clickCount - 1 };
        }
    },
});

export const { incrementClick, decrementClick } = clickSlice.actions;
export const clickSliceReducer = clickSlice.reducer;
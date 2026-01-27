import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import { postAPISlice } from "./post/postAPISlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [postAPISlice.reducerPath]: postAPISlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postAPISlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

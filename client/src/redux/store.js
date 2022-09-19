import { configureStore } from "@reduxjs/toolkit";
import imageSlice from "./features/imageSlice";

const store = configureStore({
  reducer: {
    image: imageSlice,
  },
});

export default store;

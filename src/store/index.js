import { configureStore } from "@reduxjs/toolkit";

import cartSliceReducer from "./cart-slice";
import feedbacksSliceReducer from "./feedback-slice";

const store = configureStore({
  reducer: {
    cart: cartSliceReducer,
    feedbacks: feedbacksSliceReducer
  }
})

export default store
import { createSlice } from '@reduxjs/toolkit';

const initialState = {cartItems: [], totalQuantity: 0}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      state.cartItems.unshift(action.payload.newCartItem)
      state.totalQuantity++;
    },
    removeFromCart(state, action) {
      var itemFound = state.cartItems.findIndex(item => item.id === action.payload.id)
      state.cartItems.splice(itemFound, 1)
      state.totalQuantity--;
    }
  }
})

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
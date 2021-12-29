import { createSlice } from "@reduxjs/toolkit";

const initialState = {feedbacks: []};

const feedbackSlice = createSlice({
  name: 'feedback',
  initialState,
  reducers: {
    addNewFeedback(state, action) {
      state.feedbacks.unshift(action.payload)
    },
    removeFeedback(state, action) {
      var itemFound = state.feedbacks.findIndex(fd => fd.id === action.payload)
      state.feedbacks.splice(itemFound, 1)
    }
  }
})

export const feedbackActions = feedbackSlice.actions;

export default feedbackSlice.reducer;
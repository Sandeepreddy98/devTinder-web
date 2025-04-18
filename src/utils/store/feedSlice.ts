import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
  name: "feed",
  initialState: null,
  reducers: {
    addFeed: (state, action) => {
      return action.payload;
    },
    clearFeed: (state, action) => null,
    removeFeed: (state: any, action) => {
      return state.filter((usr: any) => usr._id !== action.payload);
    },
  },
});
export const { addFeed, removeFeed, clearFeed } = feedSlice.actions;
export default feedSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
    text: "Hello World!",
    num: 1,
  },
  reducers: {
    handleText: (state, action) => {
      // state.text = "Hello Friends, I am Dixit.";
      state.text = action.payload;
      console.log("act****",action.payload)
    },
  },
  // extraReducers: (builder) => { }
});

export const { handleText } = counterSlice.actions;

export default counterSlice.reducer;

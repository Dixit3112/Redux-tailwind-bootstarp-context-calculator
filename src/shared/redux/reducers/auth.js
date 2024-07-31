import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    value: 0,
    text: "How are you?",
  },
  reducers: {
    incremented: (state, action) => {
      state.text = action.text;
      state.value += 1;
      // state.value += action.payload;
    },
    decremented: (state) => {
      state.value -= 1;
    },
  },
});

export const { incremented, decremented } = AuthSlice.actions;

export default AuthSlice.reducer;

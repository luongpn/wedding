import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const rootSlice = createSlice({
  name: "root",
  initialState: {
    activeNav: "hero",
    prevNav: "",
  },
  reducers: {
    updateActiveNav: (state, action) => {
      state.prevNav = state.activeNav;
      state.activeNav = action.payload;
    },
  },
});

const { reducer: appReducer, actions } = rootSlice;
export const { updateActiveNav } = actions;
export default appReducer;

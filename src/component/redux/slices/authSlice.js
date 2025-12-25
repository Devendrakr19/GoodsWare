import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    sidebarToggle: false,
  },
  reducers: {
    isActiveSidebar:(state, action)=>{
        state.sidebarToggle = action.payload
    }
  },
//   extraReducers: (builder) => {
//     builder
//       .addCase(sliderClasses.pending, (state, action) => {})
//       .addCase(sliderClasses.fulfilled, (state, action) => {})
//       .addCase(sliderClasses.rejected, (state, action) => {});
//   },
});

export const {isActiveSidebar} = authSlice.actions;
export default authSlice.reducer;

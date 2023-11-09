import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  isSidebarOpen: false,
  isDarkMode: false,
};

const { actions, reducer } = createSlice({
  name: "@app",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      return {
        ...state,
        isSidebarOpen: !state.isSidebarOpen,
      };
    },
  },
});

export const { toggleSidebar } = actions;
export default reducer;

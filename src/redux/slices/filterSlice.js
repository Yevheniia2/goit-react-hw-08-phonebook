import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilterContact(state, action) {
      return action.payload;
    },
  },
});

export const { setFilterContact } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
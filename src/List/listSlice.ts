/* eslint-disable import/no-extraneous-dependencies */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import State from './Types/State';

const initialState: State = {
  elements: [],
  selected: [],
  error: undefined,
};

export const getFirstTwenty = createAsyncThunk(
  'elements/getFirstTwenty',
  async () => {
    const firstTwenty = await fetch(
      ' https://jsonplaceholder.typicode.com/albums/1/photos?_page=1&_limit=20'
    );
    const data = await firstTwenty.json();

    return data;
  }
);

const listSlice = createSlice({
  name: 'elements',
  initialState,
  reducers: {
    addSelected: (state, action) => {
      state.selected = [...state.selected, action.payload];
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getFirstTwenty.fulfilled, (state, action) => {
        state.elements = action.payload;
      })
      .addCase(getFirstTwenty.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const { addSelected } = listSlice.actions;
export default listSlice.reducer;

import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IBook {
  search: string | null;
}
const initialState: IBook = {
  search: '',
};
const bookSlice = createSlice({
  name: 'Book',
  initialState,
  reducers: {
    setSearchBook: (state, action: PayloadAction<string | null>) => {
      state.search = action.payload;
    },
    clearSearchBook: (state) => {
      state.search = '';
    },
  },
});
export const { setSearchBook, clearSearchBook } = bookSlice.actions;
export default bookSlice.reducer;

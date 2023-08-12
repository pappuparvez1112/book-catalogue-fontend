import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IProduct {
  product: [];
  search: string | null;
}
const initialState: IProduct = {
  product: [],
  search: '',
};
const productSlice = createSlice({
  name: 'product',
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
export const { setSearchBook, clearSearchBook } = productSlice.actions;
export default productSlice.reducer;

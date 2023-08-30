import { IBook } from '@/types/globalTypes';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IBooks {
  products: IBook[];
  search: string | null;
  filter: IBook[];
}
const initialState: IBooks = {
  search: '',
  products: [],
  filter: [],
};
const bookSlice = createSlice({
  name: 'Book',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IBook>) => {
      const existing = state.products.find(
        (product) => product._id === action.payload._id
      );
      if (existing) {
        existing.quantity = existing.quantity! + 1;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action: PayloadAction<IBook>) => {
      state.products = state.products.filter(
        (product) => product._id !== action.payload._id
      );
      state.products.push({ ...action.payload, quantity: 1 });
    },
    setSearchBook: (state, action: PayloadAction<string | null>) => {
      state.search = action.payload;
    },
    clearSearchBook: (state) => {
      state.search = '';
    },
    setFilterProduct: (state, action: PayloadAction<IBook[]>) => {
      state.filter = action.payload;
    },
  },
});
export const {
  setSearchBook,
  clearSearchBook,
  addToCart,
  removeFromCart,
  setFilterProduct,
} = bookSlice.actions;
export default bookSlice.reducer;

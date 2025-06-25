import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

export interface Product {
  id: string;
  name: string;
  seller: string;
  createdAt: string;
}

const initialState: Product[] = [];

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Omit<Product, 'id' | 'createdAt'>>) => {
      const newProduct: Product = {
        id: uuid(),
        createdAt: new Date().toISOString(),
        ...action.payload,
      };
      state.push(newProduct);
    },
  },
});

export const { addProduct } = productsSlice.actions;
export default productsSlice.reducer;


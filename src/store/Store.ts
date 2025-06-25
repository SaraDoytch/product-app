
import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./Slices/productsSlice"; 
import { loadState, saveState } from './localStorage';
const preloadedState = loadState();

const store = configureStore({
  reducer: {
    products: productsReducer 
  },
   preloadedState: {
    products: preloadedState ?? [], 
  },
});
store.subscribe(() => {
  saveState(store.getState().products);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;


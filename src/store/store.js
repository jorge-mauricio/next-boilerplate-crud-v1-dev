import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from './ItemsSlice';

export const store = configureStore({
  reducer: {
    items: itemsReducer,
  },
});

import { configureStore } from '@reduxjs/toolkit';
import catalog from './CatalogSlice'

export const store = configureStore({
  reducer: {
     catalog
  },
  devTools: process.env.NODE_ENV !== 'production'
});

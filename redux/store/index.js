import { configureStore } from '@reduxjs/toolkit';
import calculatorReducer from '../features/calculator/calculatorSlice';

const store = configureStore({
  reducer: {
    calculator: calculatorReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
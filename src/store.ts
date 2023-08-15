import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import listSlice from './List/listSlice';

const store = configureStore({
  reducer: {
    elements: listSlice,
    selected: listSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof store.getState>;

export default store;

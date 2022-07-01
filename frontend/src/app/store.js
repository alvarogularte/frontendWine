import { configureStore } from '@reduxjs/toolkit';
import selectionsReducer from './slices/selections';

export default configureStore({
  reducer: {
    selections: selectionsReducer
  }
})
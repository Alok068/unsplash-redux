import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './Components/searchSlice'
import resultsReducer from './Components/resultsSlice'

export const store = configureStore({
  reducer: {
    search: searchReducer,
    result: resultsReducer
  },
});

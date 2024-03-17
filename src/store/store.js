// importer redux toolkit
import { configureStore } from '@reduxjs/toolkit'
// import homeSlice from ./homeSlice
import homeSlice from './homeSlice'


export const store = configureStore({
  reducer: {
    home: homeSlice
  },
});
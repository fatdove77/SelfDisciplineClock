import { configureStore } from "@reduxjs/toolkit";
import counterSlice from './features/counterSlice'
import movieSlice from './features/movieSlice'
import isShowDaySlice from './features/isShowDaySlice'
import daysSlice from "./features/daysSlice";
import habitsSlice from "./features/habitsSlice";
console.log(counterSlice);
console.log(daysSlice);
const store = configureStore({
  reducer:{
    counter:counterSlice,
    movie:movieSlice,
    isShowDay:isShowDaySlice,
    days:daysSlice,
    habits:habitsSlice
  }
})

export default store;
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'


export const store = configureStore({
  reducer : {
    counter : counterReducer
  },
})

//create stre
//wrap app component under Provider
//create Slice
//register reducer in store
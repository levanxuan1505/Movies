// store.js
import {configureStore, createSlice} from '@reduxjs/toolkit';

const scrollSlice = createSlice({
  name: 'scroll',
  initialState: {
    data: [],
  },
  reducers: {
    setData: (state: any, action) => {
      state.data = action.payload;
    },
  },
});

const scrollHBOSlice = createSlice({
  name: 'scrollHBO',
  initialState: {
    data: '',
  },
  reducers: {
    setDataHBO: (state: any, action) => {
      state.data = action.payload;
    },
  },
});

export const {setData} = scrollSlice.actions;
export const {setDataHBO} = scrollHBOSlice.actions;

const reducer = {
  scroll: scrollSlice.reducer,
  scrollHBO: scrollHBOSlice.reducer,
};

const store = configureStore({
  reducer,
});

export default store;

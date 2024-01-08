// store.js
import {configureStore, createSlice} from '@reduxjs/toolkit';

const scrollSlice = createSlice({
  name: 'scroll',
  initialState: {
    data: [],
    isLoading: false,
    page: 1,
  },
  reducers: {
    setData: (state: any, action) => {
      state.data = [...state.data, action.payload];
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    incrementPage: state => {
      state.page += 1;
    },
  },
});

const scrollHBOSlice = createSlice({
  name: 'scrollHBOSlice',
  initialState: {
    data: [],
    isLoading: false,
    page: 31,
  },
  reducers: {
    setDataHBO: (state: any, action) => {
      state.data = [...state.data, action.payload];
    },
    setLoadingHBO: (state, action) => {
      state.isLoading = action.payload;
    },
    incrementPageHBO: state => {
      state.page += 1;
    },
  },
});

export const {setData, setLoading, incrementPage} = scrollSlice.actions;
export const {setDataHBO, setLoadingHBO, incrementPageHBO} =
  scrollHBOSlice.actions;

const reducer = {
  scroll: scrollSlice.reducer,
  scrollHBOSlice: scrollHBOSlice.reducer,
};

const store = configureStore({
  reducer,
});

export default store;

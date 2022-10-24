import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  entities: [],
  loading: false,
  category: "Indonesia",
};

export const getNews = createAsyncThunk("news/getNews", async (category) => {
  const response = await axios.get(
    `https://newsapi.org/v2/top-headlines?country=id&category=${category}&apiKey=${process.env.REACT_APP_APIKEY}`
  );
  return response.data;
});

export const getSearchNews = createAsyncThunk("news/getNews", async (query) => {
  const response = await axios.get(
    `https://newsapi.org/v2/everything?q=${query}&language=id&pageSize=10&apiKey=${process.env.REACT_APP_APIKEY}`
  );
  return response.data;
});

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload; // mutate the state all you want with immer
    },
  },
  extraReducers: {
    [getNews.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.entities = payload;
    },
    [getNews.pending]: (state) => {
      state.loading = true;
    },
    [getNews.rejected]: (state) => {
      state.loading = false;
    },
    [getSearchNews.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.entities = payload;
    },
    [getSearchNews.pending]: (state) => {
      state.loading = true;
    },
    [getSearchNews.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const newsReducer = newsSlice.reducer;
export const { setCategory } = newsSlice.actions;

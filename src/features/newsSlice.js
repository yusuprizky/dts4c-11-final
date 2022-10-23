import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  entities: [],
  loading: false,
  category: "Indonesia",
};

export const getNews = createAsyncThunk("news/getNews", async (category) => {
  const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=id&category=${category}&apiKey=${process.env.REACT_APP_APIKEY}`);
  console.log(category);
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
  },
});

export const newsReducer = newsSlice.reducer;
export const { setCategory } = newsSlice.actions;

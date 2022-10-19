import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  entities: [],
  loading: false,
};

export const getNews = createAsyncThunk("news/getNews", async () => {
  const response = await axios.get(`https://newsapi.org/v2/everything?q=technology&pageSize=10&apiKey=${process.env.REACT_APP_APIKEY}`);
  return response.data;
  // console.log(response.data);
});

const newsSlice = createSlice({
  name: "news",
  initialState,
  extraReducers: {
    [getNews.pending]: (state) => {
      state.loading = true;
    },
    [getNews.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.entities = payload;
    },
    [getNews.rejected]: (state) => {
      state.loading = false;
    },
  },
});

// export const newsSelectors = newsEntity.getSelectors((state) => state.news);
export const newsReducer = newsSlice.reducer;

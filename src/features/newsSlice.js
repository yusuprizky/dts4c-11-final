import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  entities: [],
  loading: false,
  title: "Indonesia",
  category: "general",
  query: "",
  totalData: 0,
  pageSize: 10,
  currentPage: 1,
  isSearch: true,
};

export const getNews = createAsyncThunk(
  "news/getNews",
  async (args, { getState }) => {
    const state = getState();
    let response;
    console.log(state.news.query);
    if (state.news.query !== "") {
      response = await axios.get(
        `https://newsapi.org/v2/everything?q=${state.news.query}&language=id&pageSize=${state.news.pageSize}&page=${state.news.currentPage}&apiKey=${process.env.REACT_APP_APIKEY}`
      );
    } else {
      response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=id&category=${state.news.category}&pageSize=${state.news.pageSize}&page=${state.news.currentPage}&apiKey=${process.env.REACT_APP_APIKEY}`
      );
    }
    return response.data;
  }
);

// export const getSearchNews = createAsyncThunk(
//   "news/getNews",
//   async (args, { getState }) => {
//     const state = getState();
//     const response = await axios.get(
//       `https://newsapi.org/v2/everything?q=${state.news.query}&language=id&pageSize=${state.news.pageSize}&page=${state.news.currentPage}&apiKey=${process.env.REACT_APP_APIKEY}`
//     );
//     return response.data;
//   }
// );

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: {
    [getNews.fulfilled]: (state, { payload }) => {
      console.log(payload);
      state.loading = false;
      state.entities = payload;
      state.totalData = payload.totalResults;
      state.isSearch = false;
    },
    [getNews.pending]: (state) => {
      state.loading = true;
    },
    [getNews.rejected]: (state) => {
      state.loading = false;
    },
    // [getSearchNews.fulfilled]: (state, { payload }) => {
    //   state.loading = false;
    //   state.entities = payload;
    //   state.totalData = payload.totalResults;
    //   state.isSearch = true;
    // },
    // [getSearchNews.pending]: (state) => {
    //   state.loading = true;
    // },
    // [getSearchNews.rejected]: (state) => {
    //   state.loading = false;
    // },
  },
});

export const newsReducer = newsSlice.reducer;
export const { setCategory, setTitle, setQuery, setCurrentPage } =
  newsSlice.actions;

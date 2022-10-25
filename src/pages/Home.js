import NewsList from "../components/NewsList";
import Grid from "@mui/material/Grid";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentPage, getNews } from "../features/newsSlice";
import {
  Pagination,
  Container,
  CircularProgress,
  Stack,
  Typography,
} from "@mui/material";
import { useState, useEffect } from "react";

const Home = () => {
  const dispatch = useDispatch();
  let { totalData, loading, messageError, currentPage } = useSelector(
    (state) => state.news
  );
  let totalPage = Math.ceil(totalData / 10);
  const [page, setPage] = useState(1);

  useEffect(() => {
    try {
      dispatch(setCurrentPage(page));
    } finally {
      dispatch(getNews());
    }
  }, [dispatch, page]);

  const handlePage = (event, value) => {
    console.log(value);
    setPage(value);
  };

  return (
    <Container sx={{ height: "100%", marginTop: "2rem" }}>
      {(() => {
        if (loading === "loading") {
          return (
            <Stack alignItems="center" height="100vh">
              <CircularProgress color="primary" />
            </Stack>
          );
        } else if (loading === "failed") {
          return (
            <Stack alignItems="center" height="100vh">
              <Typography variant="h5">{messageError}</Typography>
            </Stack>
          );
        } else {
          return (
            <div>
              <NewsList />
              <Stack alignItems="center">
                <Pagination
                  page={currentPage}
                  count={totalPage}
                  onChange={handlePage}
                />
              </Stack>
            </div>
          );
        }
      })()}
    </Container>
  );
};

export default Home;

import NewsList from "../components/NewsList";
import Grid from "@mui/material/Grid";

const Home = () => {
  return (
    <>
      <Grid container spacing={2} sx={{ marginTop: "2rem" }}>
        <Grid item xs={12} md={12}>
          <NewsList />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;

import HotTopic from "../components/HotTopic";
import LatestNews from "../components/LatestNews";
import Grid from "@mui/material/Grid";

const Home = () => {
  return (
    <>
      <Grid container spacing={2} sx={{ marginTop: "5rem" }}>
        <Grid item xs={8}>
          <HotTopic fullWidth />
        </Grid>
        <Grid item xs={4}>
          ss
        </Grid>
      </Grid>
    </>
  );
};

export default Home;

import HotTopic from "../components/HotTopic";
import LatestNews from "../components/LatestNews";
import Grid from "@mui/material/Grid";

const Home = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <HotTopic />
        </Grid>
        <Grid item xs={4}>
          ss
        </Grid>
      </Grid>
      Ini Home
      <LatestNews />
    </>
  );
};

export default Home;

import NewsList from "../components/NewsList";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";

const Home = () => {
  return (
    <Container sx={{ height: "100%" }}>
      <Grid container spacing={2} sx={{ marginTop: "2rem" }}>
        <Grid item xs={12} md={12}>
          <NewsList />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;

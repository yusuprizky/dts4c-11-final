import { Grid } from "@mui/material";
import NewsList from "../components/NewsList";

export default function Sport() {
  return (
    <>
      <Grid container spacing={2} sx={{ marginTop: "2rem" }}>
        <Grid item xs={12} md={12}>
          <NewsList />
        </Grid>
      </Grid>
    </>
  );
}

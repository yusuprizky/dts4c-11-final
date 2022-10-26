import { Container, Stack, Typography } from "@mui/material";

export default function Health() {
  return (
    <Container sx={{ height: "100%", marginTop: "2rem" }}>
      <Stack alignItems="center" height="100vh">
        <Typography variant="h5">404 Not Found</Typography>
      </Stack>
    </Container>
  );
}

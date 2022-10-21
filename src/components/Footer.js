import { AppBar, Toolbar, Typography, Grid } from "@mui/material/";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer style={{ marginTop: "5rem", backgroundColor: "#121212" }}>
      <AppBar position="static" elevation={0} component="footer" color="default">
        <Toolbar style={{ justifyContent: "center" }}>
          <Typography variant="p" noWrap component="div" sx={{ flexGrow: 1, alignSelf: "center" }}>
            <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
              REA4C Berita
            </Link>
          </Typography>
          <Typography
            variant="p"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              alignSelf: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Typography variant="caption">©2022</Typography>
          </Typography>
          <Typography
            variant="p"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              alignSelf: "center",
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Typography variant="caption">
              <Facebook sx={{ marginRight: "5px", cursor: "pointer" }} />
              <Instagram sx={{ marginRight: "5px", cursor: "pointer" }} />
              <Twitter sx={{ marginRight: "5px", cursor: "pointer" }} />
            </Typography>
          </Typography>
        </Toolbar>
      </AppBar>
    </footer>
  );
}

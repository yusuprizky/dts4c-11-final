import { AppBar, Toolbar, Typography, Grid } from "@mui/material/";
import { Info, Instagram, Security, Twitter } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer style={{ marginTop: "5rem" }}>
      <AppBar position="static" elevation={0} component="footer" color="default">
        <Toolbar style={{ justifyContent: "center" }}>
          <Typography variant="p" noWrap component="div" sx={{ flexGrow: 1, alignSelf: "center" }}>
            <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
              REA4C Berita
            </Link>
          </Typography>
          <Typography variant="p" noWrap component="div" sx={{ flexGrow: 1, alignSelf: "center", display: "flex", justifyContent: "center" }}>
            <Typography variant="caption">©2022</Typography>
          </Typography>
          <Typography variant="p" noWrap component="div" sx={{ flexGrow: 1, alignSelf: "center", display: "flex", justifyContent: "end" }}>
            <Typography variant="caption">
              <Instagram />
              <Twitter />
            </Typography>
          </Typography>
        </Toolbar>
      </AppBar>
    </footer>
  );
}

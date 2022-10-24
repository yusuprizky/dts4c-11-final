import { AppBar, Paper, Toolbar, Typography, Grid } from "@mui/material/";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function Footer({ toggleDark }) {
  return (
    <footer style={{ marginTop: "5rem" }}>
      <AppBar position="static" elevation={0} component="footer" color="default" enableColorOnDark>
        <Toolbar style={{ justifyContent: "center" }}>
          <Typography noWrap component="div" sx={{ flexGrow: 1, alignSelf: "center" }}>
            {/* <Link to="/" style={{ textDecoration: "none" }}> */}
            <Typography variant="h6" sx={{ fontFamily: "Roboto" }}>
              REA4C Berita
            </Typography>
            {/* </Link> */}
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

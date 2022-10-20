import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import Stack from "@mui/material/Stack";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
  ".MuiInputBase-root": {
    width: "100%",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "default",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
}));

const Header = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, value) => {
    setValue(value);
  };

  return (
    <>
      <AppBar
        elevation={0}
        position="static"
        color="default"
        sx={{ padding: "15px 15px 0px 15px" }}
        enableColorOnDark
      >
        {/* <Toolbar component="nav"> */}
        <Stack spacing={1}>
          <Grid container spacing={0}>
            <Grid item lg={1}>
              <Typography
                variant="p"
                noWrap
                component="div"
                sx={{ flexGrow: 1, alignSelf: "flex-end" }}
              >
                REA4C Berita
              </Typography>
            </Grid>
            <Grid item lg={10} align="center">
              <Box
                sx={{
                  width: "70%",
                  display: "block",
                  textAlign: "left",
                }}
              >
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Telusuri topik, lokasi & sumber"
                    inputProps={{ "aria-label": "search" }}
                  />
                </Search>
              </Box>
            </Grid>
            <Grid item lg={1}>
              <IconButton
                size="large"
                aria-label="display more actions"
                edge="end"
                color="inherit"
              >
                <DarkModeIcon />
              </IconButton>
            </Grid>
          </Grid>
          <Tabs value={value} onChange={handleChange} centered>
            <Tab disableRipple label="Indonesia" />
            <Tab disableRipple label="Bisnis" />
            <Tab disableRipple label="Teknologi" />
            <Tab disableRipple label="Olahraga" />
            <Tab disableRipple label="Sains" />
            <Tab disableRipple label="Kesehatan" />
          </Tabs>
        </Stack>
      </AppBar>
    </>
  );
};

export default Header;

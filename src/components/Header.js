import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useSelector, useDispatch } from "react-redux";
import { getNews, setCategory } from "../features/newsSlice";
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
import { NavLink, useNavigate } from "react-router-dom";

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
  const dispatch = useDispatch();
  const [value, setValue] = useState("general");

  const handleChange = (event, value) => {
    dispatch(getNews(value));
    dispatch(setCategory(event.target.textContent));
    setValue(value);
  };

  const navigate = useNavigate();
  const handleRedirect = (e) => {
    e.preventDefault();
    const name = e.target.name;
    if (name === "home") {
      navigate("/");
    } else {
      navigate(`/${name}`);
    }
  };

  return (
    <>
      <AppBar elevation={0} position="sticky" color="default" sx={{ padding: "10px 30px 0px 30px" }} enableColorOnDark>
        {/* <Toolbar component="nav"> */}
        <Stack spacing={1}>
          <Grid container spacing={0}>
            <Grid item lg={2}>
              <Typography variant="h5" noWrap component="div" sx={{ fontFamily: "Roboto", flexGrow: 1, alignSelf: "flex-end" }}>
                REA4C Berita
              </Typography>
            </Grid>
            <Grid item lg={8} align="center">
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
                  <StyledInputBase placeholder="Telusuri topik, lokasi & sumber" inputProps={{ "aria-label": "search" }} />
                </Search>
              </Box>
            </Grid>
            <Grid item lg={2}>
              <Box display="flex" justifyContent="flex-end">
                <IconButton size="large" aria-label="display more actions" edge="end" color="inherit">
                  <DarkModeIcon />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
          <Tabs value={value} onChange={handleChange} centered>
            <Tab disableRipple value="general" label="Indonesia" name="home" onClick={handleRedirect} />
            <Tab disableRipple value="business" label="Bisnis" name="bisnis" onClick={handleRedirect} />
            <Tab disableRipple value="technology" label="Teknologi" name="teknologi" onClick={handleRedirect} />
            <Tab disableRipple value="sports" label="Olahraga" name="olahraga" onClick={handleRedirect} />
            <Tab disableRipple value="science" label="Sains" name="sains" onClick={handleRedirect} />
            <Tab disableRipple value="health" label="Kesehatan" name="kesehatan" onClick={handleRedirect} />
          </Tabs>
        </Stack>
      </AppBar>
    </>
  );
};

export default Header;
